gsap.to('.search', {
  x: 400,
  duration: 2.5,
  opacity: 1,
  yoyo: true,
  repeat: 2,
});
gsap.from('.search-line', {
  y: 100,
  duration: 1.5,
  ease: 'bounce',
});
gsap.from('#Path_2', { drawSVG: 0, x: 500, duration: 3 });
