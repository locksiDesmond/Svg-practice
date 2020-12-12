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

// option
const option = document.querySelector('.option-container');
option.addEventListener('mouseenter', () => {
  gsap.to('.option-container', { x: -200, duration: 1 });
  // document.querySelector('.option').classList.toggle('close');
  option.classList.toggle('open');
});
option.addEventListener('mouseout', () => {
  if (option.classList.contains('open')) {
    gsap.to('.option-container', { x: 0, duration: 0.25 });
  }
  // document.querySelector('.option').classList.toggle('close');
  option.classList.toggle('open');
});
// Text animation
// randomize array elements using the Durstenfeld shuffle algorithm.
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var mySplitText = new SplitText('h1', {
    type: 'chars',
    charsClass: 'text-animation',
  }),
  shuffleCharArray = shuffleArray(mySplitText.chars),
  masterTL = new TimelineLite();
console.log(shuffleArray);

shuffleCharArray.forEach(function (elem, index) {
  var tl = new TimelineLite();
  tl.set(elem, { className: '+=state-1' })
    .set(elem, { delay: 0.1, className: '+=state-2' })
    .set(elem, { delay: 0.1, className: '+=state-3' });

  masterTL.add(tl, index * 0.02);
});

document.querySelector('#replay').addEventListener('click', function () {
  masterTL.restart();
});
