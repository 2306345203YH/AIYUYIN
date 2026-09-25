// Shared audio bus: lets the MMD stage read real-time spectrum from whatever
// TTS audio is playing, and knows when browser speechSynthesis is talking.
type AudioBus = {
  analyser: AnalyserNode | null;
  speaking: boolean;
  attach: (audio: HTMLAudioElement) => void;
  detach: (audio: HTMLAudioElement) => void;
};

let context: AudioContext | null = null;
let currentSource: MediaElementAudioSourceNode | null = null;
let currentAudio: HTMLAudioElement | null = null;

const bus: AudioBus = {
  analyser: null,
  speaking: false,
  attach(audio: HTMLAudioElement) {
    try {
      if (!context) context = new AudioContext();
      if (currentAudio === audio) return;
      this.detach(currentAudio as HTMLAudioElement);
      void context.resume();
      currentSource = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.55;
      currentSource.connect(analyser);
      // Route through to output so the user still hears it.
      analyser.connect(context.destination);
      this.analyser = analyser;
      currentAudio = audio;
    } catch {
      // CORS or double-connect issues: lip sync silently degrades.
      this.analyser = null;
      currentAudio = audio;
    }
  },
  detach(audio: HTMLAudioElement | null) {
    if (currentAudio && audio && currentAudio !== audio) return;
    try {
      currentSource?.disconnect();
      this.analyser?.disconnect();
    } catch {
      /* already gone */
    }
    currentSource = null;
    this.analyser = null;
    currentAudio = null;
  },
};

export const audioBus = bus;
