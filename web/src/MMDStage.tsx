import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MMDLoader } from "three-stdlib";
import { audioBus } from "./audioBus";

export type MMDModel = { id: string; name: string; file: string; thumb: string };

type Props = {
  model?: MMDModel;
  enabled: boolean;
  speaking: boolean;
  audioUrl?: string;
};

const MODEL_HEIGHT = 20;

function findMorph(mesh: THREE.SkinnedMesh, names: string[]) {
  const dictionary = mesh.morphTargetDictionary || {};
  const target = names.find((name) => Object.prototype.hasOwnProperty.call(dictionary, name));
  return target ? dictionary[target] : undefined;
}

const BLINK_NAMES = ["まばたき", "眨眼", "blink", "瞬き", "目閉じ", "闭眼"];
const VOWEL_NAMES: Record<string, string[]> = {
  a: ["あ", "a", "口_あ", "mouth_a", "张嘴", "张口"],
  i: ["い", "i", "口_い", "mouth_i", "咪嘴"],
  u: ["う", "u", "口_う", "mouth_u", "嘟嘴"],
  e: ["え", "e", "口_え", "mouth_e"],
  o: ["お", "o", "口_お", "mouth_o", "哦"],
};

// Rough vowel formant regions over an fftSize=512 spectrum (48kHz → 93.75Hz/bin).
const VOWEL_BANDS: Record<string, [number, number]> = {
  a: [2, 9],
  i: [21, 42],
  u: [2, 6],
  e: [5, 21],
  o: [3, 10],
};

function bandEnergy(data: Uint8Array, range: [number, number]) {
  let sum = 0;
  for (let i = range[0]; i <= Math.min(range[1], data.length - 1); i += 1) sum += data[i];
  return sum / Math.max(1, range[1] - range[0] + 1) / 255;
}

export default function MMDStage({ model, enabled, speaking, audioUrl }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const speakingRef = useRef(speaking);
  const [status, setStatus] = useState("待机");

  useEffect(() => {
    speakingRef.current = speaking;
  }, [speaking]);

  useEffect(() => {
    if (!enabled || !model || !hostRef.current) return undefined;
    let disposed = false;
    const host = hostRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.replaceChildren(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xf4e9ff, 0x21172d, 2.4);
    const key = new THREE.DirectionalLight(0xffe0c2, 2.2);
    key.position.set(-8, 18, 16);
    const rim = new THREE.DirectionalLight(0x7fb4ff, 1.1);
    rim.position.set(10, 6, -12);
    scene.add(hemi, key, rim);

    const loader = new MMDLoader();
    let mesh: THREE.SkinnedMesh | undefined;
    let frame = 0;
    let lastBlink = performance.now() + 1800;
    let blinkUntil = 0;
    let morphLogged = false;
    const spectrum = new Uint8Array(256);
    const clock = new THREE.Clock();

    const resize = () => {
      const width = host.clientWidth || 320;
      const height = host.clientHeight || 460;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    setStatus("加载模型…");

    loader.load(model.file, (loaded: THREE.SkinnedMesh) => {
      if (disposed) return;
      mesh = loaded;
      // Normalize: feet on the floor, full body visible from any model's native size.
      const rawBox = new THREE.Box3().setFromObject(loaded);
      const rawSize = rawBox.getSize(new THREE.Vector3());
      const scale = MODEL_HEIGHT / Math.max(rawSize.y, 0.001);
      loaded.scale.setScalar(scale);
      loaded.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(loaded);
      const center = box.getCenter(new THREE.Vector3());
      loaded.position.x -= center.x;
      loaded.position.y -= box.min.y;
      loaded.position.z -= center.z;
      scene.add(loaded);
      const headY = MODEL_HEIGHT * 0.93;
      const distance = (MODEL_HEIGHT / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 1.55;
      camera.position.set(0, headY * 0.82, distance);
      camera.lookAt(0, MODEL_HEIGHT * 0.56, 0);
      setStatus("已连接舞台");
    }, undefined, () => {
      if (!disposed) setStatus("模型加载失败");
    });

    const animate = () => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      if (mesh) {
        if (!morphLogged) {
          morphLogged = true;
          const names = Object.keys(mesh.morphTargetDictionary || {});
          if (names.length) console.info("[MMDStage] morphs:", names.join(", "));
        }
        const spine = mesh.skeleton?.getBoneByName("上半身") || mesh.skeleton?.getBoneByName("上半身2") || mesh.skeleton?.getBoneByName("UpperBody");
        if (spine) spine.rotation.z = Math.sin(elapsed * 1.35) * 0.012;
        const head = mesh.skeleton?.getBoneByName("頭") || mesh.skeleton?.getBoneByName("Head");
        if (head) head.rotation.z = Math.sin(elapsed * 0.9) * 0.02 + (speakingRef.current ? Math.sin(elapsed * 2.2) * 0.03 : 0);
        mesh.rotation.y = Math.sin(elapsed * 0.35) * 0.035;

        const influences = mesh.morphTargetInfluences;
        if (influences) {
          const blinkIndex = findMorph(mesh, BLINK_NAMES);
          if (blinkIndex !== undefined) {
            if (performance.now() > lastBlink) {
              blinkUntil = performance.now() + 130;
              lastBlink = performance.now() + 3500 + Math.random() * 2600;
            }
            const blinkProgress = Math.max(0, Math.min(1, (blinkUntil - performance.now()) / 65));
            influences[blinkIndex] = blinkProgress;
          }

          const analyser = audioBus.analyser;
          const vowels: Record<string, number | undefined> = {};
          for (const [vowel, names] of Object.entries(VOWEL_NAMES)) vowels[vowel] = findMorph(mesh, names);
          const hasVowelMorphs = Object.values(vowels).some((value) => value !== undefined);

          if (analyser && hasVowelMorphs) {
            analyser.getByteFrequencyData(spectrum as Uint8Array<ArrayBuffer>);
            const total = bandEnergy(spectrum, [2, 43]);
            if (total > 0.02) {
              let bestVowel = "a";
              let bestScore = -1;
              for (const [vowel, range] of Object.entries(VOWEL_BANDS)) {
                const score = bandEnergy(spectrum, range) / total;
                if (score > bestScore) {
                  bestScore = score;
                  bestVowel = vowel;
                }
              }
              const openness = Math.min(1, total * 2.4);
              for (const [vowel, index] of Object.entries(vowels)) {
                if (index === undefined) continue;
                const target = vowel === bestVowel ? openness : openness * 0.06;
                influences[index] += (target - influences[index]) * 0.35;
              }
            } else {
              for (const index of Object.values(vowels)) {
                if (index !== undefined) influences[index] *= 0.8;
              }
            }
          } else if (hasVowelMorphs && speakingRef.current) {
            // Browser speechSynthesis gives no spectrum; gently fake articulation.
            const mouthIndex = vowels.a;
            if (mouthIndex !== undefined) {
              const target = 0.2 + (Math.sin(elapsed * 9) + 1) * 0.12 + Math.random() * 0.08;
              influences[mouthIndex] += (target - influences[mouthIndex]) * 0.25;
            }
          } else if (hasVowelMorphs) {
            for (const index of Object.values(vowels)) {
              if (index !== undefined) influences[index] *= 0.85;
            }
          }
        }
      }
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      scene.traverse((object) => {
        const asMesh = object as THREE.Mesh;
        if (asMesh.geometry) asMesh.geometry.dispose();
        if (Array.isArray(asMesh.material)) asMesh.material.forEach((item) => item.dispose());
        else if (asMesh.material) asMesh.material.dispose();
      });
      renderer.dispose();
      host.replaceChildren();
    };
  }, [enabled, model?.id, model?.file]);

  if (!enabled) return <div className="mmd-stage mmd-stage-off"><span>舞台已关闭</span></div>;
  if (!model) return <div className="mmd-stage mmd-stage-empty"><span>请在角色设置中绑定 MMD 模型</span></div>;
  return <div className="mmd-stage-wrap">
    <div ref={hostRef} className="mmd-stage" aria-label={`${model.name} MMD 舞台`} />
    <div className="mmd-stage-floor" />
    <div className="mmd-stage-status"><i className={speaking ? "speaking" : ""} />{speaking ? "正在说话" : status}{audioUrl ? " · 口型同步" : ""}</div>
  </div>;
}
