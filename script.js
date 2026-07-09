// Параллакс героя (как в оригинале)
(() => {
  const art = document.querySelector('.hero-art');
  if (!art || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  art.style.willChange = 'transform';
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 2) {
      art.style.transform = `translateY(${y * 0.35}px)`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
})();

