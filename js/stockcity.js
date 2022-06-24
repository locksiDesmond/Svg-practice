window.addEventListener("load", () => {
  const layers = gsap.timeline({ defaults: { ease: "linear" } });

  layers.fromTo(
    ".stock",
    {
      rotateZ: -45,
      transformOrigin: "500px 500px",
    },
    {
      rotateZ: 360,
      duration: 25,
    },
    "start"
  );

  let currentCount = 0;

  ["define", "discover", "deliver", "develop"].forEach((item) => {
    layers.fromTo(
      `.${item}`,
      { scale: 1 },
      {
        duration: 1,
        scale: 1.2,
      },
      currentCount
    );
    layers.to(`.${item}`, { scale: 1, duration: 2 }, currentCount + 5);
    currentCount += 5;
  });
});
