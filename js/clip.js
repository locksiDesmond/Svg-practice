const polygon = document.querySelectorAll(".polygons");
polygon.forEach((item) => {
  const height = item.clientHeight;
  const lines = Math.floor(height / 55);
  const h1 = item.querySelector("h1");
  console.log({ lines });
  if (lines === 1) {
    h1.style.clipPath = `polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)`;
  } else if (lines === 2) {
    h1.style.clipPath = `polygon(
        45% 0%,
            100% 0,
            100% 100%,
            32% 100%,
            40% 57%,
            5% 57%,
            14% 0%
  )`;
    h1.style.width = `68%`;
  } else if (lines === 3) {
    h1.style.clipPath =
      "polygon( 45% 0%, 100% 0, 100% 100%, 30.5% 100%, 37% 70%, 16% 70%, 25% 31%, 0% 31%, 8% 0% )";
    h1.style.width = `65%`;
  }
});
