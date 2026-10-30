import {
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  VideoTexture,
  WebGLRenderer,
} from "three";
import { wipeFragmentShader, wipeVertexShader } from "./wipeShader.js";

const TRANSITION_DURATION = 1550;
const MAX_PIXEL_RATIO = 1.5;

function createFrameTexture(video) {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.videoWidth > 0) {
    const texture = new VideoTexture(video);
    texture.needsUpdate = true;
    texture.colorSpace = SRGBColorSpace;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    return Promise.resolve({
      texture,
      width: video.videoWidth,
      height: video.videoHeight,
    });
  }

  return new TextureLoader().loadAsync(video.poster).then((texture) => {
    texture.colorSpace = SRGBColorSpace;
    return {
      texture,
      width: texture.image.width,
      height: texture.image.height,
    };
  });
}

function easeInOut(value) {
  return value * value * (3 - 2 * value);
}

export async function playDiagonalWipe(video, onStart) {
  const frame = await createFrameTexture(video);
  let renderer;

  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
  } catch (error) {
    frame.texture.dispose();
    throw error;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO));
  renderer.domElement.className = "intro-wipe-canvas";
  renderer.domElement.setAttribute("aria-hidden", "true");

  let texture;
  let frameId = 0;
  let disposed = false;
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const geometry = new PlaneGeometry(2, 2);
  texture = frame.texture;

  const material = new ShaderMaterial({
    uniforms: {
      uFrame: { value: texture },
      uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
      uFrameResolution: { value: new Vector2(frame.width, frame.height) },
      uProgress: { value: 0 },
    },
    vertexShader: wipeVertexShader,
    fragmentShader: wipeFragmentShader,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });

  scene.add(new Mesh(geometry, material));

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resize);
    geometry.dispose();
    material.dispose();
    texture?.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  }

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", resize);
  try {
    resize();
    document.body.append(renderer.domElement);
    onStart();
  } catch (error) {
    dispose();
    throw error;
  }

  return new Promise((resolve, reject) => {
    const startedAt = performance.now();

    function renderFrame(now) {
      if (disposed) return;

      const progress = Math.min((now - startedAt) / TRANSITION_DURATION, 1);
      material.uniforms.uProgress.value = easeInOut(progress);

      try {
        renderer.render(scene, camera);
      } catch (error) {
        dispose();
        reject(error);
        return;
      }

      if (progress === 1) {
        dispose();
        resolve();
        return;
      }

      frameId = requestAnimationFrame(renderFrame);
    }

    frameId = requestAnimationFrame(renderFrame);
  }).catch((error) => {
    dispose();
    throw error;
  });
}
