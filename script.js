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

// Появление блоков при скролле
(() => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .15 });
  els.forEach((el) => io.observe(el));
})();
