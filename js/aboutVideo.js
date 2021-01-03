const videoAnimation = gsap.timeline({});
videoAnimation.to('.intro video', { currentTime: 10, duration: 0.3 });
ScrollTrigger.create({
  trigger: '.intro',
  scroller: '#app',
  animation: videoAnimation,
  scrub: true,
  pin: true,
});

// Dev ed method

// const video = document.querySelector('.intro video ');
// const intro = document.querySelector('.intro');

// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({
//   duration: 5000,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .addIndicators()
//   .setPin(intro)
//   .addTo(controller);

// let scroll_pos = 0;
// let accel_amount = 0.25;
// let delay = 0;

// scene.on('update', (e) => {
//   scroll_pos = e.scrollPos / 1000;
// });
// setInterval(() => {
//   delay += (scroll_pos - delay) * accel_amount;
//   video.currentTime = delay;
// }, 31.3);
