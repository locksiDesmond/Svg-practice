const hamburger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
// gsap.to('.hamburger', 2, { x: 100 });
var tl = gsap.timeline();
const lines = ['.line-1', '.line-2', '.line-3'];
const toggleMenu = gsap.timeline({ paused: true, reversed: true });
hamburger.addEventListener('mouseenter', () => {
  if (hamburger.classList.contains('js-x')) return;
  tl.staggerTo(
    lines,
    0.125,
    {
      scaleX: 1.5,
      repeat: 1,
      yoyo: true,
      ease: Power2.easeInOut,
      svgOrigin: '50 50',
    },
    0.123
  );
});
toggleMenu
  .to('.line-2', 0.125, { scaleX: 0 })
  .to(
    '.line-1',
    0.25,
    { transformOrigin: '50% 50%', y: 20, ease: Power2.easeInOut },
    'slide'
  )
  .to(
    '.line-3',
    0.25,
    { transformOrigin: '50% 50%', y: -20, ease: Power2.easeInOut },
    'slide'
  )
  .to('.hamburger', 0.25, { rotation: 360, ease: Power4.easeInOut })
  .to('.line-1', 0.25, { rotation: 45, ease: Power2.easeInOut }, 'cross')
  .to('.line-3', 0.25, { rotation: -45, ease: Power2.easeInOut }, 'cross');

hamburger.addEventListener('click', (_) => {
  hamburger.classList.toggle('js-x');
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});

//text
const textTimeline = gsap.timeline({ paused: true });
textTimeline.to('.content #description ', {
  duration: 2,
  text: 'Locksi is a frontend developer with amazing work ethic',
  ease: 'none',
  delimiter: ' ',
});
// option
const option = document.querySelector('.option-container');
const optionContent = document.querySelector('.option-content');
option.addEventListener('mouseenter', () => {
  if (option.classList.contains('open')) return;
  gsap.to('.option-container', { x: -460, duration: 0.7 });
  document.querySelector('.option').classList.toggle('close');
  textTimeline.play(); // text
  option.classList.toggle('open');
  optionContent.classList.toggle('close');
});
option.addEventListener('mouseleave', () => {
  if (option.classList.contains('open')) {
    option.classList.toggle('open');
    textTimeline.pause(); // text
    optionContent.classList.toggle('close');
    document.querySelector('.option').classList.toggle('close');
    gsap.to('.option-container', { x: 0, duration: 0.5 });
  }
  return;
});

//option text
