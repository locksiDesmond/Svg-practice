window.addEventListener("load", () => {
  //   gsap.to('', {opacity: 0, zIndex: -1, duration: 0.9 });
  const layers = gsap.timeline({ ease: "linear" });
  layers
    .fromTo(
      ".stock",
      {
        rotateZ: 0,
        transformOrigin: "500px 500px",
        stagger: 0.3,
      },
      {
        rotateZ: 360,
        duration: 15,
      },
      "start"
    )
    .from(
      ".define .background",
      { opacity: 0, stagger: 2, duration: 3 },
      "start"
    )
    .from(
      ".discover .background",
      { opacity: 0, delay: 3, duration: 3 },
      "start"
    )
    .from(".deliver .background", { opacity: 0, delay: 6 }, "start")
    .from(".develop .background", { opacity: 0, delay: 9 }, "start");
});
