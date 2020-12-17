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
function range(x, y) {
  if (y - x === 2) {
    return [x + 1];
  } else {
    var array = range(x, y - 1);
    array.push(y - 1);
    return array;
  }
}
console.log(range(100, 500));
