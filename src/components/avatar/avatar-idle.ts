export function initAvatar(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const leftPupil = container.querySelector<HTMLElement>('[data-pupil="left"]');
  const rightPupil = container.querySelector<HTMLElement>('[data-pupil="right"]');
  const leftEye = container.querySelector<HTMLElement>('[data-eye="left"]');
  const rightEye = container.querySelector<HTMLElement>('[data-eye="right"]');
  const avatarWrapper = container.querySelector<HTMLElement>('[data-avatar-head]');
  const speechBubble = container.querySelector<HTMLElement>('[data-speech-bubble]');
  const speechText = container.querySelector<HTMLElement>('[data-speech-text]');
  const speechEmoji = container.querySelector<HTMLElement>('[data-speech-emoji]');
  const eyelids = container.querySelectorAll<HTMLElement>('[data-eyelid]');

  if (!leftPupil || !rightPupil || !leftEye || !rightEye || !avatarWrapper) return;

  const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const MAX_RADIUS = 7;

  // Kawaii phrases on click/tap
  const chibiQuotes = [
    { text: "Hai! Semangat ya! ✨", emoji: "(=^･ω･^=)" },
    { text: "Kamu ngeklik aku! (≧◡≦)", emoji: "💖" },
    { text: "Looking sharp today!", emoji: "👀" },
    { text: "Explore the links! 🚀", emoji: "(★ω★)" },
    { text: "Wooble Woobly~ ♪", emoji: "(´｡• ᵕ •｡`)" },
    { text: "Jangan lupa senyum! 😊", emoji: "⭐" },
  ];

  let quoteIndex = 0;

  // Trigger heart particles on click/tap
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

  // Click / Tap reaction
  const onAvatarClick = () => {
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

    // Trigger blink / wink
    eyelids.forEach((el) => {
      el.style.transform = 'scaleY(1)';
      setTimeout(() => {
        el.style.transform = 'scaleY(0)';
      }, 200);
    });

    spawnHeartParticle();
  };

  avatarWrapper.addEventListener('click', onAvatarClick);

  // Periodic natural blinking
  const blink = () => {
    eyelids.forEach((el) => (el.style.transform = 'scaleY(1)'));
    setTimeout(() => {
      eyelids.forEach((el) => (el.style.transform = 'scaleY(0)'));
    }, 180);
  };

  const blinkInterval = window.setInterval(() => {
    if (Math.random() > 0.3) {
      blink();
    }
  }, 4000);

  if (isHoverSupported) {
    // Desktop: Smooth Cursor tracking
    let targetLeft = { x: 0, y: 0 };
    let targetRight = { x: 0, y: 0 };
    let currentLeft = { x: 0, y: 0 };
    let currentRight = { x: 0, y: 0 };
    let isTracking = true;

    const updatePupilTarget = (eyeEl: HTMLElement, e: MouseEvent): { x: number; y: number } => {
      const rect = eyeEl.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.hypot(dx, dy);

      const clampedDist = Math.min(MAX_RADIUS, distance * 0.045);

      return {
        x: Math.cos(angle) * clampedDist,
        y: Math.sin(angle) * clampedDist,
      };
    };

    const onMouseMove = (e: MouseEvent) => {
      targetLeft = updatePupilTarget(leftEye, e);
      targetRight = updatePupilTarget(rightEye, e);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let animationFrameId: number;
    const animate = () => {
      if (!isTracking) return;

      currentLeft.x += (targetLeft.x - currentLeft.x) * 0.18;
      currentLeft.y += (targetLeft.y - currentLeft.y) * 0.18;
      currentRight.x += (targetRight.x - currentRight.x) * 0.18;
      currentRight.y += (targetRight.y - currentRight.y) * 0.18;

      leftPupil.style.transform = `translate3d(${currentLeft.x}px, ${currentLeft.y}px, 0)`;
      rightPupil.style.transform = `translate3d(${currentRight.x}px, ${currentRight.y}px, 0)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isTracking = false;
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearInterval(blinkInterval);
    };
  } else {
    // Mobile / Touch: Ambient glances + natural movement
    let idleInterval: number;

    const performIdleGlance = () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (MAX_RADIUS * 0.8);
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;

      leftPupil.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
      rightPupil.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
      leftPupil.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rightPupil.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      setTimeout(() => {
        leftPupil.style.transform = 'translate3d(0, 0, 0)';
        rightPupil.style.transform = 'translate3d(0, 0, 0)';
      }, 1600);
    };

    idleInterval = window.setInterval(performIdleGlance, 3500);

    return () => {
      clearInterval(idleInterval);
      clearInterval(blinkInterval);
    };
  }
}
