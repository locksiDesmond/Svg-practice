const layers = gsap.timeline({ ease: 'easeIn' });
layers
  .from('.layers .orange', { xPercent: -100 })
  .from('.layers .purple', { xPercent: 100 })
  .from('.layers .red', { yPercent: -100 })
  .from('.layers .blue', { yPercent: 100 });

ScrollTrigger.create({
  trigger: '.whole-page',
  scroller: '#app',
  animation: layers,
  scrub: true,
  pin: true,
});

const sections = gsap.utils.toArray('.con');

const horizontal = gsap.timeline({});
horizontal.from(sections, {
  xPercent: -100 * (sections.length - 1),
  stagger: 1,
});

ScrollTrigger.create({
  trigger: '.horizontal-scroll',
  scroller: '#app',
  animation: horizontal,
  scrub: true,
  pin: true,
  snap: 1 / (sections.length - 1),
  // end: () => '+=' + document.querySelector('.horizontal-scroll').offsetWidth,
});
