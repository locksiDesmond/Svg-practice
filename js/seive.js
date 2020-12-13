const calculateSeive = (number) => {
  const items = new Array(number).fill(true);
  const n = items.length;
  let result = [];
  for (let i = 2; i < n; i++) {
    if (items[i]) {
      for (let j = i ** 2; j < n; j += i) {
        items[j] = false;
      }
      result.push(i);
    }
  }
  return result;
};
console.log(calculateSeive(100));
