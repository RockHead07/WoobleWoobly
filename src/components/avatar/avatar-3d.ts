import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function init3DAvatar(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const canvasContainer = container.querySelector<HTMLElement>('[data-avatar-canvas]');
  const speechBubble = container.querySelector<HTMLElement>('[data-speech-bubble]');
  const speechText = container.querySelector<HTMLElement>('[data-speech-text]');
  const speechEmoji = container.querySelector<HTMLElement>('[data-speech-emoji]');
  const avatarWrapper = container.querySelector<HTMLElement>('[data-avatar-head]');

  if (!canvasContainer || !avatarWrapper) return;

  // Quotes on click
  const chibiQuotes = [
    { text: "Hai! Semangat ya! ✨", emoji: "(=^･ω･^=)" },
    { text: "Kamu ngeklik aku! (≧◡≦)", emoji: "💖" },
    { text: "Looking sharp today!", emoji: "👀" },
    { text: "Explore the links! 🚀", emoji: "(★ω★)" },
    { text: "Wooble Woobly~ ♪", emoji: "(´｡• ᵕ •｡`)" },
    { text: "Jangan lupa senyum! 😊", emoji: "⭐" },
  ];
  let quoteIndex = 0;

  // Setup Three.js Scene
  const width = canvasContainer.clientWidth || 96;
  const height = canvasContainer.clientHeight || 96;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0.1, 2.5);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  canvasContainer.innerHTML = '';
  canvasContainer.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(2, 4, 3);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xa78bfa, 1.4);
  fillLight.position.set(-3, 2, -2);
  scene.add(fillLight);

  let mixer: THREE.AnimationMixer | null = null;
  let model: THREE.Group | null = null;
  let idleAction: THREE.AnimationAction | null = null;
  let walkAction: THREE.AnimationAction | null = null;

  // Target mouse orientation
  let targetRotationY = 0;
  let targetRotationX = 0;

  // Load Model
  const loader = new GLTFLoader();
  loader.load(
    '/avatar/smol_calli.glb',
    (gltf) => {
      model = gltf.scene;

      // Center model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1.6 / (maxDim || 1);
      model.scale.setScalar(scale);

      model.position.x = -center.x * scale;
      model.position.y = -center.y * scale - 0.1;
      model.position.z = -center.z * scale;

      scene.add(model);

      // Setup animations
      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(model);

        const idleClip = gltf.animations.find(a => a.name.toLowerCase().includes('idle')) || gltf.animations[0];
        const walkClip = gltf.animations.find(a => a.name.toLowerCase().includes('walk')) || gltf.animations[1] || idleClip;

        if (idleClip) {
          idleAction = mixer.clipAction(idleClip);
          idleAction.play();
        }
        if (walkClip) {
          walkAction = mixer.clipAction(walkClip);
        }
      }
    },
    undefined,
    (err) => {
      console.warn('Could not load 3D avatar:', err);
    }
  );

  // Floating heart effect on click
  const spawnHeartParticle = () => {
    const rect = avatarWrapper.getBoundingClientRect();
    const heart = document.createElement('div');
    heart.className = 'pointer-events-none fixed z-50 text-base sm:text-lg animate-fade-up select-none';
    heart.style.left = `${rect.left + rect.width / 2 - 8 + (Math.random() * 20 - 10)}px`;
    heart.style.top = `${rect.top - 10}px`;
    heart.innerText = ['💖', '✨', '⭐', '🌸', '💫'][Math.floor(Math.random() * 5)];
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);
  };

  // Click handler
  avatarWrapper.addEventListener('click', () => {
    quoteIndex = (quoteIndex + 1) % chibiQuotes.length;
    if (speechText && speechEmoji) {
      speechText.innerText = chibiQuotes[quoteIndex].text;
      speechEmoji.innerText = chibiQuotes[quoteIndex].emoji;
    }

    if (speechBubble) {
      speechBubble.classList.remove('scale-100');
      speechBubble.classList.add('scale-110');
      setTimeout(() => speechBubble.classList.remove('scale-110'), 250);
    }

    spawnHeartParticle();

    // Play action animation if available
    if (walkAction && idleAction) {
      walkAction.reset().fadeIn(0.2).play();
      idleAction.fadeOut(0.2);

      setTimeout(() => {
        if (idleAction && walkAction) {
          idleAction.reset().fadeIn(0.3).play();
          walkAction.fadeOut(0.3);
        }
      }, 2000);
    }
  });

  // Track cursor
  window.addEventListener('mousemove', (e) => {
    const rect = canvasContainer.getBoundingClientRect();
    const avatarCenterX = rect.left + rect.width / 2;
    const avatarCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - avatarCenterX;
    const dy = e.clientY - avatarCenterY;

    targetRotationY = Math.max(Math.min(dx * 0.0012, 0.6), -0.6);
    targetRotationX = Math.max(Math.min(dy * 0.0008, 0.4), -0.4);
  }, { passive: true });

  // Render loop
  const clock = new THREE.Clock();
  let animId: number;

  const animate = () => {
    const delta = clock.getDelta();

    if (mixer) {
      mixer.update(delta);
    }

    if (model) {
      model.rotation.y += (targetRotationY - model.rotation.y) * 0.1;
      model.rotation.x += (targetRotationX - model.rotation.x) * 0.1;
    }

    renderer.render(scene, camera);
    animId = requestAnimationFrame(animate);
  };

  animate();

  // Resize handler
  const onResize = () => {
    const newW = canvasContainer.clientWidth || 96;
    const newH = canvasContainer.clientHeight || 96;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  };

  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
  };
}
