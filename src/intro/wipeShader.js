export const wipeVertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const wipeFragmentShader = `
  uniform sampler2D uFrame;
  uniform vec2 uResolution;
  uniform vec2 uFrameResolution;
  uniform float uProgress;
  varying vec2 vUv;

  void main() {
    float screenAspect = uResolution.x / uResolution.y;
    float frameAspect = uFrameResolution.x / uFrameResolution.y;
    vec2 sampleUv = vUv;

    if (screenAspect > frameAspect) {
      sampleUv.y = (sampleUv.y - 0.5) * (frameAspect / screenAspect) + 0.5;
    } else {
      sampleUv.x = (sampleUv.x - 0.5) * (screenAspect / frameAspect) + 0.5;
    }

    vec4 frame = texture2D(uFrame, sampleUv);
    float diagonal = (vUv.x + vUv.y) * 0.5;
    float videoCoverage = smoothstep(uProgress - 0.055, uProgress + 0.055, diagonal);

    if (videoCoverage < 0.01) discard;

    gl_FragColor = vec4(frame.rgb, videoCoverage);
  }
`;
