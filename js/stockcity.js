window.addEventListener("load", () => {
  const layers = gsap.timeline({ defaults: { ease: "linear" } });

  layers.fromTo(
    ".stoke-city-flow",
    {
      rotateZ: -45,
      transformOrigin: "500px 500px",
    },
    {
      rotateZ: 325,
      duration: 23,
    },
    "start"
  );

  let currentCount = 0;

  ["define", "discover", "deliver", "develop"].forEach((item) => {
    layers.fromTo(
      `.${item} .circle`,
      { scale: 1 },
      {
        duration: 1,
        scale: 1.4,
        transformOrigin: "center center",
      },
      currentCount
    );
    layers.fromTo(
      `.${item} .background`,
      { opacity: 1 },
      { opacity: 0, duration: 2 },
      currentCount
    );
    layers.to(`.${item} .circle`, { scale: 1, duration: 2 }, currentCount + 5);
    layers.to(
      `.${item} .background`,
      { opacity: 1, duration: 2 },
      currentCount + 5
    );

    currentCount += 5;
  });
});
