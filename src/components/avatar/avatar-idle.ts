export function initAvatar(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const leftPupil = container.querySelector<HTMLElement>('[data-pupil="left"]');
  const rightPupil = container.querySelector<HTMLElement>('[data-pupil="right"]');
  const leftEye = container.querySelector<HTMLElement>('[data-eye="left"]');
  const rightEye = container.querySelector<HTMLElement>('[data-eye="right"]');
  const avatarWrapper = container.querySelector<HTMLElement>('[data-avatar-head]');

  if (!leftPupil || !rightPupil || !leftEye || !rightEye || !avatarWrapper) return;

  const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Maximum distance pupil can move inside eye socket (in pixels)
  const MAX_RADIUS = 6;

  if (isHoverSupported) {
    // Desktop: Cursor tracking with smooth lerp
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

      const clampedDist = Math.min(MAX_RADIUS, distance * 0.04);

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
    };
  } else {
    // Mobile / Touch devices: Ambient idle glances
    let idleInterval: number;

    const performIdleGlance = () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (MAX_RADIUS * 0.75);
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;

      leftPupil.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      rightPupil.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      leftPupil.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rightPupil.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      setTimeout(() => {
        leftPupil.style.transform = 'translate3d(0, 0, 0)';
        rightPupil.style.transform = 'translate3d(0, 0, 0)';
      }, 1400);
    };

    idleInterval = window.setInterval(performIdleGlance, 3200);

    return () => {
      clearInterval(idleInterval);
    };
  }
}
