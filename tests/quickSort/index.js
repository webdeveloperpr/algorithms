// divide and conquer tpy algorithm. Very elegant way to sort something.
// Love this algorithm.
const quickSort = (arr = []) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  arr.forEach((x, i) => {
    if (i !== 0) x < pivot ? left.push(x) : right.push(x)
  });

  return quickSort(left).concat(pivot, quickSort(right));
};

export { quickSort };
