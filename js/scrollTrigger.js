const layers = gsap.timeline();
layers
  .from('.orange', { xPercent: -100 })
  .from('.purple', { xPercent: 100 })
  .from('.red', { yPercent: -100 })
  .from('.blue', { yPercent: 100 });

ScrollTrigger.create({
  trigger: '.whole-page',
  scroller: '#app',
  animation: layers,
  scrub: true,
  pin: true,
});
