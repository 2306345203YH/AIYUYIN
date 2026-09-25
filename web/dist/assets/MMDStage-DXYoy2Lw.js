import{n as e,r as t,t as n}from"./index-yLvuCN8d.js";var r=t(),i=`attached`,a=1e3,o=1001,s=1002,c=1003,l=1004,u=1005,d=1006,f=1007,p=1008,m=1009,h=1010,g=1011,_=1012,v=1013,y=1014,b=1015,x=1016,S=1017,C=1018,w=1020,T=35902,E=35899,D=1021,O=1022,k=1023,A=1026,j=1027,M=1028,ee=1029,N=1030,te=1031,ne=1033,re=33776,P=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,F=35843,I=36196,le=37492,ue=37496,de=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,L=36283,Me=36284,Ne=36285,Pe=36286,R=2300,Fe=2301,z=2302,B=2303,Ie=2400,Le=2401,Re=2402,ze=2500,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,V(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},U=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(U[e&255]+U[e>>8&255]+U[e>>16&255]+U[e>>24&255]+`-`+U[t&255]+U[t>>8&255]+`-`+U[t>>16&15|64]+U[t>>24&255]+`-`+U[n&63|128]+U[n>>8&255]+`-`+U[n>>16&255]+U[n>>24&255]+U[r&255]+U[r>>8&255]+U[r>>16&255]+U[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*ot}function St(e){return e*st}function Ct(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kt={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:W,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new K,Mt=new At,q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new q,Pt=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var J=It();function Lt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Rt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var zt,Bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zt===void 0&&(zt=Xe(`canvas`)),zt.width=e.width,zt.height=e.height;let t=zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Lt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Lt(t[e]/255)*255):t[e]=Lt(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Vt=0,Ht=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ut(r[t].image)):e.push(Ut(r[t]))}else e=Ut(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ut(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var Wt=0,Gt=new K,Kt=class e extends it{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=o,i=o,a=d,s=p,c=k,l=m,u=e.DEFAULT_ANISOTROPY,f=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=ct(),this.name=``,this.source=new Ht(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gt).x}get height(){return this.source.getSize(Gt).y}get depth(){return this.source.getSize(Gt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){V(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case a:e.x-=Math.floor(e.x);break;case o:e.x=e.x<0?0:1;break;case s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case a:e.y-=Math.floor(e.y);break;case o:e.y=e.y<0?0:1;break;case s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=300,Kt.DEFAULT_ANISOTROPY=1;var Y=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:d,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Y(0,0,e,t),this.scissorTest=!1,this.viewport=new Y(0,0,e,t),this.textures=[];let r=new Kt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:d,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ht(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jt=class extends qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yt=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xt=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},X=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new K,Qt=new X,$t=new K(0,0,0),en=new K(1,1,1),tn=new K,nn=new K,rn=new K,an=new X,on=new At,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ln=0,un=new K,dn=new At,fn=new X,pn=new K,mn=new K,hn=new K,gn=new At,_n=new K(1,0,0),vn=new K(0,1,0),yn=new K(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new sn,r=new At,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new X},normalMatrix:{value:new q}}),this.matrix=new X,this.matrixWorld=new X,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new K(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},En={type:`move`},Dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(En)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},On={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},An={h:0,s:0,l:0};function jn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=lt(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=jn(i,r,e+1/3),this.g=jn(i,r,e),this.b=jn(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=On[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}copyLinearToSRGB(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return J.workingToColorSpace(Mn.copy(this),e),Math.round(W(Mn.r*255,0,255))*65536+Math.round(W(Mn.g*255,0,255))*256+Math.round(W(Mn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ve){J.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(An);let n=ft(kn.h,An.h,t),r=ft(kn.s,An.s,t),i=ft(kn.l,An.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Z;Z.NAMES=On;var Nn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new K,Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new Y,Gn=new Y,Kn=new Y,qn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new K,new K,new K,new K,new K,new K,new K,new K],Xn=new K,Zn=new Jn,Qn=new K,$n=new K,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new K,ur=new G,dr=0,fr=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=b,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new K,vr=new K,yr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new X,Sr=new wn,Cr=new K,wr=new Jn,Tr=new Jn,Er=new K,Dr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Je(e)?mr:pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=new K,kr=new K,Ar=new q,jr=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Or.subVectors(n,t).cross(kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Or),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ar.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mr=0,Nr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){V(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fr.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Fr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),s=-Lr.dot(Ir),c=Lr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fr).addScaledVector(Ir,d),f}intersectSphere(e,t){if(e.radius<0)return null;Pr.subVectors(e.center,this.origin);let n=Pr.dot(this.direction),r=Pr.dot(Pr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,ee;if(y>=b&&y>=x?(w=s,D=u,A=p,ee=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,ee=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,ee=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let N=S/w,te=C/w,ne=1/w,re=T-N*D,P=E-te*D,ie=O-N*A,ae=k-te*A,oe=j-N*ee,se=M-te*ee,ce=oe*ae-se*ie,F=re*se-P*oe,I=ie*P-ae*re;if(r){if(ce<0||F<0||I<0)return null}else if((ce<0||F<0||I<0)&&(ce>0||F>0||I>0))return null;let le=ce+F+I;if(le===0)return null;let ue=ne*(ce*D+F*A+I*ee);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new X,Vr=new Rr,Hr=new yr,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,Zr=class extends wn{constructor(e=new Dr,t=new zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),!(Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2))&&(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),(n.boundingBox===null||Vr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$r(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$r(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$r(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$r(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Qr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function $r(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Qr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new K;qn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};qn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var ei=new Y,ti=new Y,ni=new Y,ri=new Y,ii=new X,ai=new K,oi=new yr,si=new X,ci=new Rr,li=class extends Zr{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=i,this.bindMatrix=new X,this.bindMatrixInverse=new X,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ai),this.boundingBox.expandByPoint(ai)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ai),this.boundingSphere.expandByPoint(ai)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oi.copy(this.boundingSphere),oi.applyMatrix4(r),e.ray.intersectsSphere(oi)!==!1&&(si.copy(r).invert(),ci.copy(e.ray).applyMatrix4(si),(this.boundingBox===null||ci.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Y,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():V(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;ti.fromBufferAttribute(r.attributes.skinIndex,e),ni.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ei.copy(t),t.set(0,0,0,0)):(ei.set(...t,1),t.set(0,0,0)),ei.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=ni.getComponent(e);if(r!==0){let i=ti.getComponent(e);ii.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(ri.copy(ei).applyMatrix4(ii),r)}}return t.isVector4&&(t.w=ei.w),t.applyMatrix4(this.bindMatrixInverse)}},ui=class extends wn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},di=class extends Kt{constructor(e=null,t=1,n=1,r,i,a,o,s,l=c,u=c,d,f){super(null,a,o,s,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=new X,pi=new X,mi=class e{constructor(e=[],t=[]){this.uuid=ct(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){V(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new X)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new X;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:pi;fi.multiplyMatrices(i,t[r]),fi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new di(t,e,e,k,b);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(V(`Skeleton: No bone found with UUID:`,r),i=new ui),this.bones.push(i),this.boneInverses.push(new X().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},hi=new yr,gi=new G(.5,.5),_i=new K,vi=class{constructor(e=new jr,t=new jr,n=new jr,r=new jr,i=new jr,a=new jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476+gi.distanceTo(e.center),hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_i.x=r.normal.x>0?e.max.x:e.min.x,_i.y=r.normal.y>0?e.max.y:e.min.y,_i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_i)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yi=class extends Kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bi=class extends Kt{constructor(e,t,n=y,r,i,a,o=c,s=c,l,u=A,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,s,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ht(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xi=class extends bi{constructor(e,t=y,n=301,r,i,a=c,o=c,s,l=A){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,s,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Si=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ci=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ti(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Di(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Di(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ei(e){let t={};for(let n=0;n<e.length;n++){let r=Ti(e[n]);for(let e in r)t[e]=r[e]}return t}function Di(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Oi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ki(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var Ai={clone:Ti,merge:Ei},ji=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ni=class extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ji,this.fragmentShader=Mi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Oi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new X().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pi=class extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Fi=class extends Nr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new Z(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ii=class extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Li=class extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ri(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Bi(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Vi(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Hi(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ui=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Wi=class extends Ui{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Gi=class extends Ui{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ki=class extends Ui{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qi=class extends Ui{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Xi(n,t,g,y,r);i[p]=Ji(x,o,_,b,m)}return i}};function Ji(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Yi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Xi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ji(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Yi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Zi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ri(t,this.TimeBufferType),this.values=Ri(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ri(e.times,Array),values:Ri(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),zi(e.settings)&&(n.settings={inTangents:Ri(e.settings.inTangents,Array),outTangents:Ri(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case R:t=this.InterpolantFactoryMethodDiscrete;break;case Fe:t=this.InterpolantFactoryMethodLinear;break;case z:t=this.InterpolantFactoryMethodSmooth;break;case B:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return R;case this.InterpolantFactoryMethodLinear:return Fe;case this.InterpolantFactoryMethodSmooth:return z;case this.InterpolantFactoryMethodBezier:return B}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;zi(this.settings)&&(Qi(this.settings.inTangents,e),Qi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===z,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,zi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Qi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Zi.prototype.ValueTypeName=``,Zi.prototype.TimeBufferType=Float32Array,Zi.prototype.ValueBufferType=Float32Array,Zi.prototype.DefaultInterpolation=Fe;var $i=class extends Zi{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName=`bool`,$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=R,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}};ea.prototype.ValueTypeName=`color`;var ta=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}};ta.prototype.ValueTypeName=`number`;var na=class extends Ui{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},ra=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName=`quaternion`,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Zi{constructor(e,t,n){super(e,t,n)}};ia.prototype.ValueTypeName=`string`,ia.prototype.ValueBufferType=Array,ia.prototype.DefaultInterpolation=R,ia.prototype.InterpolantFactoryMethodLinear=void 0,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}};aa.prototype.ValueTypeName=`vector`;var oa=class{constructor(e=``,t=-1,n=[],r=ze){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ct(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(ca(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Zi.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Bi(o);o=Vi(o,1,c),s=Vi(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new ta(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function sa(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return ta;case`vector`:case`vector2`:case`vector3`:case`vector4`:return aa;case`color`:return ea;case`quaternion`:return ra;case`bool`:case`boolean`:return $i;case`string`:return ia}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function ca(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=sa(e.type);if(e.times===void 0){let t=[],n=[];Hi(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),zi(e.settings)&&(n.settings={inTangents:Ri(e.settings.inTangents,Float32Array),outTangents:Ri(e.settings.outTangents,Float32Array)}),n}var la={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ua(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ua(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ua(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var da=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},fa=class{constructor(e){this.manager=e===void 0?da:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var pa={},ma=class extends Error{constructor(e,t){super(e),this.response=t}},ha=class extends fa{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=la.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(pa[e]!==void 0){pa[e].push({onLoad:t,onProgress:n,onError:r});return}pa[e]=[],pa[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&V(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=pa[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new ma(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{la.add(`file:${e}`,t);let n=pa[e];delete pa[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=pa[e];if(n===void 0)throw this.manager.itemError(e),t;delete pa[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ga=new WeakMap,_a=class extends fa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=la.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ga.get(a);e===void 0&&(e=[],ga.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Xe(`img`);function s(){l(),t&&t(this);let n=ga.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ga.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),la.remove(`image:${e}`);let n=ga.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ga.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),la.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},va=class extends fa{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new di,o=new ha(this.manager);return o.setResponseType(`arraybuffer`),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(e){let n;try{n=i.parse(e)}catch(e){r===void 0?H(e):r(e);return}i._applyTexData(a,n),t&&t(a,n)},n,r),a}createDataTexture(e){let t=new di;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image===void 0?t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data):e.image=t.image,e.wrapS=t.wrapS===void 0?o:t.wrapS,e.wrapT=t.wrapT===void 0?o:t.wrapT,e.magFilter=t.magFilter===void 0?d:t.magFilter,e.minFilter=t.minFilter===void 0?d:t.minFilter,e.anisotropy=t.anisotropy===void 0?1:t.anisotropy,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=p),t.mipmapCount===1&&(e.minFilter=d),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ya=class extends fa{constructor(e){super(e)}load(e,t,n,r){let i=new Kt,a=new _a(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ba=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Z(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xa=class extends ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sa=new X,Ca=new K,wa=new K,Ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=m,this.map=null,this.mapPass=null,this.matrix=new X,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Y(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ca.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ca),wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ea=new K,Da=new At,Oa=new K,ka=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new X,this.projectionMatrix=new X,this.projectionMatrixInverse=new X,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,Da,Oa),Oa.x===1&&Oa.y===1&&Oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Da,Oa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ea,Da,Oa),Oa.x===1&&Oa.y===1&&Oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Da,Oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Aa=new K,ja=new G,Ma=new G,Na=class extends ka{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Aa.x,Aa.y).multiplyScalar(-e/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Aa.x,Aa.y).multiplyScalar(-e/Aa.z)}getViewSize(e,t){return this.getViewBounds(e,ja,Ma),t.subVectors(Ma,ja)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pa=class extends ka{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fa=class extends Ta{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ia=class extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Fa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},La=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ra=-90,za=1,Ba=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Na(Ra,za,e,t);r.layers=this.layers,this.add(r);let i=new Na(Ra,za,e,t);i.layers=this.layers,this.add(i);let a=new Na(Ra,za,e,t);a.layers=this.layers,this.add(a);let o=new Na(Ra,za,e,t);o.layers=this.layers,this.add(o);let s=new Na(Ra,za,e,t);s.layers=this.layers,this.add(s);let c=new Na(Ra,za,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Va=class extends Na{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ha=`\\[\\]\\.:\\/`,Ua=RegExp(`[\\[\\]\\.:\\/]`,`g`),Wa=`[^\\[\\]\\.:\\/]`,Ga=`[^`+Ha.replace(`\\.`,``)+`]`,Ka=`((?:WC+[\\/:])*)`.replace(`WC`,Wa),qa=`(WCOD+)?`.replace(`WCOD`,Ga),Ja=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Wa),Ya=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Wa),Xa=RegExp(`^`+Ka+qa+Ja+Ya+`$`),Za=[`material`,`materials`,`bones`,`map`],Qa=class{constructor(e,t,n){let r=n||$a.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$a=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ua,``)}static parseTrackName(e){let t=Xa.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Za.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$a.Composite=Qa,$a.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$a.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$a.prototype.GetterByBindingType=[$a.prototype._getValue_direct,$a.prototype._getValue_array,$a.prototype._getValue_arrayElement,$a.prototype._getValue_toArray],$a.prototype.SetterByBindingTypeAndVersioning=[[$a.prototype._setValue_direct,$a.prototype._setValue_direct_setNeedsUpdate,$a.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_array,$a.prototype._setValue_array_setNeedsUpdate,$a.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_arrayElement,$a.prototype._setValue_arrayElement_setNeedsUpdate,$a.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_fromArray,$a.prototype._setValue_fromArray_setNeedsUpdate,$a.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,V(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function to(e,t,n,r){let i=no(r);switch(n){case D:return e*t;case M:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case O:return e*t*3/i.components*i.byteLength;case k:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case F:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case I:case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case L:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function no(e){switch(e){case m:case h:return{byteLength:1,components:1};case _:case g:case x:return{byteLength:2,components:1};case S:case C:return{byteLength:2,components:4};case y:case v:case b:return{byteLength:4,components:1};case T:case E:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function ro(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function io(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},ao={basic:{uniforms:Ei([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:Ei([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:Ei([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:Ei([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:Ei([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Z(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:Ei([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:Ei([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:Ei([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:Ei([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:Ei([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:Ei([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:Ei([$.common,$.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:Ei([$.lights,$.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};ao.physical={uniforms:Ei([ao.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var oo={r:0,b:0,g:0},so=new X,co=new q;co.set(-1,0,0,0,1,0,0,0,1);function lo(e,t,n,r,i,a){let o=new Z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Zr(new Ci(1,1,1),new Ni({name:`BackgroundCubeMaterial`,uniforms:Ti(ao.backgroundCube.uniforms),vertexShader:ao.backgroundCube.vertexShader,fragmentShader:ao.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(so.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(co),l.material.toneMapped=J.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Zr(new wi(2,2),new Ni({name:`BackgroundMaterial`,uniforms:Ti(ao.background.uniforms),vertexShader:ao.background.vertexShader,fragmentShader:ao.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(oo,ki(e)),n.buffers.color.setClear(oo.r,oo.g,oo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function uo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function fo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function po(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function mo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new jr,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ho=4,go=6,_o=20,vo=256,yo=new Pa,bo=new Z,xo=null,So=0,Co=0,wo=!1,To=new K,Eo=new K,Do=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=To}=i;xo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,So,Co),this._renderer.xr.enabled=wo,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:d,minFilter:d,generateMipmaps:!1,type:x,format:k,colorSpace:He,depthBuffer:!1},r=ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Oo(r)),this._blurMaterial=Mo(r,e,t),this._ggxMaterial=jo(r,e,t)}return r}_compileMaterial(e){let t=new Zr(new Dr,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,r,i){let a=new Na(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(bo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zr(new Ci,new zr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(bo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ao(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ao(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ho?n-d+ho:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ao(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,yo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ao(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,yo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ao(t,3*l*(r>this._lodMax-ho?r-this._lodMax+ho:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,yo)}};function Oo(e){let t=[],n=[],r=e,i=e-ho+1+go;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Eo.set(1,r,n):e===1?Eo.set(-n,1,-r):e===2?Eo.set(-n,r,1):e===3?Eo.set(-1,r,-n):e===4?Eo.set(-n,-1,r):Eo.set(n,r,-1),Eo.toArray(l,(e*6+t)*3)}}let u=new Dr;u.setAttribute(`position`,new fr(c,3)),u.setAttribute(`outputDirection`,new fr(l,3)),n.push(new Zr(u,null)),r>ho&&r--}return{lodMeshes:n,sizeLods:t}}function ko(e,t,n){let r=new Jt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ao(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function jo(e,t,n){return new Ni({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:vo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(e,t,n){return new Ni({name:`SphericalGaussianBlur`,defines:{SAMPLES:_o,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function No(){return new Ni({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Po(){return new Ni({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Io=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),i=new Ni({name:`CubemapFromEquirect`,uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Zr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=d),new Ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Lo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Io(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Do(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Do(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ro(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function zo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Bo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Vo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ho(e,t,n){let r=new WeakMap,i=new Y;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Yt(h,p,m,u);g.type=b,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Uo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Wo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Go(e,t,n,r,i,a){let o=new Jt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Dr;l.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let u=new Pi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zr(l,u),f=new Pa(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Jt(t,n,{type:x,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(t,n,{type:x,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},J.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Wo[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ko=new Kt,qo=new bi(1,1),Jo=new Yt,Yo=new Xt,Xo=new yi,Zo=[],Qo=[],$o=new Float32Array(16),es=new Float32Array(9),ts=new Float32Array(4);function ns(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Zo[i];if(a===void 0&&(a=new Float32Array(i),Zo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function rs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function is(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function as(e,t){let n=Qo[t];n===void 0&&(n=new Int32Array(t),Qo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function os(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rs(n,t))return;e.uniform2fv(this.addr,t),is(n,t)}}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(rs(n,t))return;e.uniform3fv(this.addr,t),is(n,t)}}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rs(n,t))return;e.uniform4fv(this.addr,t),is(n,t)}}function us(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(rs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),is(n,t)}else{if(rs(n,r))return;ts.set(r),e.uniformMatrix2fv(this.addr,!1,ts),is(n,r)}}function ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(rs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),is(n,t)}else{if(rs(n,r))return;es.set(r),e.uniformMatrix3fv(this.addr,!1,es),is(n,r)}}function fs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(rs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),is(n,t)}else{if(rs(n,r))return;$o.set(r),e.uniformMatrix4fv(this.addr,!1,$o),is(n,r)}}function ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rs(n,t))return;e.uniform2iv(this.addr,t),is(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rs(n,t))return;e.uniform3iv(this.addr,t),is(n,t)}}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rs(n,t))return;e.uniform4iv(this.addr,t),is(n,t)}}function _s(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rs(n,t))return;e.uniform2uiv(this.addr,t),is(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rs(n,t))return;e.uniform3uiv(this.addr,t),is(n,t)}}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rs(n,t))return;e.uniform4uiv(this.addr,t),is(n,t)}}function xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(qo.compareFunction=n.isReversedDepthBuffer()?518:515,a=qo):a=Ko,n.setTexture2D(t||a,i)}function Ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Yo,i)}function Cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Xo,i)}function ws(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Jo,i)}function Ts(e){switch(e){case 5126:return os;case 35664:return ss;case 35665:return cs;case 35666:return ls;case 35674:return us;case 35675:return ds;case 35676:return fs;case 5124:case 35670:return ps;case 35667:case 35671:return ms;case 35668:case 35672:return hs;case 35669:case 35673:return gs;case 5125:return _s;case 36294:return vs;case 36295:return ys;case 36296:return bs;case 35678:case 36198:case 36298:case 36306:case 35682:return xs;case 35679:case 36299:case 36307:return Ss;case 35680:case 36300:case 36308:case 36293:return Cs;case 36289:case 36303:case 36311:case 36292:return ws}}function Es(e,t){e.uniform1fv(this.addr,t)}function Ds(e,t){let n=ns(t,this.size,2);e.uniform2fv(this.addr,n)}function Os(e,t){let n=ns(t,this.size,3);e.uniform3fv(this.addr,n)}function ks(e,t){let n=ns(t,this.size,4);e.uniform4fv(this.addr,n)}function As(e,t){let n=ns(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function js(e,t){let n=ns(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ms(e,t){let n=ns(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ns(e,t){e.uniform1iv(this.addr,t)}function Ps(e,t){e.uniform2iv(this.addr,t)}function Fs(e,t){e.uniform3iv(this.addr,t)}function Is(e,t){e.uniform4iv(this.addr,t)}function Ls(e,t){e.uniform1uiv(this.addr,t)}function Rs(e,t){e.uniform2uiv(this.addr,t)}function zs(e,t){e.uniform3uiv(this.addr,t)}function Bs(e,t){e.uniform4uiv(this.addr,t)}function Vs(e,t,n){let r=this.cache,i=t.length,a=as(n,i);rs(r,a)||(e.uniform1iv(this.addr,a),is(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?qo:Ko;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Hs(e,t,n){let r=this.cache,i=t.length,a=as(n,i);rs(r,a)||(e.uniform1iv(this.addr,a),is(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Yo,a[e])}function Us(e,t,n){let r=this.cache,i=t.length,a=as(n,i);rs(r,a)||(e.uniform1iv(this.addr,a),is(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Xo,a[e])}function Ws(e,t,n){let r=this.cache,i=t.length,a=as(n,i);rs(r,a)||(e.uniform1iv(this.addr,a),is(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Jo,a[e])}function Gs(e){switch(e){case 5126:return Es;case 35664:return Ds;case 35665:return Os;case 35666:return ks;case 35674:return As;case 35675:return js;case 35676:return Ms;case 5124:case 35670:return Ns;case 35667:case 35671:return Ps;case 35668:case 35672:return Fs;case 35669:case 35673:return Is;case 5125:return Ls;case 36294:return Rs;case 36295:return zs;case 36296:return Bs;case 35678:case 36198:case 36298:case 36306:case 35682:return Vs;case 35679:case 36299:case 36307:return Hs;case 35680:case 36300:case 36308:case 36293:return Us;case 36289:case 36303:case 36311:case 36292:return Ws}}var Ks=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ts(t.type)}},qs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gs(t.type)}},Js=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ys=/(\w+)(\])?(\[|\.)?/g;function Xs(e,t){e.seq.push(t),e.map[t.id]=t}function Zs(e,t,n){let r=e.name,i=r.length;for(Ys.lastIndex=0;;){let a=Ys.exec(r),o=Ys.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Xs(n,l===void 0?new Ks(s,e,t):new qs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Js(s),Xs(n,e)),n=e}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Zs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function $s(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ec=37297,tc=0;function nc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var rc=new q;function ic(e){J._getMatrix(rc,J.workingColorSpace,e);let t=`mat3( ${rc.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ac(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+nc(e.getShaderSource(t),r)}return i}function oc(e,t){let n=ic(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var sc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function cc(e,t){let n=sc[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var lc=new K;function uc(){return J.getLuminanceCoefficients(lc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${lc.x.toFixed(4)}, ${lc.y.toFixed(4)}, ${lc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function dc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(mc).join(`
`)}function fc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function pc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function mc(e){return e!==``}function hc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _c=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(e){return e.replace(_c,bc)}var yc=new Map;function bc(e,t){let n=Q[t];if(n===void 0){let e=yc.get(t);if(e!==void 0)n=Q[e],V(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return vc(n)}var xc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(e){return e.replace(xc,Cc)}function Cc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function wc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Tc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ec(e){return Tc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Dc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Oc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Dc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var kc={302:`ENVMAP_MODE_REFRACTION`};function Ac(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:kc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var jc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Mc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:jc[e.combine]||`ENVMAP_BLENDING_NONE`}function Nc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Pc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ec(n),l=Oc(n),u=Ac(n),d=Mc(n),f=Nc(n),p=dc(n),m=fc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(mc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(mc).join(`
`),_.length>0&&(_+=`
`)):(g=[wc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(mc).join(`
`),_=[wc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:cc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,oc(`linearToOutputTexel`,n.outputColorSpace),uc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(mc).join(`
`)),o=vc(o),o=hc(o,n),o=gc(o,n),s=vc(s),s=hc(s,n),s=gc(s,n),o=Sc(o),s=Sc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=$s(i,i.VERTEX_SHADER,y),S=$s(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ac(i,x,`vertex`),n=ac(i,S,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Qs(i,h),T=pc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ec)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Fc=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lc(e),t.set(e,n)),n}},Lc=class{constructor(e){this.id=Fc++,this.code=e,this.usedTimes=0}};function Rc(e){return e===1030||e===37490||e===36285}function zc(e,t,n,r,i,a){let o=new cn,s=new Ic,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ao[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),ee=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,re=!!x,P=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,I=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,L=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:ee,instancingColor:ee&&h.instanceColor!==null,instancingMorph:ee&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:P,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Rc(i.normalMap.format),metalnessMap:F,roughnessMap:I,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:L,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:P&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ao[t];n=Ai.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Pc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Bc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Vc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Uc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Vc),r.length>1&&r.sort(t||Hc),i.length>1&&i.sort(t||Hc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Wc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Uc,e.set(t,[i])):n>=r.length?(i=new Uc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Gc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Z};break;case`SpotLight`:n={position:new K,direction:new K,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Z,groundColor:new Z};break;case`RectAreaLight`:n={color:new Z,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Kc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var qc=0;function Jc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Yc(e){let t=new Gc,n=Kc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new X,o=new X;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Jc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=qc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Xc(e){let t=new Yc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Zc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Xc(e),t.set(n,[a])):r>=i.length?(a=new Xc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$c=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,el=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],tl=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],nl=new X,rl=new K,il=new K;function al(e,t,n){let r=new vi,i=new G,a=new G,o=new Y,s=new Ii,l=new Li,u={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Qc,fragmentShader:$c}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Dr;g.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Zr(g,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){V(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Jt(i.x,i.y,{format:N,type:x,minFilter:d,magFilter:d,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new bi(i.x,i.y,b),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=A,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c}else u.isPointLight?(p.map=new Io(i.x),p.map.depthTexture=new xi(i.x,y)):(p.map=new Jt(i.x,i.y),p.map.depthTexture=new bi(i.x,i.y,y)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=A,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=d,p.map.depthTexture.magFilter=d):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let v=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();u.isPointLight!==!0&&p.updateMatrices(u,s);for(let t=0;t<v;t++){let i=p.getCamera(t);if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),rl.setFromMatrixPosition(u.matrixWorld),e.position.copy(rl),il.copy(e.position),il.add(el[t]),e.up.copy(tl[t]),e.lookAt(il),e.updateMatrixWorld(),n.makeTranslation(-rl.x,-rl.y,-rl.z),nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(nl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}r=p.getFrustum(t),T(n,s,i,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,s),p.needsUpdate=!1}S=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Jt(i.x,i.y,{format:N,type:x}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ol(e,t){function n(){let t=!1,n=new Y,r=null,i=new Y(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):I(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):I(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=N>=1);let ne=null,re={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Y().fromArray(P),oe=new Y().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),F(e.CULL_FACE),me(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function I(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(I(e.BLEND),g=!1);return}if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?I(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):I(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?I(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):I(e.POLYGON_OFFSET_FILL)}function be(t){t?F(e.SCISSOR_TEST):I(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function Se(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function B(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:I,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:B,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Ie}}function sl(e,t,n,r,i,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ue:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),re(t)}function te(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ne(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ne(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let P=0;function ie(){P=0}function ae(){return P}function oe(e){P=e}function se(){let e=P;return e>=i.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let de={[a]:e.REPEAT,[o]:e.CLAMP_TO_EDGE,[s]:e.MIRRORED_REPEAT},fe={[c]:e.NEAREST,[l]:e.NEAREST_MIPMAP_NEAREST,[u]:e.NEAREST_MIPMAP_LINEAR,[d]:e.LINEAR,[f]:e.LINEAR_MIPMAP_NEAREST,[p]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function he(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ce(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ne(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ge(n.start,r.width,4),c=ge(t.start,r.width,4);n.start<=i+1&&a===c&&ge(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ve(t,a,o){let s=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(s=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(s=e.TEXTURE_3D);let c=he(t,a),l=a.source;n.bindTexture(s,t.__webglTexture,e.TEXTURE0+o);let u=r.get(l);if(l.version!==u.__version||c===!0){if(n.activeTexture(e.TEXTURE0+o),!(typeof ImageBitmap<`u`&&a.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=a.colorSpace===``?null:J.getPrimaries(a.colorSpace),i=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let t=T(a.image,!1,i.maxTextureSize);t=Me(a,t);let r=m.convert(a.format,a.colorSpace),d=m.convert(a.type),f=k(a.internalFormat,r,d,a.normalized,a.colorSpace,a.isVideoTexture);me(s,a);let p,h=a.mipmaps,g=a.isVideoTexture!==!0,_=u.__version===void 0||c===!0,v=l.dataReady,y=M(a,t);if(a.isDepthTexture)f=A(a.format===j,a.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,f,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,f,t.width,t.height,0,r,d,null));else if(a.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,f,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)p=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,d,p.data):n.texImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,r,d,p.data);a.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height),v&&_e(a,t,r,d)):n.texImage2D(e.TEXTURE_2D,0,f,t.width,t.height,0,r,d,t.data)}else if(a.isCompressedTexture){if(a.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,f,h[0].width,h[0].height,t.depth);for(let i=0,o=h.length;i<o;i++)if(p=h[i],a.format!==1023){if(r!==null){if(g){if(v){if(a.layerUpdates.size>0){let t=to(p.width,p.height,a.format,a.type);for(let o of a.layerUpdates){let a=p.data.subarray(o*t/p.data.BYTES_PER_ELEMENT,(o+1)*t/p.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,o,p.width,p.height,1,r,a)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,t.depth,r,p.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,f,p.width,p.height,t.depth,0,p.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,t.depth,r,d,p.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,f,p.width,p.height,t.depth,0,r,d,p.data);a.layerUpdates.size>0&&a.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,f,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)p=h[t],a.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,d,p.data):n.texImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,r,d,p.data):r===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,r,p.data):n.compressedTexImage2D(e.TEXTURE_2D,t,f,p.width,p.height,0,p.data)}}else if(a.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,f,t.width,t.height,t.depth),v){if(a.layerUpdates.size>0){let i=to(t.width,t.height,a.format,a.type);for(let o of a.layerUpdates){let a=t.data.subarray(o*i/t.data.BYTES_PER_ELEMENT,(o+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,d,a)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,d,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,f,t.width,t.height,t.depth,0,r,d,t.data)}else if(a.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,f,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,d,t.data)):n.texImage3D(e.TEXTURE_3D,0,f,t.width,t.height,t.depth,0,r,d,t.data);else if(a.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,f,i,a,0,r,d,null),i>>=1,a>>=1}}}else if(a.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(a),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);n.texStorage2D(e.TEXTURE_2D,y,f,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)p=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,d,p):n.texImage2D(e.TEXTURE_2D,t,f,r,d,p);a.generateMipmaps=!1}else if(g){if(_){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,y,f,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,d,t)}else n.texImage2D(e.TEXTURE_2D,0,f,r,d,t);E(a)&&D(s),u.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function ye(t,a,o){if(a.image.length!==6)return;let s=he(t,a),c=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+o);let l=r.get(c);if(c.version!==l.__version||s===!0){n.activeTexture(e.TEXTURE0+o);let t=J.getPrimaries(J.workingColorSpace),r=a.colorSpace===``?null:J.getPrimaries(a.colorSpace),u=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,u);let d=a.isCompressedTexture||a.image[0].isCompressedTexture,f=a.image[0]&&a.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)!d&&!f?p[e]=T(a.image[e],!0,i.maxCubemapSize):p[e]=f?a.image[e].image:a.image[e],p[e]=Me(a,p[e]);let h=p[0],g=m.convert(a.format,a.colorSpace),_=m.convert(a.type),v=k(a.internalFormat,g,_,a.normalized,a.colorSpace),y=a.isVideoTexture!==!0,b=l.__version===void 0||s===!0,x=c.dataReady,S=M(a,h);me(e.TEXTURE_CUBE_MAP,a);let C;if(d){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=p[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];a.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=a.mipmaps,y&&b){C.length>0&&S++;let t=Ne(p[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(f){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,p[t].width,p[t].height,g,_,p[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,p[t].width,p[t].height,0,g,_,p[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,p[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,p[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(a)&&D(e.TEXTURE_CUBE_MAP),l.__version=c.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function be(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=k(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Ae(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,(!s.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ee)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),me(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else F(i.depthTexture,0);let c=s.__webglTexture,l=Ae(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Se(i.__webglFramebuffer[0],t,0):Se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),xe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,i){let a=r.get(t);n!==void 0&&be(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ce(t)}function Te(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,N);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&je(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),me(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)be(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else be(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),me(l,o),be(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),E(o)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),me(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)be(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else be(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ce(t)}function Ee(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(je(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(De.push(c),Oe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(i.maxSamples,e.samples)}function je(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cl(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ll=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ul=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Si(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ni({vertexShader:ll,fragmentShader:ul,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zr(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fl=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,h=typeof XRWebGLBinding<`u`,g=new dl,_={},v=t.getContextAttributes(),b=null,x=null,S=[],C=[],T=new G,E=null,D=null,O=new Na;O.viewport=new Y;let M=new Na;M.viewport=new Y;let ee=[O,M],N=new Va,te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Dn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Dn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Dn,S[e]=t),t.getHandSpace()};function re(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}te=null,ne=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,ie),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?j:A,a=v.stencil?w:y);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Jt(d.textureWidth,d.textureHeight,{format:k,type:m,depthTexture:new bi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jt(f.framebufferWidth,f.framebufferHeight,{format:k,type:m,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ae=new K,oe=new K;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),N.near=M.near=O.near=t,N.far=M.far=O.far=n,(te!==N.near||ne!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,ne=N.far),N.layers.mask=e.layers.mask|6,O.layers.mask=N.layers.mask&-5,M.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ce(N,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(N,O,M):N.projectionMatrix.copy(O.projectionMatrix),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),F(e,N,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(e){return _[e]};let I=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=ee[n];o===void 0&&(o=new Na,o.layers.enable(n),o.viewport=new Y,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Si,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ue=new ro;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},pl=new X,ml=new q;ml.set(-1,0,0,0,1,0,0,0,1);function hl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ki(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(pl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ml),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function gl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return H(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var _l=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vl=null;function yl(){return vl===null&&(vl=new di(_l,16,16,N,x),vl.name=`DFG_LUT`,vl.minFilter=d,vl.magFilter=d,vl.wrapS=o,vl.wrapT=o,vl.generateMipmaps=!1,vl.needsUpdate=!0),vl}var bl=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=m}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let g=f,v=new Set([ne,te,ee]),b=new Set([m,y,_,w,S,C]),T=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,k=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,P=null,ie=null,ae=null,oe=null;this._outputColorSpace=Ve;let se=0,ce=0,F=null,I=-1,le=null,ue=new Y,de=new Y,fe=null,pe=new Z(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Y(0,0,he,ge),xe=new Y(0,0,he,ge),Se=!1,Ce=new vi,we=!1,Te=!1,Ee=new X,De=new K,Oe=new Y,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return F===null?_e:1}let L=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,R,Fe,z,B,Ie,Le,Re,ze,Be,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),H(`WebGLRenderer: `+e.message),e}function it(){Ne=new Ro(L),Ne.init(),et=new cl(L,Ne),Pe=new po(L,Ne,e,et),R=new ol(L,Ne),Pe.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),ie=L.createFramebuffer(),ae=L.createFramebuffer(),oe=L.createFramebuffer(),Fe=new Vo(L),z=new Bc,B=new sl(L,Ne,R,z,Pe,et,Fe),Ie=new Lo(N),Le=new io(L),tt=new uo(L,Le),Re=new zo(L,Le,Fe,tt),ze=new Uo(L,Re,Le,tt,Fe),Ye=new Ho(L,Pe,B),Ge=new mo(z),Be=new zc(N,Ie,Ne,Pe,tt,Ge),He=new hl(N,z),Ue=new Wc,We=new Zc(Ne),Je=new lo(N,Ie,R,ze,h,s),Ke=new al(N,ze,Pe),rt=new gl(L,Fe,Pe,R),Xe=new fo(L,Ne,Fe),Qe=new Bo(L,Ne,Fe),Fe.programs=Be.programs,N.capabilities=Pe,N.extensions=Ne,N.properties=z,N.renderLists=Ue,N.shadowMap=Ke,N.state=R,N.info=Fe}g!==1009&&(M=new Go(g,t.width,t.height,o,r,i));let U=new fl(N,L);this.xr=U,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(U.isPresenting){V(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(g===1009){H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=v.has(t)}if(e){let e=F.texture.type,t=b.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Je.dispose(),Ue.dispose(),We.dispose(),z.dispose(),Ie.dispose(),ze.dispose(),tt.dispose(),rt.dispose(),Be.dispose(),U.dispose(),U.removeEventListener(`sessionstart`,pt),U.removeEventListener(`sessionend`,mt),ht.stop()};function at(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),re=!0}function ot(){$e(`WebGLRenderer: Context Restored.`),re=!1;let e=Fe.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;it(),Fe.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function st(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),W(t)}function W(e){lt(e),z.remove(e)}function lt(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Tt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Le.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),we===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,r),e.side=0,e.needsUpdate=!0,xt(e,t,r),e.side=2):xt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),k=We.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),P!==null&&P.updateLights(k.state.lightsArray),Te=this.localClippingEnabled,we=Ge.init(this.clippingPlanes,Te),we===!0&&Ge.setGlobalState(this.clippingPlanes,t),P!==null&&Ke.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),k=j.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new ro;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,U.setAnimationLoop(e),e===null?ht.stop():ht.start()},U.addEventListener(`sessionstart`,pt),U.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;P!==null&&P.renderStart(e,t);let n=U.enabled===!0&&U.isPresenting===!0,r=M!==null&&(F===null||n)&&M.begin(N,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(U.cameraAutoUpdate===!0&&U.updateCamera(t),t=U.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,F),k=We.get(e,j.length),k.init(t),k.state.textureUnits=B.getTextureUnits(),j.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,qe,t.reversedDepth),Te=this.localClippingEnabled,we=Ge.init(this.clippingPlanes,Te),O=Ue.get(e,A.length),O.init(),A.push(O),U.enabled===!0&&U.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,N.sortObjects)}gt(e,t,0,N.sortObjects),O.finish(),P!==null&&P.updateLights(k.state.lightsArray),N.sortObjects===!0&&O.sort(ve,ye),Ae=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Ae&&Je.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Ge.beginShadows();let i=k.state.shadowsArray;if(Ke.render(i,e,t),we===!0&&Ge.endShadows(),(r&&M.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}Ae&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Ae&&Je.render(e),_t(O,e,t)}F!==null&&ce===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),tt.resetDefaultState(),I=-1,le=null,j.pop(),j.length>0?(k=j[j.length-1],B.setTextureUnits(k.state.textureUnits),we===!0&&Ge.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,P!==null&&P.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=ze.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=ze.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&Ge.setGlobalState(N.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Jt(1,1,{generateMipmaps:!0,type:e?x:m,minFilter:p,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(pe),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),Ae&&Je.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&Ge.setGlobalState(N.clippingPlanes,r),yt(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(pe,me),d!==void 0&&(r.viewport=d),N.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=Be.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),Ct(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Qs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=ke),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===I;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==I&&(I=r.id,C=!0),v.needsLights){let e=wt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(L,`sunShadowMap`,y.state.sunShadowMap,B),y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,B),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,B),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,B));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=yl()),C){if(T.setValue(L,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Et(E,w),a&&r.fog===!0&&He.refreshFogUniforms(E,a),He.refreshMaterialUniforms(E,r,_e,ge,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Qs.upload(L,St(v),E,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Qs.upload(L,St(v),E,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),I=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=ie),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}I=-1};function Ot(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nt(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ae),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,R.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}},xl=class{constructor(){this.s2uTable={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:92,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:126,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:65340,33120:65374,33121:8741,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:65293,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:65504,33170:65505,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:65506,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34624:9312,34625:9313,34626:9314,34627:9315,34628:9316,34629:9317,34630:9318,34631:9319,34632:9320,34633:9321,34634:9322,34635:9323,34636:9324,34637:9325,34638:9326,34639:9327,34640:9328,34641:9329,34642:9330,34643:9331,34644:8544,34645:8545,34646:8546,34647:8547,34648:8548,34649:8549,34650:8550,34651:8551,34652:8552,34653:8553,34655:13129,34656:13076,34657:13090,34658:13133,34659:13080,34660:13095,34661:13059,34662:13110,34663:13137,34664:13143,34665:13069,34666:13094,34667:13091,34668:13099,34669:13130,34670:13115,34671:13212,34672:13213,34673:13214,34674:13198,34675:13199,34676:13252,34677:13217,34686:13179,34688:12317,34689:12319,34690:8470,34691:13261,34692:8481,34693:12964,34694:12965,34695:12966,34696:12967,34697:12968,34698:12849,34699:12850,34700:12857,34701:13182,34702:13181,34703:13180,34704:8786,34705:8801,34706:8747,34707:8750,34708:8721,34709:8730,34710:8869,34711:8736,34712:8735,34713:8895,34714:8757,34715:8745,34716:8746,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081,60736:32394,60737:35100,60738:37704,60739:37512,60740:34012,60741:20425,60742:28859,60743:26161,60744:26824,60745:37625,60746:26363,60747:24389,60748:20008,60749:20193,60750:20220,60751:20224,60752:20227,60753:20281,60754:20310,60755:20370,60756:20362,60757:20378,60758:20372,60759:20429,60760:20544,60761:20514,60762:20479,60763:20510,60764:20550,60765:20592,60766:20546,60767:20628,60768:20724,60769:20696,60770:20810,60771:20836,60772:20893,60773:20926,60774:20972,60775:21013,60776:21148,60777:21158,60778:21184,60779:21211,60780:21248,60781:21255,60782:21284,60783:21362,60784:21395,60785:21426,60786:21469,60787:64014,60788:21660,60789:21642,60790:21673,60791:21759,60792:21894,60793:22361,60794:22373,60795:22444,60796:22472,60797:22471,60798:64015,60800:64016,60801:22686,60802:22706,60803:22795,60804:22867,60805:22875,60806:22877,60807:22883,60808:22948,60809:22970,60810:23382,60811:23488,60812:29999,60813:23512,60814:23532,60815:23582,60816:23718,60817:23738,60818:23797,60819:23847,60820:23891,60821:64017,60822:23874,60823:23917,60824:23992,60825:23993,60826:24016,60827:24353,60828:24372,60829:24423,60830:24503,60831:24542,60832:24669,60833:24709,60834:24714,60835:24798,60836:24789,60837:24864,60838:24818,60839:24849,60840:24887,60841:24880,60842:24984,60843:25107,60844:25254,60845:25589,60846:25696,60847:25757,60848:25806,60849:25934,60850:26112,60851:26133,60852:26171,60853:26121,60854:26158,60855:26142,60856:26148,60857:26213,60858:26199,60859:26201,60860:64018,60861:26227,60862:26265,60863:26272,60864:26290,60865:26303,60866:26362,60867:26382,60868:63785,60869:26470,60870:26555,60871:26706,60872:26560,60873:26625,60874:26692,60875:26831,60876:64019,60877:26984,60878:64020,60879:27032,60880:27106,60881:27184,60882:27243,60883:27206,60884:27251,60885:27262,60886:27362,60887:27364,60888:27606,60889:27711,60890:27740,60891:27782,60892:27759,60893:27866,60894:27908,60895:28039,60896:28015,60897:28054,60898:28076,60899:28111,60900:28152,60901:28146,60902:28156,60903:28217,60904:28252,60905:28199,60906:28220,60907:28351,60908:28552,60909:28597,60910:28661,60911:28677,60912:28679,60913:28712,60914:28805,60915:28843,60916:28943,60917:28932,60918:29020,60919:28998,60920:28999,60921:64021,60922:29121,60923:29182,60924:29361,60992:29374,60993:29476,60994:64022,60995:29559,60996:29629,60997:29641,60998:29654,60999:29667,61e3:29650,61001:29703,61002:29685,61003:29734,61004:29738,61005:29737,61006:29742,61007:29794,61008:29833,61009:29855,61010:29953,61011:30063,61012:30338,61013:30364,61014:30366,61015:30363,61016:30374,61017:64023,61018:30534,61019:21167,61020:30753,61021:30798,61022:30820,61023:30842,61024:31024,61025:64024,61026:64025,61027:64026,61028:31124,61029:64027,61030:31131,61031:31441,61032:31463,61033:64028,61034:31467,61035:31646,61036:64029,61037:32072,61038:32092,61039:32183,61040:32160,61041:32214,61042:32338,61043:32583,61044:32673,61045:64030,61046:33537,61047:33634,61048:33663,61049:33735,61050:33782,61051:33864,61052:33972,61053:34131,61054:34137,61056:34155,61057:64031,61058:34224,61059:64032,61060:64033,61061:34823,61062:35061,61063:35346,61064:35383,61065:35449,61066:35495,61067:35518,61068:35551,61069:64034,61070:35574,61071:35667,61072:35711,61073:36080,61074:36084,61075:36114,61076:36214,61077:64035,61078:36559,61079:64036,61080:64037,61081:36967,61082:37086,61083:64038,61084:37141,61085:37159,61086:37338,61087:37335,61088:37342,61089:37357,61090:37358,61091:37348,61092:37349,61093:37382,61094:37392,61095:37386,61096:37434,61097:37440,61098:37436,61099:37454,61100:37465,61101:37457,61102:37433,61103:37479,61104:37543,61105:37495,61106:37496,61107:37607,61108:37591,61109:37593,61110:37584,61111:64039,61112:37589,61113:37600,61114:37587,61115:37669,61116:37665,61117:37627,61118:64040,61119:37662,61120:37631,61121:37661,61122:37634,61123:37744,61124:37719,61125:37796,61126:37830,61127:37854,61128:37880,61129:37937,61130:37957,61131:37960,61132:38290,61133:63964,61134:64041,61135:38557,61136:38575,61137:38707,61138:38715,61139:38723,61140:38733,61141:38735,61142:38737,61143:38741,61144:38999,61145:39013,61146:64042,61147:64043,61148:39207,61149:64044,61150:39326,61151:39502,61152:39641,61153:39644,61154:39797,61155:39794,61156:39823,61157:39857,61158:39867,61159:39936,61160:40304,61161:40299,61162:64045,61163:40473,61164:40657,61167:8560,61168:8561,61169:8562,61170:8563,61171:8564,61172:8565,61173:8566,61174:8567,61175:8568,61176:8569,61177:65506,61178:65508,61179:65287,61180:65282,61504:57344,61505:57345,61506:57346,61507:57347,61508:57348,61509:57349,61510:57350,61511:57351,61512:57352,61513:57353,61514:57354,61515:57355,61516:57356,61517:57357,61518:57358,61519:57359,61520:57360,61521:57361,61522:57362,61523:57363,61524:57364,61525:57365,61526:57366,61527:57367,61528:57368,61529:57369,61530:57370,61531:57371,61532:57372,61533:57373,61534:57374,61535:57375,61536:57376,61537:57377,61538:57378,61539:57379,61540:57380,61541:57381,61542:57382,61543:57383,61544:57384,61545:57385,61546:57386,61547:57387,61548:57388,61549:57389,61550:57390,61551:57391,61552:57392,61553:57393,61554:57394,61555:57395,61556:57396,61557:57397,61558:57398,61559:57399,61560:57400,61561:57401,61562:57402,61563:57403,61564:57404,61565:57405,61566:57406,61568:57407,61569:57408,61570:57409,61571:57410,61572:57411,61573:57412,61574:57413,61575:57414,61576:57415,61577:57416,61578:57417,61579:57418,61580:57419,61581:57420,61582:57421,61583:57422,61584:57423,61585:57424,61586:57425,61587:57426,61588:57427,61589:57428,61590:57429,61591:57430,61592:57431,61593:57432,61594:57433,61595:57434,61596:57435,61597:57436,61598:57437,61599:57438,61600:57439,61601:57440,61602:57441,61603:57442,61604:57443,61605:57444,61606:57445,61607:57446,61608:57447,61609:57448,61610:57449,61611:57450,61612:57451,61613:57452,61614:57453,61615:57454,61616:57455,61617:57456,61618:57457,61619:57458,61620:57459,61621:57460,61622:57461,61623:57462,61624:57463,61625:57464,61626:57465,61627:57466,61628:57467,61629:57468,61630:57469,61631:57470,61632:57471,61633:57472,61634:57473,61635:57474,61636:57475,61637:57476,61638:57477,61639:57478,61640:57479,61641:57480,61642:57481,61643:57482,61644:57483,61645:57484,61646:57485,61647:57486,61648:57487,61649:57488,61650:57489,61651:57490,61652:57491,61653:57492,61654:57493,61655:57494,61656:57495,61657:57496,61658:57497,61659:57498,61660:57499,61661:57500,61662:57501,61663:57502,61664:57503,61665:57504,61666:57505,61667:57506,61668:57507,61669:57508,61670:57509,61671:57510,61672:57511,61673:57512,61674:57513,61675:57514,61676:57515,61677:57516,61678:57517,61679:57518,61680:57519,61681:57520,61682:57521,61683:57522,61684:57523,61685:57524,61686:57525,61687:57526,61688:57527,61689:57528,61690:57529,61691:57530,61692:57531,61760:57532,61761:57533,61762:57534,61763:57535,61764:57536,61765:57537,61766:57538,61767:57539,61768:57540,61769:57541,61770:57542,61771:57543,61772:57544,61773:57545,61774:57546,61775:57547,61776:57548,61777:57549,61778:57550,61779:57551,61780:57552,61781:57553,61782:57554,61783:57555,61784:57556,61785:57557,61786:57558,61787:57559,61788:57560,61789:57561,61790:57562,61791:57563,61792:57564,61793:57565,61794:57566,61795:57567,61796:57568,61797:57569,61798:57570,61799:57571,61800:57572,61801:57573,61802:57574,61803:57575,61804:57576,61805:57577,61806:57578,61807:57579,61808:57580,61809:57581,61810:57582,61811:57583,61812:57584,61813:57585,61814:57586,61815:57587,61816:57588,61817:57589,61818:57590,61819:57591,61820:57592,61821:57593,61822:57594,61824:57595,61825:57596,61826:57597,61827:57598,61828:57599,61829:57600,61830:57601,61831:57602,61832:57603,61833:57604,61834:57605,61835:57606,61836:57607,61837:57608,61838:57609,61839:57610,61840:57611,61841:57612,61842:57613,61843:57614,61844:57615,61845:57616,61846:57617,61847:57618,61848:57619,61849:57620,61850:57621,61851:57622,61852:57623,61853:57624,61854:57625,61855:57626,61856:57627,61857:57628,61858:57629,61859:57630,61860:57631,61861:57632,61862:57633,61863:57634,61864:57635,61865:57636,61866:57637,61867:57638,61868:57639,61869:57640,61870:57641,61871:57642,61872:57643,61873:57644,61874:57645,61875:57646,61876:57647,61877:57648,61878:57649,61879:57650,61880:57651,61881:57652,61882:57653,61883:57654,61884:57655,61885:57656,61886:57657,61887:57658,61888:57659,61889:57660,61890:57661,61891:57662,61892:57663,61893:57664,61894:57665,61895:57666,61896:57667,61897:57668,61898:57669,61899:57670,61900:57671,61901:57672,61902:57673,61903:57674,61904:57675,61905:57676,61906:57677,61907:57678,61908:57679,61909:57680,61910:57681,61911:57682,61912:57683,61913:57684,61914:57685,61915:57686,61916:57687,61917:57688,61918:57689,61919:57690,61920:57691,61921:57692,61922:57693,61923:57694,61924:57695,61925:57696,61926:57697,61927:57698,61928:57699,61929:57700,61930:57701,61931:57702,61932:57703,61933:57704,61934:57705,61935:57706,61936:57707,61937:57708,61938:57709,61939:57710,61940:57711,61941:57712,61942:57713,61943:57714,61944:57715,61945:57716,61946:57717,61947:57718,61948:57719,62016:57720,62017:57721,62018:57722,62019:57723,62020:57724,62021:57725,62022:57726,62023:57727,62024:57728,62025:57729,62026:57730,62027:57731,62028:57732,62029:57733,62030:57734,62031:57735,62032:57736,62033:57737,62034:57738,62035:57739,62036:57740,62037:57741,62038:57742,62039:57743,62040:57744,62041:57745,62042:57746,62043:57747,62044:57748,62045:57749,62046:57750,62047:57751,62048:57752,62049:57753,62050:57754,62051:57755,62052:57756,62053:57757,62054:57758,62055:57759,62056:57760,62057:57761,62058:57762,62059:57763,62060:57764,62061:57765,62062:57766,62063:57767,62064:57768,62065:57769,62066:57770,62067:57771,62068:57772,62069:57773,62070:57774,62071:57775,62072:57776,62073:57777,62074:57778,62075:57779,62076:57780,62077:57781,62078:57782,62080:57783,62081:57784,62082:57785,62083:57786,62084:57787,62085:57788,62086:57789,62087:57790,62088:57791,62089:57792,62090:57793,62091:57794,62092:57795,62093:57796,62094:57797,62095:57798,62096:57799,62097:57800,62098:57801,62099:57802,62100:57803,62101:57804,62102:57805,62103:57806,62104:57807,62105:57808,62106:57809,62107:57810,62108:57811,62109:57812,62110:57813,62111:57814,62112:57815,62113:57816,62114:57817,62115:57818,62116:57819,62117:57820,62118:57821,62119:57822,62120:57823,62121:57824,62122:57825,62123:57826,62124:57827,62125:57828,62126:57829,62127:57830,62128:57831,62129:57832,62130:57833,62131:57834,62132:57835,62133:57836,62134:57837,62135:57838,62136:57839,62137:57840,62138:57841,62139:57842,62140:57843,62141:57844,62142:57845,62143:57846,62144:57847,62145:57848,62146:57849,62147:57850,62148:57851,62149:57852,62150:57853,62151:57854,62152:57855,62153:57856,62154:57857,62155:57858,62156:57859,62157:57860,62158:57861,62159:57862,62160:57863,62161:57864,62162:57865,62163:57866,62164:57867,62165:57868,62166:57869,62167:57870,62168:57871,62169:57872,62170:57873,62171:57874,62172:57875,62173:57876,62174:57877,62175:57878,62176:57879,62177:57880,62178:57881,62179:57882,62180:57883,62181:57884,62182:57885,62183:57886,62184:57887,62185:57888,62186:57889,62187:57890,62188:57891,62189:57892,62190:57893,62191:57894,62192:57895,62193:57896,62194:57897,62195:57898,62196:57899,62197:57900,62198:57901,62199:57902,62200:57903,62201:57904,62202:57905,62203:57906,62204:57907,62272:57908,62273:57909,62274:57910,62275:57911,62276:57912,62277:57913,62278:57914,62279:57915,62280:57916,62281:57917,62282:57918,62283:57919,62284:57920,62285:57921,62286:57922,62287:57923,62288:57924,62289:57925,62290:57926,62291:57927,62292:57928,62293:57929,62294:57930,62295:57931,62296:57932,62297:57933,62298:57934,62299:57935,62300:57936,62301:57937,62302:57938,62303:57939,62304:57940,62305:57941,62306:57942,62307:57943,62308:57944,62309:57945,62310:57946,62311:57947,62312:57948,62313:57949,62314:57950,62315:57951,62316:57952,62317:57953,62318:57954,62319:57955,62320:57956,62321:57957,62322:57958,62323:57959,62324:57960,62325:57961,62326:57962,62327:57963,62328:57964,62329:57965,62330:57966,62331:57967,62332:57968,62333:57969,62334:57970,62336:57971,62337:57972,62338:57973,62339:57974,62340:57975,62341:57976,62342:57977,62343:57978,62344:57979,62345:57980,62346:57981,62347:57982,62348:57983,62349:57984,62350:57985,62351:57986,62352:57987,62353:57988,62354:57989,62355:57990,62356:57991,62357:57992,62358:57993,62359:57994,62360:57995,62361:57996,62362:57997,62363:57998,62364:57999,62365:58e3,62366:58001,62367:58002,62368:58003,62369:58004,62370:58005,62371:58006,62372:58007,62373:58008,62374:58009,62375:58010,62376:58011,62377:58012,62378:58013,62379:58014,62380:58015,62381:58016,62382:58017,62383:58018,62384:58019,62385:58020,62386:58021,62387:58022,62388:58023,62389:58024,62390:58025,62391:58026,62392:58027,62393:58028,62394:58029,62395:58030,62396:58031,62397:58032,62398:58033,62399:58034,62400:58035,62401:58036,62402:58037,62403:58038,62404:58039,62405:58040,62406:58041,62407:58042,62408:58043,62409:58044,62410:58045,62411:58046,62412:58047,62413:58048,62414:58049,62415:58050,62416:58051,62417:58052,62418:58053,62419:58054,62420:58055,62421:58056,62422:58057,62423:58058,62424:58059,62425:58060,62426:58061,62427:58062,62428:58063,62429:58064,62430:58065,62431:58066,62432:58067,62433:58068,62434:58069,62435:58070,62436:58071,62437:58072,62438:58073,62439:58074,62440:58075,62441:58076,62442:58077,62443:58078,62444:58079,62445:58080,62446:58081,62447:58082,62448:58083,62449:58084,62450:58085,62451:58086,62452:58087,62453:58088,62454:58089,62455:58090,62456:58091,62457:58092,62458:58093,62459:58094,62460:58095,62528:58096,62529:58097,62530:58098,62531:58099,62532:58100,62533:58101,62534:58102,62535:58103,62536:58104,62537:58105,62538:58106,62539:58107,62540:58108,62541:58109,62542:58110,62543:58111,62544:58112,62545:58113,62546:58114,62547:58115,62548:58116,62549:58117,62550:58118,62551:58119,62552:58120,62553:58121,62554:58122,62555:58123,62556:58124,62557:58125,62558:58126,62559:58127,62560:58128,62561:58129,62562:58130,62563:58131,62564:58132,62565:58133,62566:58134,62567:58135,62568:58136,62569:58137,62570:58138,62571:58139,62572:58140,62573:58141,62574:58142,62575:58143,62576:58144,62577:58145,62578:58146,62579:58147,62580:58148,62581:58149,62582:58150,62583:58151,62584:58152,62585:58153,62586:58154,62587:58155,62588:58156,62589:58157,62590:58158,62592:58159,62593:58160,62594:58161,62595:58162,62596:58163,62597:58164,62598:58165,62599:58166,62600:58167,62601:58168,62602:58169,62603:58170,62604:58171,62605:58172,62606:58173,62607:58174,62608:58175,62609:58176,62610:58177,62611:58178,62612:58179,62613:58180,62614:58181,62615:58182,62616:58183,62617:58184,62618:58185,62619:58186,62620:58187,62621:58188,62622:58189,62623:58190,62624:58191,62625:58192,62626:58193,62627:58194,62628:58195,62629:58196,62630:58197,62631:58198,62632:58199,62633:58200,62634:58201,62635:58202,62636:58203,62637:58204,62638:58205,62639:58206,62640:58207,62641:58208,62642:58209,62643:58210,62644:58211,62645:58212,62646:58213,62647:58214,62648:58215,62649:58216,62650:58217,62651:58218,62652:58219,62653:58220,62654:58221,62655:58222,62656:58223,62657:58224,62658:58225,62659:58226,62660:58227,62661:58228,62662:58229,62663:58230,62664:58231,62665:58232,62666:58233,62667:58234,62668:58235,62669:58236,62670:58237,62671:58238,62672:58239,62673:58240,62674:58241,62675:58242,62676:58243,62677:58244,62678:58245,62679:58246,62680:58247,62681:58248,62682:58249,62683:58250,62684:58251,62685:58252,62686:58253,62687:58254,62688:58255,62689:58256,62690:58257,62691:58258,62692:58259,62693:58260,62694:58261,62695:58262,62696:58263,62697:58264,62698:58265,62699:58266,62700:58267,62701:58268,62702:58269,62703:58270,62704:58271,62705:58272,62706:58273,62707:58274,62708:58275,62709:58276,62710:58277,62711:58278,62712:58279,62713:58280,62714:58281,62715:58282,62716:58283,62784:58284,62785:58285,62786:58286,62787:58287,62788:58288,62789:58289,62790:58290,62791:58291,62792:58292,62793:58293,62794:58294,62795:58295,62796:58296,62797:58297,62798:58298,62799:58299,62800:58300,62801:58301,62802:58302,62803:58303,62804:58304,62805:58305,62806:58306,62807:58307,62808:58308,62809:58309,62810:58310,62811:58311,62812:58312,62813:58313,62814:58314,62815:58315,62816:58316,62817:58317,62818:58318,62819:58319,62820:58320,62821:58321,62822:58322,62823:58323,62824:58324,62825:58325,62826:58326,62827:58327,62828:58328,62829:58329,62830:58330,62831:58331,62832:58332,62833:58333,62834:58334,62835:58335,62836:58336,62837:58337,62838:58338,62839:58339,62840:58340,62841:58341,62842:58342,62843:58343,62844:58344,62845:58345,62846:58346,62848:58347,62849:58348,62850:58349,62851:58350,62852:58351,62853:58352,62854:58353,62855:58354,62856:58355,62857:58356,62858:58357,62859:58358,62860:58359,62861:58360,62862:58361,62863:58362,62864:58363,62865:58364,62866:58365,62867:58366,62868:58367,62869:58368,62870:58369,62871:58370,62872:58371,62873:58372,62874:58373,62875:58374,62876:58375,62877:58376,62878:58377,62879:58378,62880:58379,62881:58380,62882:58381,62883:58382,62884:58383,62885:58384,62886:58385,62887:58386,62888:58387,62889:58388,62890:58389,62891:58390,62892:58391,62893:58392,62894:58393,62895:58394,62896:58395,62897:58396,62898:58397,62899:58398,62900:58399,62901:58400,62902:58401,62903:58402,62904:58403,62905:58404,62906:58405,62907:58406,62908:58407,62909:58408,62910:58409,62911:58410,62912:58411,62913:58412,62914:58413,62915:58414,62916:58415,62917:58416,62918:58417,62919:58418,62920:58419,62921:58420,62922:58421,62923:58422,62924:58423,62925:58424,62926:58425,62927:58426,62928:58427,62929:58428,62930:58429,62931:58430,62932:58431,62933:58432,62934:58433,62935:58434,62936:58435,62937:58436,62938:58437,62939:58438,62940:58439,62941:58440,62942:58441,62943:58442,62944:58443,62945:58444,62946:58445,62947:58446,62948:58447,62949:58448,62950:58449,62951:58450,62952:58451,62953:58452,62954:58453,62955:58454,62956:58455,62957:58456,62958:58457,62959:58458,62960:58459,62961:58460,62962:58461,62963:58462,62964:58463,62965:58464,62966:58465,62967:58466,62968:58467,62969:58468,62970:58469,62971:58470,62972:58471,63040:58472,63041:58473,63042:58474,63043:58475,63044:58476,63045:58477,63046:58478,63047:58479,63048:58480,63049:58481,63050:58482,63051:58483,63052:58484,63053:58485,63054:58486,63055:58487,63056:58488,63057:58489,63058:58490,63059:58491,63060:58492,63061:58493,63062:58494,63063:58495,63064:58496,63065:58497,63066:58498,63067:58499,63068:58500,63069:58501,63070:58502,63071:58503,63072:58504,63073:58505,63074:58506,63075:58507,63076:58508,63077:58509,63078:58510,63079:58511,63080:58512,63081:58513,63082:58514,63083:58515,63084:58516,63085:58517,63086:58518,63087:58519,63088:58520,63089:58521,63090:58522,63091:58523,63092:58524,63093:58525,63094:58526,63095:58527,63096:58528,63097:58529,63098:58530,63099:58531,63100:58532,63101:58533,63102:58534,63104:58535,63105:58536,63106:58537,63107:58538,63108:58539,63109:58540,63110:58541,63111:58542,63112:58543,63113:58544,63114:58545,63115:58546,63116:58547,63117:58548,63118:58549,63119:58550,63120:58551,63121:58552,63122:58553,63123:58554,63124:58555,63125:58556,63126:58557,63127:58558,63128:58559,63129:58560,63130:58561,63131:58562,63132:58563,63133:58564,63134:58565,63135:58566,63136:58567,63137:58568,63138:58569,63139:58570,63140:58571,63141:58572,63142:58573,63143:58574,63144:58575,63145:58576,63146:58577,63147:58578,63148:58579,63149:58580,63150:58581,63151:58582,63152:58583,63153:58584,63154:58585,63155:58586,63156:58587,63157:58588,63158:58589,63159:58590,63160:58591,63161:58592,63162:58593,63163:58594,63164:58595,63165:58596,63166:58597,63167:58598,63168:58599,63169:58600,63170:58601,63171:58602,63172:58603,63173:58604,63174:58605,63175:58606,63176:58607,63177:58608,63178:58609,63179:58610,63180:58611,63181:58612,63182:58613,63183:58614,63184:58615,63185:58616,63186:58617,63187:58618,63188:58619,63189:58620,63190:58621,63191:58622,63192:58623,63193:58624,63194:58625,63195:58626,63196:58627,63197:58628,63198:58629,63199:58630,63200:58631,63201:58632,63202:58633,63203:58634,63204:58635,63205:58636,63206:58637,63207:58638,63208:58639,63209:58640,63210:58641,63211:58642,63212:58643,63213:58644,63214:58645,63215:58646,63216:58647,63217:58648,63218:58649,63219:58650,63220:58651,63221:58652,63222:58653,63223:58654,63224:58655,63225:58656,63226:58657,63227:58658,63228:58659,63296:58660,63297:58661,63298:58662,63299:58663,63300:58664,63301:58665,63302:58666,63303:58667,63304:58668,63305:58669,63306:58670,63307:58671,63308:58672,63309:58673,63310:58674,63311:58675,63312:58676,63313:58677,63314:58678,63315:58679,63316:58680,63317:58681,63318:58682,63319:58683,63320:58684,63321:58685,63322:58686,63323:58687,63324:58688,63325:58689,63326:58690,63327:58691,63328:58692,63329:58693,63330:58694,63331:58695,63332:58696,63333:58697,63334:58698,63335:58699,63336:58700,63337:58701,63338:58702,63339:58703,63340:58704,63341:58705,63342:58706,63343:58707,63344:58708,63345:58709,63346:58710,63347:58711,63348:58712,63349:58713,63350:58714,63351:58715,63352:58716,63353:58717,63354:58718,63355:58719,63356:58720,63357:58721,63358:58722,63360:58723,63361:58724,63362:58725,63363:58726,63364:58727,63365:58728,63366:58729,63367:58730,63368:58731,63369:58732,63370:58733,63371:58734,63372:58735,63373:58736,63374:58737,63375:58738,63376:58739,63377:58740,63378:58741,63379:58742,63380:58743,63381:58744,63382:58745,63383:58746,63384:58747,63385:58748,63386:58749,63387:58750,63388:58751,63389:58752,63390:58753,63391:58754,63392:58755,63393:58756,63394:58757,63395:58758,63396:58759,63397:58760,63398:58761,63399:58762,63400:58763,63401:58764,63402:58765,63403:58766,63404:58767,63405:58768,63406:58769,63407:58770,63408:58771,63409:58772,63410:58773,63411:58774,63412:58775,63413:58776,63414:58777,63415:58778,63416:58779,63417:58780,63418:58781,63419:58782,63420:58783,63421:58784,63422:58785,63423:58786,63424:58787,63425:58788,63426:58789,63427:58790,63428:58791,63429:58792,63430:58793,63431:58794,63432:58795,63433:58796,63434:58797,63435:58798,63436:58799,63437:58800,63438:58801,63439:58802,63440:58803,63441:58804,63442:58805,63443:58806,63444:58807,63445:58808,63446:58809,63447:58810,63448:58811,63449:58812,63450:58813,63451:58814,63452:58815,63453:58816,63454:58817,63455:58818,63456:58819,63457:58820,63458:58821,63459:58822,63460:58823,63461:58824,63462:58825,63463:58826,63464:58827,63465:58828,63466:58829,63467:58830,63468:58831,63469:58832,63470:58833,63471:58834,63472:58835,63473:58836,63474:58837,63475:58838,63476:58839,63477:58840,63478:58841,63479:58842,63480:58843,63481:58844,63482:58845,63483:58846,63484:58847,63552:58848,63553:58849,63554:58850,63555:58851,63556:58852,63557:58853,63558:58854,63559:58855,63560:58856,63561:58857,63562:58858,63563:58859,63564:58860,63565:58861,63566:58862,63567:58863,63568:58864,63569:58865,63570:58866,63571:58867,63572:58868,63573:58869,63574:58870,63575:58871,63576:58872,63577:58873,63578:58874,63579:58875,63580:58876,63581:58877,63582:58878,63583:58879,63584:58880,63585:58881,63586:58882,63587:58883,63588:58884,63589:58885,63590:58886,63591:58887,63592:58888,63593:58889,63594:58890,63595:58891,63596:58892,63597:58893,63598:58894,63599:58895,63600:58896,63601:58897,63602:58898,63603:58899,63604:58900,63605:58901,63606:58902,63607:58903,63608:58904,63609:58905,63610:58906,63611:58907,63612:58908,63613:58909,63614:58910,63616:58911,63617:58912,63618:58913,63619:58914,63620:58915,63621:58916,63622:58917,63623:58918,63624:58919,63625:58920,63626:58921,63627:58922,63628:58923,63629:58924,63630:58925,63631:58926,63632:58927,63633:58928,63634:58929,63635:58930,63636:58931,63637:58932,63638:58933,63639:58934,63640:58935,63641:58936,63642:58937,63643:58938,63644:58939,63645:58940,63646:58941,63647:58942,63648:58943,63649:58944,63650:58945,63651:58946,63652:58947,63653:58948,63654:58949,63655:58950,63656:58951,63657:58952,63658:58953,63659:58954,63660:58955,63661:58956,63662:58957,63663:58958,63664:58959,63665:58960,63666:58961,63667:58962,63668:58963,63669:58964,63670:58965,63671:58966,63672:58967,63673:58968,63674:58969,63675:58970,63676:58971,63677:58972,63678:58973,63679:58974,63680:58975,63681:58976,63682:58977,63683:58978,63684:58979,63685:58980,63686:58981,63687:58982,63688:58983,63689:58984,63690:58985,63691:58986,63692:58987,63693:58988,63694:58989,63695:58990,63696:58991,63697:58992,63698:58993,63699:58994,63700:58995,63701:58996,63702:58997,63703:58998,63704:58999,63705:59e3,63706:59001,63707:59002,63708:59003,63709:59004,63710:59005,63711:59006,63712:59007,63713:59008,63714:59009,63715:59010,63716:59011,63717:59012,63718:59013,63719:59014,63720:59015,63721:59016,63722:59017,63723:59018,63724:59019,63725:59020,63726:59021,63727:59022,63728:59023,63729:59024,63730:59025,63731:59026,63732:59027,63733:59028,63734:59029,63735:59030,63736:59031,63737:59032,63738:59033,63739:59034,63740:59035,64064:8560,64065:8561,64066:8562,64067:8563,64068:8564,64069:8565,64070:8566,64071:8567,64072:8568,64073:8569,64074:8544,64075:8545,64076:8546,64077:8547,64078:8548,64079:8549,64080:8550,64081:8551,64082:8552,64083:8553,64084:65506,64085:65508,64086:65287,64087:65282,64088:12849,64089:8470,64090:8481,64091:8757,64092:32394,64093:35100,64094:37704,64095:37512,64096:34012,64097:20425,64098:28859,64099:26161,64100:26824,64101:37625,64102:26363,64103:24389,64104:20008,64105:20193,64106:20220,64107:20224,64108:20227,64109:20281,64110:20310,64111:20370,64112:20362,64113:20378,64114:20372,64115:20429,64116:20544,64117:20514,64118:20479,64119:20510,64120:20550,64121:20592,64122:20546,64123:20628,64124:20724,64125:20696,64126:20810,64128:20836,64129:20893,64130:20926,64131:20972,64132:21013,64133:21148,64134:21158,64135:21184,64136:21211,64137:21248,64138:21255,64139:21284,64140:21362,64141:21395,64142:21426,64143:21469,64144:64014,64145:21660,64146:21642,64147:21673,64148:21759,64149:21894,64150:22361,64151:22373,64152:22444,64153:22472,64154:22471,64155:64015,64156:64016,64157:22686,64158:22706,64159:22795,64160:22867,64161:22875,64162:22877,64163:22883,64164:22948,64165:22970,64166:23382,64167:23488,64168:29999,64169:23512,64170:23532,64171:23582,64172:23718,64173:23738,64174:23797,64175:23847,64176:23891,64177:64017,64178:23874,64179:23917,64180:23992,64181:23993,64182:24016,64183:24353,64184:24372,64185:24423,64186:24503,64187:24542,64188:24669,64189:24709,64190:24714,64191:24798,64192:24789,64193:24864,64194:24818,64195:24849,64196:24887,64197:24880,64198:24984,64199:25107,64200:25254,64201:25589,64202:25696,64203:25757,64204:25806,64205:25934,64206:26112,64207:26133,64208:26171,64209:26121,64210:26158,64211:26142,64212:26148,64213:26213,64214:26199,64215:26201,64216:64018,64217:26227,64218:26265,64219:26272,64220:26290,64221:26303,64222:26362,64223:26382,64224:63785,64225:26470,64226:26555,64227:26706,64228:26560,64229:26625,64230:26692,64231:26831,64232:64019,64233:26984,64234:64020,64235:27032,64236:27106,64237:27184,64238:27243,64239:27206,64240:27251,64241:27262,64242:27362,64243:27364,64244:27606,64245:27711,64246:27740,64247:27782,64248:27759,64249:27866,64250:27908,64251:28039,64252:28015,64320:28054,64321:28076,64322:28111,64323:28152,64324:28146,64325:28156,64326:28217,64327:28252,64328:28199,64329:28220,64330:28351,64331:28552,64332:28597,64333:28661,64334:28677,64335:28679,64336:28712,64337:28805,64338:28843,64339:28943,64340:28932,64341:29020,64342:28998,64343:28999,64344:64021,64345:29121,64346:29182,64347:29361,64348:29374,64349:29476,64350:64022,64351:29559,64352:29629,64353:29641,64354:29654,64355:29667,64356:29650,64357:29703,64358:29685,64359:29734,64360:29738,64361:29737,64362:29742,64363:29794,64364:29833,64365:29855,64366:29953,64367:30063,64368:30338,64369:30364,64370:30366,64371:30363,64372:30374,64373:64023,64374:30534,64375:21167,64376:30753,64377:30798,64378:30820,64379:30842,64380:31024,64381:64024,64382:64025,64384:64026,64385:31124,64386:64027,64387:31131,64388:31441,64389:31463,64390:64028,64391:31467,64392:31646,64393:64029,64394:32072,64395:32092,64396:32183,64397:32160,64398:32214,64399:32338,64400:32583,64401:32673,64402:64030,64403:33537,64404:33634,64405:33663,64406:33735,64407:33782,64408:33864,64409:33972,64410:34131,64411:34137,64412:34155,64413:64031,64414:34224,64415:64032,64416:64033,64417:34823,64418:35061,64419:35346,64420:35383,64421:35449,64422:35495,64423:35518,64424:35551,64425:64034,64426:35574,64427:35667,64428:35711,64429:36080,64430:36084,64431:36114,64432:36214,64433:64035,64434:36559,64435:64036,64436:64037,64437:36967,64438:37086,64439:64038,64440:37141,64441:37159,64442:37338,64443:37335,64444:37342,64445:37357,64446:37358,64447:37348,64448:37349,64449:37382,64450:37392,64451:37386,64452:37434,64453:37440,64454:37436,64455:37454,64456:37465,64457:37457,64458:37433,64459:37479,64460:37543,64461:37495,64462:37496,64463:37607,64464:37591,64465:37593,64466:37584,64467:64039,64468:37589,64469:37600,64470:37587,64471:37669,64472:37665,64473:37627,64474:64040,64475:37662,64476:37631,64477:37661,64478:37634,64479:37744,64480:37719,64481:37796,64482:37830,64483:37854,64484:37880,64485:37937,64486:37957,64487:37960,64488:38290,64489:63964,64490:64041,64491:38557,64492:38575,64493:38707,64494:38715,64495:38723,64496:38733,64497:38735,64498:38737,64499:38741,64500:38999,64501:39013,64502:64042,64503:64043,64504:39207,64505:64044,64506:39326,64507:39502,64508:39641,64576:39644,64577:39797,64578:39794,64579:39823,64580:39857,64581:39867,64582:39936,64583:40304,64584:40299,64585:64045,64586:40473,64587:40657}}s2u(e){for(var t=this.s2uTable,n=``,r=0;r<e.length;){var i=e[r++];if(!(i>=0&&i<=126||i>=161&&i<=223)&&r<e.length&&(i=i<<8|e[r++]),t[i]===void 0)return console.error(`unknown char code `+i+`.`),n;n+=String.fromCharCode(t[i])}return n}},Sl=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t===void 0||t,this.encoder=new xl}getInt8(){var e=this.dv.getInt8(this.offset);return this.offset+=1,e}getInt8Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getInt8());return t}getUint8(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e}getUint8Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getUint8());return t}getInt16(){var e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt16Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getInt16());return t}getUint16(){var e=this.dv.getUint16(this.offset,this.littleEndian);return this.offset+=2,e}getUint16Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getUint16());return t}getInt32(){var e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){var e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getUint32Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getUint32());return t}getFloat32(){var e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){for(var t=[],n=0;n<e;n++)t.push(this.getFloat64());return t}getIndex(e,t){switch(e){case 1:return t===!0?this.getUint8():this.getInt8();case 2:return t===!0?this.getUint16():this.getInt16();case 4:return this.getInt32();default:throw`unknown number type `+e+` exception.`}}getIndexArray(e,t,n){for(var r=[],i=0;i<t;i++)r.push(this.getIndex(e,n));return r}getChars(e){for(var t=``;e>0;){var n=this.getUint8();if(e--,n===0)break;t+=String.fromCharCode(n)}for(;e>0;)this.getUint8(),e--;return t}getSjisStringsAsUnicode(e){for(var t=[];e>0;){var n=this.getUint8();if(e--,n===0)break;t.push(n)}for(;e>0;)this.getUint8(),e--;return this.encoder.s2u(new Uint8Array(t))}getUnicodeStrings(e){for(var t=``;e>0;){var n=this.getUint16();if(e-=2,n===0)break;t+=String.fromCharCode(n)}for(;e>0;)this.getUint8(),e--;return t}getTextBuffer(){var e=this.getUint32();return this.getUnicodeStrings(e)}},Cl=class{leftToRightVector3(e){e[2]=-e[2]}leftToRightQuaternion(e){e[0]=-e[0],e[1]=-e[1]}leftToRightEuler(e){e[0]=-e[0],e[1]=-e[1]}leftToRightIndexOrder(e){var t=e[2];e[2]=e[0],e[0]=t}leftToRightVector3Range(e,t){var n=-t[2];t[2]=-e[2],e[2]=n}leftToRightEulerRange(e,t){var n=-t[0],r=-t[1];t[0]=-e[0],t[1]=-e[1],e[0]=n,e[1]=r}},wl=class{constructor(){}parsePmd(e,t){var n={},r=new Sl(e);return n.metadata={},n.metadata.format=`pmd`,n.metadata.coordinateSystem=`left`,function(){var e=n.metadata;if(e.magic=r.getChars(3),e.magic!==`Pmd`)throw`PMD file magic is not Pmd, but `+e.magic;e.version=r.getFloat32(),e.modelName=r.getSjisStringsAsUnicode(20),e.comment=r.getSjisStringsAsUnicode(256)}(),function(){var e=function(){var e={};return e.position=r.getFloat32Array(3),e.normal=r.getFloat32Array(3),e.uv=r.getFloat32Array(2),e.skinIndices=r.getUint16Array(2),e.skinWeights=[r.getUint8()/100],e.skinWeights.push(1-e.skinWeights[0]),e.edgeFlag=r.getUint8(),e},t=n.metadata;t.vertexCount=r.getUint32(),n.vertices=[];for(var i=0;i<t.vertexCount;i++)n.vertices.push(e())}(),function(){var e=function(){var e={};return e.indices=r.getUint16Array(3),e},t=n.metadata;t.faceCount=r.getUint32()/3,n.faces=[];for(var i=0;i<t.faceCount;i++)n.faces.push(e())}(),function(){var e=function(){var e={};return e.diffuse=r.getFloat32Array(4),e.shininess=r.getFloat32(),e.specular=r.getFloat32Array(3),e.ambient=r.getFloat32Array(3),e.toonIndex=r.getInt8(),e.edgeFlag=r.getUint8(),e.faceCount=r.getUint32()/3,e.fileName=r.getSjisStringsAsUnicode(20),e},t=n.metadata;t.materialCount=r.getUint32(),n.materials=[];for(var i=0;i<t.materialCount;i++)n.materials.push(e())}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(20),e.parentIndex=r.getInt16(),e.tailIndex=r.getInt16(),e.type=r.getUint8(),e.ikIndex=r.getInt16(),e.position=r.getFloat32Array(3),e},t=n.metadata;t.boneCount=r.getUint16(),n.bones=[];for(var i=0;i<t.boneCount;i++)n.bones.push(e())}(),function(){var e=function(){var e={};e.target=r.getUint16(),e.effector=r.getUint16(),e.linkCount=r.getUint8(),e.iteration=r.getUint16(),e.maxAngle=r.getFloat32(),e.links=[];for(var t=0;t<e.linkCount;t++){var n={};n.index=r.getUint16(),e.links.push(n)}return e},t=n.metadata;t.ikCount=r.getUint16(),n.iks=[];for(var i=0;i<t.ikCount;i++)n.iks.push(e())}(),function(){var e=function(){var e={};e.name=r.getSjisStringsAsUnicode(20),e.elementCount=r.getUint32(),e.type=r.getUint8(),e.elements=[];for(var t=0;t<e.elementCount;t++)e.elements.push({index:r.getUint32(),position:r.getFloat32Array(3)});return e},t=n.metadata;t.morphCount=r.getUint16(),n.morphs=[];for(var i=0;i<t.morphCount;i++)n.morphs.push(e())}(),function(){var e=function(){var e={};return e.index=r.getUint16(),e},t=n.metadata;t.morphFrameCount=r.getUint8(),n.morphFrames=[];for(var i=0;i<t.morphFrameCount;i++)n.morphFrames.push(e())}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(50),e},t=n.metadata;t.boneFrameNameCount=r.getUint8(),n.boneFrameNames=[];for(var i=0;i<t.boneFrameNameCount;i++)n.boneFrameNames.push(e())}(),function(){var e=function(){var e={};return e.boneIndex=r.getInt16(),e.frameIndex=r.getUint8(),e},t=n.metadata;t.boneFrameCount=r.getUint32(),n.boneFrames=[];for(var i=0;i<t.boneFrameCount;i++)n.boneFrames.push(e())}(),function(){var e=n.metadata;e.englishCompatibility=r.getUint8(),e.englishCompatibility>0&&(e.englishModelName=r.getSjisStringsAsUnicode(20),e.englishComment=r.getSjisStringsAsUnicode(256))}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(20),e},t=n.metadata;if(t.englishCompatibility!==0){n.englishBoneNames=[];for(var i=0;i<t.boneCount;i++)n.englishBoneNames.push(e())}}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(20),e},t=n.metadata;if(t.englishCompatibility!==0){n.englishMorphNames=[];for(var i=0;i<t.morphCount-1;i++)n.englishMorphNames.push(e())}}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(50),e},t=n.metadata;if(t.englishCompatibility!==0){n.englishBoneFrameNames=[];for(var i=0;i<t.boneFrameNameCount;i++)n.englishBoneFrameNames.push(e())}}(),function(){var e=function(){var e={};return e.fileName=r.getSjisStringsAsUnicode(100),e};n.toonTextures=[];for(var t=0;t<10;t++)n.toonTextures.push(e())}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(20),e.boneIndex=r.getInt16(),e.groupIndex=r.getUint8(),e.groupTarget=r.getUint16(),e.shapeType=r.getUint8(),e.width=r.getFloat32(),e.height=r.getFloat32(),e.depth=r.getFloat32(),e.position=r.getFloat32Array(3),e.rotation=r.getFloat32Array(3),e.weight=r.getFloat32(),e.positionDamping=r.getFloat32(),e.rotationDamping=r.getFloat32(),e.restitution=r.getFloat32(),e.friction=r.getFloat32(),e.type=r.getUint8(),e},t=n.metadata;t.rigidBodyCount=r.getUint32(),n.rigidBodies=[];for(var i=0;i<t.rigidBodyCount;i++)n.rigidBodies.push(e())}(),function(){var e=function(){var e={};return e.name=r.getSjisStringsAsUnicode(20),e.rigidBodyIndex1=r.getUint32(),e.rigidBodyIndex2=r.getUint32(),e.position=r.getFloat32Array(3),e.rotation=r.getFloat32Array(3),e.translationLimitation1=r.getFloat32Array(3),e.translationLimitation2=r.getFloat32Array(3),e.rotationLimitation1=r.getFloat32Array(3),e.rotationLimitation2=r.getFloat32Array(3),e.springPosition=r.getFloat32Array(3),e.springRotation=r.getFloat32Array(3),e},t=n.metadata;t.constraintCount=r.getUint32(),n.constraints=[];for(var i=0;i<t.constraintCount;i++)n.constraints.push(e())}(),t===!0&&this.leftToRightModel(n),n}parsePmx(e,t){var n={},r=new Sl(e);return n.metadata={},n.metadata.format=`pmx`,n.metadata.coordinateSystem=`left`,function(){var e=n.metadata;if(e.magic=r.getChars(4),e.magic!==`PMX `)throw`PMX file magic is not PMX , but `+e.magic;if(e.version=r.getFloat32(),e.version!==2&&e.version!==2.1)throw`PMX version `+e.version+` is not supported.`;e.headerSize=r.getUint8(),e.encoding=r.getUint8(),e.additionalUvNum=r.getUint8(),e.vertexIndexSize=r.getUint8(),e.textureIndexSize=r.getUint8(),e.materialIndexSize=r.getUint8(),e.boneIndexSize=r.getUint8(),e.morphIndexSize=r.getUint8(),e.rigidBodyIndexSize=r.getUint8(),e.modelName=r.getTextBuffer(),e.englishModelName=r.getTextBuffer(),e.comment=r.getTextBuffer(),e.englishComment=r.getTextBuffer()}(),function(){var e=function(){var e={};e.position=r.getFloat32Array(3),e.normal=r.getFloat32Array(3),e.uv=r.getFloat32Array(2),e.auvs=[];for(var i=0;i<n.metadata.additionalUvNum;i++)e.auvs.push(r.getFloat32Array(4));e.type=r.getUint8();var a=t.boneIndexSize;if(e.type===0)e.skinIndices=r.getIndexArray(a,1),e.skinWeights=[1];else if(e.type===1)e.skinIndices=r.getIndexArray(a,2),e.skinWeights=r.getFloat32Array(1),e.skinWeights.push(1-e.skinWeights[0]);else if(e.type===2)e.skinIndices=r.getIndexArray(a,4),e.skinWeights=r.getFloat32Array(4);else if(e.type===3)e.skinIndices=r.getIndexArray(a,2),e.skinWeights=r.getFloat32Array(1),e.skinWeights.push(1-e.skinWeights[0]),e.skinC=r.getFloat32Array(3),e.skinR0=r.getFloat32Array(3),e.skinR1=r.getFloat32Array(3),e.type=1;else throw`unsupport bone type `+e.type+` exception.`;return e.edgeRatio=r.getFloat32(),e},t=n.metadata;t.vertexCount=r.getUint32(),n.vertices=[];for(var i=0;i<t.vertexCount;i++)n.vertices.push(e())}(),function(){var e=function(){var e={};return e.indices=r.getIndexArray(t.vertexIndexSize,3,!0),e},t=n.metadata;t.faceCount=r.getUint32()/3,n.faces=[];for(var i=0;i<t.faceCount;i++)n.faces.push(e())}(),function(){var e=function(){return r.getTextBuffer()},t=n.metadata;t.textureCount=r.getUint32(),n.textures=[];for(var i=0;i<t.textureCount;i++)n.textures.push(e())}(),function(){var e=function(){var e={};if(e.name=r.getTextBuffer(),e.englishName=r.getTextBuffer(),e.diffuse=r.getFloat32Array(4),e.specular=r.getFloat32Array(3),e.shininess=r.getFloat32(),e.ambient=r.getFloat32Array(3),e.flag=r.getUint8(),e.edgeColor=r.getFloat32Array(4),e.edgeSize=r.getFloat32(),e.textureIndex=r.getIndex(n.metadata.textureIndexSize),e.envTextureIndex=r.getIndex(n.metadata.textureIndexSize),e.envFlag=r.getUint8(),e.toonFlag=r.getUint8(),e.toonFlag===0)e.toonIndex=r.getIndex(n.metadata.textureIndexSize);else if(e.toonFlag===1)e.toonIndex=r.getInt8();else throw`unknown toon flag `+e.toonFlag+` exception.`;return e.comment=r.getTextBuffer(),e.faceCount=r.getUint32()/3,e},t=n.metadata;t.materialCount=r.getUint32(),n.materials=[];for(var i=0;i<t.materialCount;i++)n.materials.push(e())}(),function(){var e=function(){var e={};if(e.name=r.getTextBuffer(),e.englishName=r.getTextBuffer(),e.position=r.getFloat32Array(3),e.parentIndex=r.getIndex(n.metadata.boneIndexSize),e.transformationClass=r.getUint32(),e.flag=r.getUint16(),e.flag&1?e.connectIndex=r.getIndex(n.metadata.boneIndexSize):e.offsetPosition=r.getFloat32Array(3),e.flag&256||e.flag&512){var t={};t.isLocal=!!(e.flag&128),t.affectRotation=!!(e.flag&256),t.affectPosition=!!(e.flag&512),t.parentIndex=r.getIndex(n.metadata.boneIndexSize),t.ratio=r.getFloat32(),e.grant=t}if(e.flag&1024&&(e.fixAxis=r.getFloat32Array(3)),e.flag&2048&&(e.localXVector=r.getFloat32Array(3),e.localZVector=r.getFloat32Array(3)),e.flag&8192&&(e.key=r.getUint32()),e.flag&32){var i={};i.effector=r.getIndex(n.metadata.boneIndexSize),i.target=null,i.iteration=r.getUint32(),i.maxAngle=r.getFloat32(),i.linkCount=r.getUint32(),i.links=[];for(var a=0;a<i.linkCount;a++){var o={};o.index=r.getIndex(n.metadata.boneIndexSize),o.angleLimitation=r.getUint8(),o.angleLimitation===1&&(o.lowerLimitationAngle=r.getFloat32Array(3),o.upperLimitationAngle=r.getFloat32Array(3)),i.links.push(o)}e.ik=i}return e},t=n.metadata;t.boneCount=r.getUint32(),n.bones=[];for(var i=0;i<t.boneCount;i++)n.bones.push(e())}(),function(){var e=function(){var e={};e.name=r.getTextBuffer(),e.englishName=r.getTextBuffer(),e.panel=r.getUint8(),e.type=r.getUint8(),e.elementCount=r.getUint32(),e.elements=[];for(var t=0;t<e.elementCount;t++)if(e.type===0){var i={};i.index=r.getIndex(n.metadata.morphIndexSize),i.ratio=r.getFloat32(),e.elements.push(i)}else if(e.type===1){var i={};i.index=r.getIndex(n.metadata.vertexIndexSize,!0),i.position=r.getFloat32Array(3),e.elements.push(i)}else if(e.type===2){var i={};i.index=r.getIndex(n.metadata.boneIndexSize),i.position=r.getFloat32Array(3),i.rotation=r.getFloat32Array(4),e.elements.push(i)}else if(e.type===3){var i={};i.index=r.getIndex(n.metadata.vertexIndexSize,!0),i.uv=r.getFloat32Array(4),e.elements.push(i)}else if(e.type!==4&&e.type!==5&&e.type!==6&&e.type!==7&&e.type===8){var i={};i.index=r.getIndex(n.metadata.materialIndexSize),i.type=r.getUint8(),i.diffuse=r.getFloat32Array(4),i.specular=r.getFloat32Array(3),i.shininess=r.getFloat32(),i.ambient=r.getFloat32Array(3),i.edgeColor=r.getFloat32Array(4),i.edgeSize=r.getFloat32(),i.textureColor=r.getFloat32Array(4),i.sphereTextureColor=r.getFloat32Array(4),i.toonColor=r.getFloat32Array(4),e.elements.push(i)}return e},t=n.metadata;t.morphCount=r.getUint32(),n.morphs=[];for(var i=0;i<t.morphCount;i++)n.morphs.push(e())}(),function(){var e=function(){var e={};e.name=r.getTextBuffer(),e.englishName=r.getTextBuffer(),e.type=r.getUint8(),e.elementCount=r.getUint32(),e.elements=[];for(var t=0;t<e.elementCount;t++){var i={};i.target=r.getUint8(),i.index=i.target===0?r.getIndex(n.metadata.boneIndexSize):r.getIndex(n.metadata.morphIndexSize),e.elements.push(i)}return e},t=n.metadata;t.frameCount=r.getUint32(),n.frames=[];for(var i=0;i<t.frameCount;i++)n.frames.push(e())}(),function(){var e=function(){var e={};return e.name=r.getTextBuffer(),e.englishName=r.getTextBuffer(),e.boneIndex=r.getIndex(n.metadata.boneIndexSize),e.groupIndex=r.getUint8(),e.groupTarget=r.getUint16(),e.shapeType=r.getUint8(),e.width=r.getFloat32(),e.height=r.getFloat32(),e.depth=r.getFloat32(),e.position=r.getFloat32Array(3),e.rotation=r.getFloat32Array(3),e.weight=r.getFloat32(),e.positionDamping=r.getFloat32(),e.rotationDamping=r.getFloat32(),e.restitution=r.getFloat32(),e.friction=r.getFloat32(),e.type=r.getUint8(),e},t=n.metadata;t.rigidBodyCount=r.getUint32(),n.rigidBodies=[];for(var i=0;i<t.rigidBodyCount;i++)n.rigidBodies.push(e())}(),function(){var e=function(){var e={};return e.name=r.getTextBuffer(),e.englishName=r.getTextBuffer(),e.type=r.getUint8(),e.rigidBodyIndex1=r.getIndex(n.metadata.rigidBodyIndexSize),e.rigidBodyIndex2=r.getIndex(n.metadata.rigidBodyIndexSize),e.position=r.getFloat32Array(3),e.rotation=r.getFloat32Array(3),e.translationLimitation1=r.getFloat32Array(3),e.translationLimitation2=r.getFloat32Array(3),e.rotationLimitation1=r.getFloat32Array(3),e.rotationLimitation2=r.getFloat32Array(3),e.springPosition=r.getFloat32Array(3),e.springRotation=r.getFloat32Array(3),e},t=n.metadata;t.constraintCount=r.getUint32(),n.constraints=[];for(var i=0;i<t.constraintCount;i++)n.constraints.push(e())}(),t===!0&&this.leftToRightModel(n),n}parseVmd(e,t){var n={},r=new Sl(e);return n.metadata={},n.metadata.coordinateSystem=`left`,function(){var e=n.metadata;if(e.magic=r.getChars(30),e.magic!==`Vocaloid Motion Data 0002`)throw`VMD file magic is not Vocaloid Motion Data 0002, but `+e.magic;e.name=r.getSjisStringsAsUnicode(20)}(),function(){var e=function(){var e={};return e.boneName=r.getSjisStringsAsUnicode(15),e.frameNum=r.getUint32(),e.position=r.getFloat32Array(3),e.rotation=r.getFloat32Array(4),e.interpolation=r.getUint8Array(64),e},t=n.metadata;t.motionCount=r.getUint32(),n.motions=[];for(var i=0;i<t.motionCount;i++)n.motions.push(e())}(),function(){var e=function(){var e={};return e.morphName=r.getSjisStringsAsUnicode(15),e.frameNum=r.getUint32(),e.weight=r.getFloat32(),e},t=n.metadata;t.morphCount=r.getUint32(),n.morphs=[];for(var i=0;i<t.morphCount;i++)n.morphs.push(e())}(),function(){var e=function(){var e={};return e.frameNum=r.getUint32(),e.distance=r.getFloat32(),e.position=r.getFloat32Array(3),e.rotation=r.getFloat32Array(3),e.interpolation=r.getUint8Array(24),e.fov=r.getUint32(),e.perspective=r.getUint8(),e},t=n.metadata;t.cameraCount=r.getUint32(),n.cameras=[];for(var i=0;i<t.cameraCount;i++)n.cameras.push(e())}(),t===!0&&this.leftToRightVmd(n),n}parseVpd(e,t){var n={};n.metadata={},n.metadata.coordinateSystem=`left`,n.bones=[];var r=e.replace(/\/\/\w*(\r|\n|\r\n)/g,``).split(/\r|\n|\r\n/);function i(){throw`the file seems not vpd file.`}function a(){r[0]!==`Vocaloid Pose Data file`&&i()}function o(){r.length<4&&i(),n.metadata.parentFile=r[2],n.metadata.boneCount=parseInt(r[3])}function s(){for(var e=/^\s*(Bone[0-9]+)\s*\{\s*(.*)$/,t=/^\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*;/,a=/^\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*,\s*(-?[0-9]+\.[0-9]+)\s*;/,o=/^\s*}/,s=n.bones,c=null,l=null,u=null,d=4;d<r.length;d++){var f=r[d],p=f.match(e);p!==null&&(c!==null&&i(),c=p[2]),p=f.match(t),p!==null&&(l!==null&&i(),l=[parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])]),p=f.match(a),p!==null&&(u!==null&&i(),u=[parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]),parseFloat(p[4])]),p=f.match(o),p!==null&&((c===null||l===null||u===null)&&i(),s.push({name:c,translation:l,quaternion:u}),c=null,l=null,u=null)}(c!==null||l!==null||u!==null)&&i()}return a(),o(),s(),t===!0&&this.leftToRightVpd(n),n}mergeVmds(e){var t={};t.metadata={},t.metadata.name=e[0].metadata.name,t.metadata.coordinateSystem=e[0].metadata.coordinateSystem,t.metadata.motionCount=0,t.metadata.morphCount=0,t.metadata.cameraCount=0,t.motions=[],t.morphs=[],t.cameras=[];for(var n=0;n<e.length;n++){var r=e[n];t.metadata.motionCount+=r.metadata.motionCount,t.metadata.morphCount+=r.metadata.morphCount,t.metadata.cameraCount+=r.metadata.cameraCount;for(var i=0;i<r.metadata.motionCount;i++)t.motions.push(r.motions[i]);for(var i=0;i<r.metadata.morphCount;i++)t.morphs.push(r.morphs[i]);for(var i=0;i<r.metadata.cameraCount;i++)t.cameras.push(r.cameras[i])}return t}leftToRightModel(e){if(e.metadata.coordinateSystem!==`right`){e.metadata.coordinateSystem=`right`;for(var t=new Cl,n=0;n<e.metadata.vertexCount;n++)t.leftToRightVector3(e.vertices[n].position),t.leftToRightVector3(e.vertices[n].normal);for(var n=0;n<e.metadata.faceCount;n++)t.leftToRightIndexOrder(e.faces[n].indices);for(var n=0;n<e.metadata.boneCount;n++)t.leftToRightVector3(e.bones[n].position);for(var n=0;n<e.metadata.morphCount;n++){var r=e.morphs[n];if(e.metadata.format!==`pmx`||r.type===1)for(var i=0;i<r.elements.length;i++)t.leftToRightVector3(r.elements[i].position)}for(var n=0;n<e.metadata.rigidBodyCount;n++)t.leftToRightVector3(e.rigidBodies[n].position),t.leftToRightEuler(e.rigidBodies[n].rotation);for(var n=0;n<e.metadata.constraintCount;n++)t.leftToRightVector3(e.constraints[n].position),t.leftToRightEuler(e.constraints[n].rotation),t.leftToRightVector3Range(e.constraints[n].translationLimitation1,e.constraints[n].translationLimitation2),t.leftToRightEulerRange(e.constraints[n].rotationLimitation1,e.constraints[n].rotationLimitation2)}}leftToRightVmd(e){if(e.metadata.coordinateSystem!==`right`){e.metadata.coordinateSystem=`right`;for(var t=new Cl,n=0;n<e.metadata.motionCount;n++)t.leftToRightVector3(e.motions[n].position),t.leftToRightQuaternion(e.motions[n].rotation);for(var n=0;n<e.metadata.cameraCount;n++)t.leftToRightVector3(e.cameras[n].position),t.leftToRightEuler(e.cameras[n].rotation)}}leftToRightVpd(e){if(e.metadata.coordinateSystem!==`right`){e.metadata.coordinateSystem=`right`;for(var t=new Cl,n=0;n<e.bones.length;n++)t.leftToRightVector3(e.bones[n].translation),t.leftToRightQuaternion(e.bones[n].quaternion)}}},Tl=class extends va{constructor(e){super(e)}parse(e){function t(e){switch(e.image_type){case d:case h:(e.colormap_length>256||e.colormap_size!==24||e.colormap_type!==1)&&console.error(`THREE.TGALoader: Invalid type colormap data for indexed type.`);break;case f:case m:case g:case _:e.colormap_type&&console.error(`THREE.TGALoader: Invalid type colormap data for colormap type.`);break;case u:console.error(`THREE.TGALoader: No data.`);default:console.error(`THREE.TGALoader: Invalid type "%s".`,e.image_type)}(e.width<=0||e.height<=0)&&console.error(`THREE.TGALoader: Invalid image size.`),e.pixel_size!==8&&e.pixel_size!==16&&e.pixel_size!==24&&e.pixel_size!==32&&console.error(`THREE.TGALoader: Invalid pixel size "%s".`,e.pixel_size)}function n(e,t,n,r,i){let a,o,s=n.pixel_size>>3,c=n.width*n.height*s;if(t&&(o=i.subarray(r,r+=n.colormap_length*(n.colormap_size>>3))),e){a=new Uint8Array(c);let e,t,n,o=0,l=new Uint8Array(s);for(;o<c;)if(e=i[r++],t=(e&127)+1,e&128){for(n=0;n<s;++n)l[n]=i[r++];for(n=0;n<t;++n)a.set(l,o+n*s);o+=s*t}else{for(t*=s,n=0;n<t;++n)a[o+n]=i[r++];o+=t}}else a=i.subarray(r,r+=t?n.width*n.height:c);return{pixel_data:a,palettes:o}}function r(e,t,n,r,i,a,o,s,c){let l=c,u,d=0,f,p,m=E.width;for(p=t;p!==r;p+=n)for(f=i;f!==o;f+=a,d++)u=s[d],e[(f+m*p)*4+3]=255,e[(f+m*p)*4+2]=l[u*3+0],e[(f+m*p)*4+1]=l[u*3+1],e[(f+m*p)*4+0]=l[u*3+2];return e}function i(e,t,n,r,i,a,o,s){let c,l=0,u,d,f=E.width;for(d=t;d!==r;d+=n)for(u=i;u!==o;u+=a,l+=2)c=s[l+0]+(s[l+1]<<8),e[(u+f*d)*4+0]=(c&31744)>>7,e[(u+f*d)*4+1]=(c&992)>>2,e[(u+f*d)*4+2]=(c&31)>>3,e[(u+f*d)*4+3]=c&32768?0:255;return e}function a(e,t,n,r,i,a,o,s){let c=0,l,u,d=E.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=3)e[(l+d*u)*4+3]=255,e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+1]=s[c+1],e[(l+d*u)*4+0]=s[c+2];return e}function o(e,t,n,r,i,a,o,s){let c=0,l,u,d=E.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=4)e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+1]=s[c+1],e[(l+d*u)*4+0]=s[c+2],e[(l+d*u)*4+3]=s[c+3];return e}function s(e,t,n,r,i,a,o,s){let c,l=0,u,d,f=E.width;for(d=t;d!==r;d+=n)for(u=i;u!==o;u+=a,l++)c=s[l],e[(u+f*d)*4+0]=c,e[(u+f*d)*4+1]=c,e[(u+f*d)*4+2]=c,e[(u+f*d)*4+3]=255;return e}function c(e,t,n,r,i,a,o,s){let c=0,l,u,d=E.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=2)e[(l+d*u)*4+0]=s[c+0],e[(l+d*u)*4+1]=s[c+0],e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+3]=s[c+1];return e}function l(e,t,n,l,u){let d,f,p,m,h,g;switch((E.flags&v)>>y){default:case S:d=0,p=1,h=t,f=0,m=1,g=n;break;case b:d=0,p=1,h=t,f=n-1,m=-1,g=-1;break;case C:d=t-1,p=-1,h=-1,f=0,m=1,g=n;break;case x:d=t-1,p=-1,h=-1,f=n-1,m=-1,g=-1}if(k)switch(E.pixel_size){case 8:s(e,f,m,g,d,p,h,l);break;case 16:c(e,f,m,g,d,p,h,l);break;default:console.error(`THREE.TGALoader: Format not supported.`)}else switch(E.pixel_size){case 8:r(e,f,m,g,d,p,h,l,u);break;case 16:i(e,f,m,g,d,p,h,l);break;case 24:a(e,f,m,g,d,p,h,l);break;case 32:o(e,f,m,g,d,p,h,l);break;default:console.error(`THREE.TGALoader: Format not supported.`)}return e}let u=0,d=1,f=2,m=3,h=9,g=10,_=11,v=48,y=4,b=0,x=1,S=2,C=3;e.length<19&&console.error(`THREE.TGALoader: Not enough data to contain header.`);let w=0,T=new Uint8Array(e),E={id_length:T[w++],colormap_type:T[w++],image_type:T[w++],colormap_index:T[w++]|T[w++]<<8,colormap_length:T[w++]|T[w++]<<8,colormap_size:T[w++],origin:[T[w++]|T[w++]<<8,T[w++]|T[w++]<<8],width:T[w++]|T[w++]<<8,height:T[w++]|T[w++]<<8,pixel_size:T[w++],flags:T[w++]};t(E),E.id_length+w>e.length&&console.error(`THREE.TGALoader: No data.`),w+=E.id_length;let D=!1,O=!1,k=!1;switch(E.image_type){case 9:D=!0,O=!0;break;case 1:O=!0;break;case 10:D=!0;break;case 2:break;case 11:D=!0,k=!0;break;case 3:k=!0}let A=new Uint8Array(E.width*E.height*4),j=n(D,O,E,w,T);return l(A,E.width,E.height,j.pixel_data,j.palettes),{data:A,width:E.width,height:E.height,flipY:!0,generateMipmaps:!0,minFilter:p}}},El=class extends fa{constructor(e){super(e),this.loader=new ha(this.manager),this.parser=null,this.meshBuilder=new Ol(this.manager),this.animationBuilder=new Ml}setAnimationPath(e){return this.animationPath=e,this}load(e,t,n,r){let i=this.meshBuilder.setCrossOrigin(this.crossOrigin),a;a=this.resourcePath===``?this.path===``?La.extractUrlBase(e):this.path:this.resourcePath;let o=this._extractExtension(e).toLowerCase();if(o!==`pmd`&&o!==`pmx`){r&&r(Error(`THREE.MMDLoader: Unknown model file extension .`+o+`.`));return}this[o===`pmd`?`loadPMD`:`loadPMX`](e,function(e){t(i.build(e,a,n,r))},n,r)}loadAnimation(e,t,n,r,i){let a=this.animationBuilder;this.loadVMD(e,function(e){n(t.isCamera?a.buildCameraAnimation(e):a.build(e,t))},r,i)}loadWithAnimation(e,t,n,r,i){let a=this;this.load(e,function(e){a.loadAnimation(t,e,function(t){n({mesh:e,animation:t})},r,i)},r,i)}loadPMD(e,t,n,r){let i=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType(`arraybuffer`).setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,function(e){t(i.parsePmd(e,!0))},n,r)}loadPMX(e,t,n,r){let i=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType(`arraybuffer`).setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,function(e){t(i.parsePmx(e,!0))},n,r)}loadVMD(e,t,n,r){let i=Array.isArray(e)?e:[e],a=[],o=i.length,s=this._getParser();this.loader.setMimeType(void 0).setPath(this.animationPath).setResponseType(`arraybuffer`).setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials);for(let e=0,c=i.length;e<c;e++)this.loader.load(i[e],function(e){a.push(s.parseVmd(e,!0)),a.length===o&&t(s.mergeVmds(a))},n,r)}loadVPD(e,t,n,r,i){let a=this._getParser();this.loader.setMimeType(t?void 0:`text/plain; charset=shift_jis`).setPath(this.animationPath).setResponseType(`text`).setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,function(e){n(a.parseVpd(e,!0))},r,i)}_extractExtension(e){let t=e.lastIndexOf(`.`);return t<0?``:e.slice(t+1)}_getParser(){return this.parser===null&&(this.parser=new wl),this.parser}},Dl=[`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=`,`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=`],Ol=class{constructor(e){this.crossOrigin=`anonymous`,this.geometryBuilder=new Al,this.materialBuilder=new jl(e)}setCrossOrigin(e){return this.crossOrigin=e,this}build(e,t,n,r){let i=this.geometryBuilder.build(e),a=new li(i,this.materialBuilder.setCrossOrigin(this.crossOrigin).setResourcePath(t).build(e,i,n,r)),o=new mi(kl(a));return a.bind(o),a}};function kl(e){let t=e.geometry,n=[];if(t&&t.bones!==void 0){for(let e=0,r=t.bones.length;e<r;e++){let r=t.bones[e],i=new ui;n.push(i),i.name=r.name,i.position.fromArray(r.pos),i.quaternion.fromArray(r.rotq),r.scl!==void 0&&i.scale.fromArray(r.scl)}for(let r=0,i=t.bones.length;r<i;r++){let i=t.bones[r];i.parent!==-1&&i.parent!==null&&n[i.parent]!==void 0?n[i.parent].add(n[r]):e.add(n[r])}}return e.updateMatrixWorld(!0),n}var Al=class{build(e){let t=[],n=[],r=[],i=[],a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=[],m=[],h=0,g={};for(let i=0;i<e.metadata.vertexCount;i++){let a=e.vertices[i];for(let e=0,n=a.position.length;e<n;e++)t.push(a.position[e]);for(let e=0,t=a.normal.length;e<t;e++)r.push(a.normal[e]);for(let e=0,t=a.uv.length;e<t;e++)n.push(a.uv[e]);for(let e=0;e<4;e++)s.push(a.skinIndices.length-1>=e?a.skinIndices[e]:0);for(let e=0;e<4;e++)c.push(a.skinWeights.length-1>=e?a.skinWeights[e]:0)}for(let t=0;t<e.metadata.faceCount;t++){let n=e.faces[t];for(let e=0,t=n.indices.length;e<t;e++)i.push(n.indices[e])}for(let t=0;t<e.metadata.materialCount;t++){let n=e.materials[t];a.push({offset:h*3,count:n.faceCount*3}),h+=n.faceCount}for(let t=0;t<e.metadata.rigidBodyCount;t++){let n=e.rigidBodies[t],r=g[n.boneIndex];r=r===void 0?n.type:Math.max(n.type,r),g[n.boneIndex]=r}for(let t=0;t<e.metadata.boneCount;t++){let n=e.bones[t],r={index:t,transformationClass:n.transformationClass,parent:n.parentIndex,name:n.name,pos:n.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:g[t]===void 0?-1:g[t]};r.parent!==-1&&(r.pos[0]-=e.bones[r.parent].position[0],r.pos[1]-=e.bones[r.parent].position[1],r.pos[2]-=e.bones[r.parent].position[2]),o.push(r)}if(e.metadata.format===`pmd`)for(let t=0;t<e.metadata.ikCount;t++){let n=e.iks[t],r={target:n.target,effector:n.effector,iteration:n.iteration,maxAngle:n.maxAngle*4,links:[]};for(let t=0,i=n.links.length;t<i;t++){let i={};i.index=n.links[t].index,i.enabled=!0,e.bones[i.index].name.indexOf(`ひざ`)>=0&&(i.limitation=new K(1,0,0)),r.links.push(i)}d.push(r)}else for(let t=0;t<e.metadata.boneCount;t++){let n=e.bones[t].ik;if(n===void 0)continue;let r={target:t,effector:n.effector,iteration:n.iteration,maxAngle:n.maxAngle,links:[]};for(let e=0,t=n.links.length;e<t;e++){let t={};if(t.index=n.links[e].index,t.enabled=!0,n.links[e].angleLimitation===1){let r=n.links[e].lowerLimitationAngle,i=n.links[e].upperLimitationAngle,a=-i[0],o=-i[1];i[0]=-r[0],i[1]=-r[1],r[0]=a,r[1]=o,t.rotationMin=new K().fromArray(r),t.rotationMax=new K().fromArray(i)}r.links.push(t)}d.push(r),o[t].ik=r}if(e.metadata.format===`pmx`){let t=function(e){e.param&&(f.push(e.param),o[e.param.index].grant=e.param),e.visited=!0;for(let n=0,r=e.children.length;n<r;n++){let r=e.children[n];r.visited||t(r)}},n={};for(let t=0;t<e.metadata.boneCount;t++){let r=e.bones[t],i=r.grant;if(i===void 0)continue;let a={index:t,parentIndex:i.parentIndex,ratio:i.ratio,isLocal:i.isLocal,affectRotation:i.affectRotation,affectPosition:i.affectPosition,transformationClass:r.transformationClass};n[t]={parent:null,children:[],param:a,visited:!1}}let r={parent:null,children:[],param:null,visited:!1};for(let e in n){let t=n[e],i=n[t.parentIndex]||r;t.parent=i,i.children.push(t)}t(r)}function _(t,n,r){for(let i=0;i<n.elementCount;i++){let a=n.elements[i],o;o=e.metadata.format===`pmd`?e.morphs[0].elements[a.index].index:a.index,t.array[o*3+0]+=a.position[0]*r,t.array[o*3+1]+=a.position[1]*r,t.array[o*3+2]+=a.position[2]*r}}for(let n=0;n<e.metadata.morphCount;n++){let r=e.morphs[n],i={name:r.name},a=new hr(e.metadata.vertexCount*3,3);a.name=r.name;for(let n=0;n<e.metadata.vertexCount*3;n++)a.array[n]=t[n];if(e.metadata.format===`pmd`)n!==0&&_(a,r,1);else if(r.type===0)for(let t=0;t<r.elementCount;t++){let n=e.morphs[r.elements[t].index],i=r.elements[t].ratio;n.type===1&&_(a,n,i)}else r.type===1?_(a,r,1):r.type===2||r.type===3||r.type===4||r.type===5||r.type===6||r.type===7||r.type;l.push(i),u.push(a)}for(let t=0;t<e.metadata.rigidBodyCount;t++){let n=e.rigidBodies[t],r={};for(let e in n)r[e]=n[e];if(e.metadata.format===`pmx`&&r.boneIndex!==-1){let t=e.bones[r.boneIndex];r.position[0]-=t.position[0],r.position[1]-=t.position[1],r.position[2]-=t.position[2]}p.push(r)}for(let t=0;t<e.metadata.constraintCount;t++){let n=e.constraints[t],r={};for(let e in n)r[e]=n[e];let i=p[r.rigidBodyIndex1],a=p[r.rigidBodyIndex2];i.type!==0&&a.type===2&&i.boneIndex!==-1&&a.boneIndex!==-1&&e.bones[a.boneIndex].parentIndex===i.boneIndex&&(a.type=1),m.push(r)}let v=new Dr;v.setAttribute(`position`,new hr(t,3)),v.setAttribute(`normal`,new hr(r,3)),v.setAttribute(`uv`,new hr(n,2)),v.setAttribute(`skinIndex`,new pr(s,4)),v.setAttribute(`skinWeight`,new hr(c,4)),v.setIndex(i);for(let e=0,t=a.length;e<t;e++)v.addGroup(a[e].offset,a[e].count,e);return v.bones=o,v.morphTargets=l,v.morphAttributes.position=u,v.morphTargetsRelative=!1,v.userData.MMD={bones:o,iks:d,grants:f,rigidBodies:p,constraints:m,format:e.metadata.format},v.computeBoundingSphere(),v}},jl=class{constructor(e){this.manager=e,this.textureLoader=new ya(this.manager),this.tgaLoader=null,this.crossOrigin=`anonymous`,this.resourcePath=void 0}setCrossOrigin(e){return this.crossOrigin=e,this}setResourcePath(e){return this.resourcePath=e,this}build(e,t){let n=[],r={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(let i=0;i<e.metadata.materialCount;i++){let a=e.materials[i],o={userData:{}};if(a.name!==void 0&&(o.name=a.name),o.color=new Z().fromArray(a.diffuse),o.opacity=a.diffuse[3],o.emissive=new Z().fromArray(a.ambient),o.transparent=o.opacity!==1,o.skinning=t.bones.length>0,o.morphTargets=t.morphTargets.length>0,o.fog=!0,o.blending=5,o.blendSrc=204,o.blendDst=205,o.blendSrcAlpha=204,o.blendDstAlpha=206,o.side=e.metadata.format===`pmx`&&(a.flag&1)==1?2:o.opacity===1?0:2,e.metadata.format===`pmd`){if(a.fileName){let e=a.fileName.split(`*`);if(o.map=this._loadTexture(e[0],r),e.length>1){let t=e[1].slice(-4).toLowerCase();o.envMap=this._loadTexture(e[1],r),o.combine=t===`.sph`?0:2}}let t=a.toonIndex===-1?`toon00.bmp`:e.toonTextures[a.toonIndex].fileName;o.gradientMap=this._loadTexture(t,r,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(t)}),o.userData.outlineParameters={thickness:a.edgeFlag===1?.003:0,color:[0,0,0],alpha:1,visible:a.edgeFlag===1}}else{a.textureIndex!==-1&&(o.map=this._loadTexture(e.textures[a.textureIndex],r)),a.envTextureIndex!==-1&&(a.envFlag===1||a.envFlag==2)&&(o.envMap=this._loadTexture(e.textures[a.envTextureIndex],r),o.combine=a.envFlag===1?0:2);let t,n;a.toonIndex===-1||a.toonFlag!==0?(t=`toon`+(`0`+(a.toonIndex+1)).slice(-2)+`.bmp`,n=!0):(t=e.textures[a.toonIndex],n=!1),o.gradientMap=this._loadTexture(t,r,{isToonTexture:!0,isDefaultToonTexture:n}),o.userData.outlineParameters={thickness:a.edgeSize/300,color:a.edgeColor.slice(0,3),alpha:a.edgeColor[3],visible:!!(a.flag&16)&&a.edgeSize>0}}o.map!==void 0&&(o.transparent||this._checkImageTransparency(o.map,t,i),o.emissive.multiplyScalar(.2)),n.push(new Fi(o))}if(e.metadata.format===`pmx`){let t=function(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n];if(r.index===-1)continue;let i=t[r.index];i.opacity!==r.diffuse[3]&&(i.transparent=!0)}};for(let r=0,i=e.morphs.length;r<i;r++){let i=e.morphs[r],a=i.elements;if(i.type===0)for(let r=0,i=a.length;r<i;r++){let i=e.morphs[a[r].index];i.type===8&&t(i.elements,n)}else i.type===8&&t(a,n)}}return n}_getTGALoader(){if(this.tgaLoader===null){if(Tl===void 0)throw Error(`THREE.MMDLoader: Import TGALoader`);this.tgaLoader=new Tl(this.manager)}return this.tgaLoader}_isDefaultToonTexture(e){return e.length===10&&/toon(10|0[0-9])\.bmp/.test(e)}_loadTexture(e,t,n,r,i){n||={};let o=this,s;if(n.isDefaultToonTexture===!0){let t;try{t=parseInt(e.match(/toon([0-9]{2})\.bmp$/)[1])}catch{console.warn(`THREE.MMDLoader: `+e+` seems like a not right default texture path. Using toon00.bmp instead.`),t=0}s=Dl[t]}else s=this.resourcePath+e;if(t[s]!==void 0)return t[s];let l=this.manager.getHandler(s);l===null&&(l=e.slice(-4).toLowerCase()===`.tga`?this._getTGALoader():this.textureLoader);let u=l.load(s,function(e){n.isToonTexture===!0&&(e.image=o._getRotatedImage(e.image),e.magFilter=c,e.minFilter=c),e.flipY=!1,e.wrapS=a,e.wrapT=a;for(let e=0;e<u.readyCallbacks.length;e++)u.readyCallbacks[e](u);delete u.readyCallbacks},r,i);return u.readyCallbacks=[],t[s]=u,u}_getRotatedImage(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`),r=e.width,i=e.height;return t.width=r,t.height=i,n.clearRect(0,0,r,i),n.translate(r/2,i/2),n.rotate(.5*Math.PI),n.translate(-r/2,-i/2),n.drawImage(e,0,0),n.getImageData(0,0,r,i)}_checkImageTransparency(e,t,n){e.readyCallbacks.push(function(r){function i(e){let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}function a(e,t,n){let r=e.width,i=e.height;if(e.data.length/(r*i)!==4)return!1;for(let r=0;r<n.length;r+=3){let i={x:0,y:0};for(let a=0;a<3;a++){let s=n[r*3+a],c={x:t[s*2+0],y:t[s*2+1]};if(o(e,c)<253)return!0;i.x+=c.x,i.y+=c.y}if(i.x/=3,i.y/=3,o(e,i)<253)return!0}return!1}function o(e,t){let n=e.width,r=e.height,i=Math.round(t.x*n)%n,a=Math.round(t.y*r)%r;i<0&&(i+=n),a<0&&(a+=r);let o=a*n+i;return e.data[o*4+3]}let s=r.image.data===void 0?i(r.image):r.image,c=t.groups[n];a(s,t.attributes.uv.array,t.index.array.slice(c.start,c.start+c.count))&&(e.transparent=!0)})}},Ml=class{build(e,t){let n=this.buildSkeletalAnimation(e,t).tracks,r=this.buildMorphAnimation(e,t).tracks;for(let e=0,t=r.length;e<t;e++)n.push(r[e]);return new oa(``,-1,n)}buildSkeletalAnimation(e,t){function n(e,t,n){e.push(t[n+0]/127),e.push(t[n+8]/127),e.push(t[n+4]/127),e.push(t[n+12]/127)}let r=[],i={},a=t.skeleton.bones,o={};for(let e=0,t=a.length;e<t;e++)o[a[e].name]=!0;for(let t=0;t<e.metadata.motionCount;t++){let n=e.motions[t],r=n.boneName;o[r]!==void 0&&(i[r]=i[r]||[],i[r].push(n))}for(let e in i){let a=i[e];a.sort(function(e,t){return e.frameNum-t.frameNum});let o=[],s=[],c=[],l=[],u=[],d=t.skeleton.getBoneByName(e).position.toArray();for(let e=0,t=a.length;e<t;e++){let t=a[e].frameNum/30,r=a[e].position,i=a[e].rotation,f=a[e].interpolation;o.push(t);for(let e=0;e<3;e++)s.push(d[e]+r[e]);for(let e=0;e<4;e++)c.push(i[e]);for(let e=0;e<3;e++)n(l,f,e);n(u,f,3)}let f=`.bones[`+e+`]`;r.push(this._createTrack(f+`.position`,aa,o,s,l)),r.push(this._createTrack(f+`.quaternion`,ra,o,c,u))}return new oa(``,-1,r)}buildMorphAnimation(e,t){let n=[],r={},i=t.morphTargetDictionary;for(let t=0;t<e.metadata.morphCount;t++){let n=e.morphs[t],a=n.morphName;i[a]!==void 0&&(r[a]=r[a]||[],r[a].push(n))}for(let e in r){let t=r[e];t.sort(function(e,t){return e.frameNum-t.frameNum});let a=[],o=[];for(let e=0,n=t.length;e<n;e++)a.push(t[e].frameNum/30),o.push(t[e].weight);n.push(new ta(`.morphTargetInfluences[`+i[e]+`]`,a,o))}return new oa(``,-1,n)}buildCameraAnimation(e){function t(e,t){e.push(t.x),e.push(t.y),e.push(t.z)}function n(e,t){e.push(t.x),e.push(t.y),e.push(t.z),e.push(t.w)}function r(e,t,n){e.push(t[n*4+0]/127),e.push(t[n*4+1]/127),e.push(t[n*4+2]/127),e.push(t[n*4+3]/127)}let i=e.cameras===void 0?[]:e.cameras.slice();i.sort(function(e,t){return e.frameNum-t.frameNum});let a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=[],m=new At,h=new sn,g=new K,_=new K;for(let e=0,v=i.length;e<v;e++){let v=i[e],y=v.frameNum/30,b=v.position,x=v.rotation,S=v.distance,C=v.fov,w=v.interpolation;a.push(y),g.set(0,0,-S),_.set(b[0],b[1],b[2]),h.set(-x[0],-x[1],-x[2]),m.setFromEuler(h),g.add(_),g.applyQuaternion(m),t(o,_),n(s,m),t(c,g),l.push(C);for(let e=0;e<3;e++)r(u,w,e);r(d,w,3);for(let e=0;e<3;e++)r(f,w,4);r(p,w,5)}let v=[];return v.push(this._createTrack(`target.position`,aa,a,o,u)),v.push(this._createTrack(`.quaternion`,ra,a,s,d)),v.push(this._createTrack(`.position`,aa,a,c,f)),v.push(this._createTrack(`.fov`,ta,a,l,p)),new oa(``,-1,v)}_createTrack(e,t,n,r,i){if(n.length>2){n=n.slice(),r=r.slice(),i=i.slice();let e=r.length/n.length,t=i.length/n.length,a=1;for(let o=2,s=n.length;o<s;o++){for(let t=0;t<e;t++)if(r[a*e+t]!==r[(a-1)*e+t]||r[a*e+t]!==r[o*e+t]){a++;break}if(o>a){n[a]=n[o];for(let t=0;t<e;t++)r[a*e+t]=r[o*e+t];for(let e=0;e<t;e++)i[a*t+e]=i[o*t+e]}}n.length=a+1,r.length=(a+1)*e,i.length=(a+1)*t}let a=new t(e,n,r);return a.createInterpolant=function(e){return new Nl(this.times,this.values,this.getValueSize(),e,new Float32Array(i))},a}},Nl=class extends Ui{constructor(e,t,n,r,i){super(e,t,n,r),this.interpolationParams=i}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=this.interpolationParams,c=e*o,l=c-o,u=r-t<.05?0:(n-t)/(r-t);if(o===4){let t=s[e*4+0],n=s[e*4+1],r=s[e*4+2],o=s[e*4+3],d=this._calculate(t,n,r,o,u);At.slerpFlat(i,0,a,l,a,c,d)}else if(o===3)for(let t=0;t!==o;++t){let n=s[e*12+t*4+0],r=s[e*12+t*4+1],o=s[e*12+t*4+2],d=s[e*12+t*4+3],f=this._calculate(n,r,o,d,u);i[t]=a[l+t]*(1-f)+a[c+t]*f}else{let t=s[e*4+0],n=s[e*4+1],r=s[e*4+2],o=s[e*4+3],d=this._calculate(t,n,r,o,u);i[0]=a[l]*(1-d)+a[c]*d}return i}_calculate(e,t,n,r,i){let a=.5,o=a,s=1-o,c=Math,l,u,d;for(let n=0;n<15;n++){l=3*s*s*o,u=3*s*o*o,d=o*o*o;let n=l*e+u*t+d-i;if(c.abs(n)<1e-5)break;a/=2,o+=n<0?a:-a,s=1-o}return l*n+u*r+d}},Pl=n(),Fl=20;function Il(e,t){let n=e.morphTargetDictionary||{},r=t.find(e=>Object.prototype.hasOwnProperty.call(n,e));return r?n[r]:void 0}var Ll=[`まばたき`,`眨眼`,`blink`,`瞬き`,`目閉じ`,`闭眼`],Rl={a:[`あ`,`a`,`口_あ`,`mouth_a`,`张嘴`,`张口`],i:[`い`,`i`,`口_い`,`mouth_i`,`咪嘴`],u:[`う`,`u`,`口_う`,`mouth_u`,`嘟嘴`],e:[`え`,`e`,`口_え`,`mouth_e`],o:[`お`,`o`,`口_お`,`mouth_o`,`哦`]},zl={a:[2,9],i:[21,42],u:[2,6],e:[5,21],o:[3,10]};function Bl(e,t){let n=0;for(let r=t[0];r<=Math.min(t[1],e.length-1);r+=1)n+=e[r];return n/Math.max(1,t[1]-t[0]+1)/255}function Vl({model:t,enabled:n,speaking:i,audioUrl:a}){let o=(0,r.useRef)(null),s=(0,r.useRef)(i),[c,l]=(0,r.useState)(`待机`);return(0,r.useEffect)(()=>{s.current=i},[i]),(0,r.useEffect)(()=>{if(!n||!t||!o.current)return;let r=!1,i=o.current,a=new Nn,c=new Na(30,1,.1,1e3),u=new bl({antialias:!0,alpha:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),u.outputColorSpace=Ve,i.replaceChildren(u.domElement);let d=new xa(16050687,2168621,2.4),f=new Ia(16769218,2.2);f.position.set(-8,18,16);let p=new Ia(8369407,1.1);p.position.set(10,6,-12),a.add(d,f,p);let m=new El,h,g=0,_=performance.now()+1800,v=0,y=!1,b=new Uint8Array(256),x=new eo,S=()=>{let e=i.clientWidth||320,t=i.clientHeight||460;c.aspect=e/t,c.updateProjectionMatrix(),u.setSize(e,t,!1)},C=new ResizeObserver(S);C.observe(i),S(),l(`加载模型…`),m.load(t.file,e=>{if(r)return;h=e;let t=new Jn().setFromObject(e).getSize(new K),n=Fl/Math.max(t.y,.001);e.scale.setScalar(n),e.updateMatrixWorld(!0);let i=new Jn().setFromObject(e),o=i.getCenter(new K);e.position.x-=o.x,e.position.y-=i.min.y,e.position.z-=o.z,a.add(e);let s=Fl*.93,u=Fl/2/Math.tan(kt.degToRad(c.fov/2))*1.55;c.position.set(0,s*.82,u),c.lookAt(0,Fl*.56,0),l(`已连接舞台`)},void 0,()=>{r||l(`模型加载失败`)});let w=()=>{if(r)return;g=requestAnimationFrame(w);let t=x.getElapsedTime();if(h){if(!y){y=!0;let e=Object.keys(h.morphTargetDictionary||{});e.length&&console.info(`[MMDStage] morphs:`,e.join(`, `))}let n=h.skeleton?.getBoneByName(`上半身`)||h.skeleton?.getBoneByName(`上半身2`)||h.skeleton?.getBoneByName(`UpperBody`);n&&(n.rotation.z=Math.sin(t*1.35)*.012);let r=h.skeleton?.getBoneByName(`頭`)||h.skeleton?.getBoneByName(`Head`);r&&(r.rotation.z=Math.sin(t*.9)*.02+(s.current?Math.sin(t*2.2)*.03:0)),h.rotation.y=Math.sin(t*.35)*.035;let i=h.morphTargetInfluences;if(i){let n=Il(h,Ll);n!==void 0&&(performance.now()>_&&(v=performance.now()+130,_=performance.now()+3500+Math.random()*2600),i[n]=Math.max(0,Math.min(1,(v-performance.now())/65)));let r=e.analyser,a={};for(let[e,t]of Object.entries(Rl))a[e]=Il(h,t);let o=Object.values(a).some(e=>e!==void 0);if(r&&o){r.getByteFrequencyData(b);let e=Bl(b,[2,43]);if(e>.02){let t=`a`,n=-1;for(let[r,i]of Object.entries(zl)){let a=Bl(b,i)/e;a>n&&(n=a,t=r)}let r=Math.min(1,e*2.4);for(let[e,n]of Object.entries(a)){if(n===void 0)continue;let a=e===t?r:r*.06;i[n]+=(a-i[n])*.35}}else for(let e of Object.values(a))e!==void 0&&(i[e]*=.8)}else if(o&&s.current){let e=a.a;if(e!==void 0){let n=.2+(Math.sin(t*9)+1)*.12+Math.random()*.08;i[e]+=(n-i[e])*.25}}else if(o)for(let e of Object.values(a))e!==void 0&&(i[e]*=.85)}}u.render(a,c)};return w(),()=>{r=!0,cancelAnimationFrame(g),C.disconnect(),a.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&t.material.dispose()}),u.dispose(),i.replaceChildren()}},[n,t?.id,t?.file]),n?t?(0,Pl.jsxs)(`div`,{className:`mmd-stage-wrap`,children:[(0,Pl.jsx)(`div`,{ref:o,className:`mmd-stage`,"aria-label":`${t.name} MMD 舞台`}),(0,Pl.jsx)(`div`,{className:`mmd-stage-floor`}),(0,Pl.jsxs)(`div`,{className:`mmd-stage-status`,children:[(0,Pl.jsx)(`i`,{className:i?`speaking`:``}),i?`正在说话`:c,a?` · 口型同步`:``]})]}):(0,Pl.jsx)(`div`,{className:`mmd-stage mmd-stage-empty`,children:(0,Pl.jsx)(`span`,{children:`请在角色设置中绑定 MMD 模型`})}):(0,Pl.jsx)(`div`,{className:`mmd-stage mmd-stage-off`,children:(0,Pl.jsx)(`span`,{children:`舞台已关闭`})})}export{Vl as default};