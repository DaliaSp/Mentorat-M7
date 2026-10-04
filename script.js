const parallaxBgEls = document.querySelectorAll('.parallax-bg');

const updateParallax = () => {
  const offset = window.scrollY;

  parallaxBgEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const speed = 0.09;
    const shift = ((rect.top + rect.height / 2 - window.innerHeight / 2) * speed) * -1;
    const limitedShift = Math.max(-100, Math.min(100, shift));
    el.style.backgroundPosition = `center calc(50% + ${limitedShift}px)`;
    el.style.backgroundAttachment = 'scroll';
  });
};

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('load', updateParallax);
window.addEventListener('resize', updateParallax);
