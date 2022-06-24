window.addEventListener("load", () => {
  addAnimation();
});

const addAnimation = () => {
  const layers = gsap.timeline({ defaults: { ease: "none" } });

  layers.fromTo(
    ".stoke-city-flow",
    {
      rotateZ: -45,
      transformOrigin: "500px 500px",
    },
    {
      rotateZ: 325,
      duration: 22.5,
    },
    "start"
  );

  let time = 0;

  ["define", "discover", "deliver", "develop"].forEach((item) => {
    layers
      .fromTo(
        `.${item} .circle`,
        { scale: 1 },
        {
          duration: 1,
          scale: 1.4,
          transformOrigin: "center center",
        },
        time
      )
      .call(() => switchText(item), [], time);

    layers.fromTo(
      `.${item} .background`,
      { opacity: 1 },
      { opacity: 0, duration: 2 },
      time
    );
    layers.to(`.${item} .circle`, { scale: 1, duration: 2 }, time + 5);
    layers.to(`.${item} .background`, { opacity: 1, duration: 2 }, time + 5);
    time += 5;
  });

  ScrollTrigger.create({
    trigger: ".stockcity-wrapper",
    scroller: "#app",
    animation: layers,
    scrub: 1,
    pin: true,
    start: "top top",
    end: "320px",
    snap: {
      snapTo: [0.18, 0.36, 0.6, 0.85],
      duration: { min: 0.2, max: 0.8 },
      inertia: false,
    },
  });
};

const data = {
  define: {
    title: "Define",
    text: "Use these steps to tackle the	most complex social, economic & environmental problems.",
  },
  discover: {
    title: "discover",
    text: "Use these steps to tackle the	most complex social, economic & environmental problems.",
  },
  deliver: {
    title: "deliver",
    text: "Use these steps to tackle the	most complex social, economic & environmental problems.",
  },
  develop: {
    title: "develop",
    text: "Use these steps to tackle the	most complex social, economic & environmental problems.",
  },
};
function switchText(selected) {
  const content = data[selected];

  animateReplaceText(".stokecity-content p", content["text"]);
  animateReplaceText(".stokecity-content h3", content["title"]);
}

function animateReplaceText(className, text) {
  gsap
    .timeline({
      defaults: { duration: 0.25 },
    })
    .to(className, { opacity: 0 })
    .set(className, { innerText: text })
    .to(className, { opacity: 1 });
}
