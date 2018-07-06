// divide and conquer tpy algorithm. Very elegant way to sort something.
// Love this algorithm.
const quickSort = (arr = []) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  arr.forEach((x, i) => {
    if (i === 0) return; // this is the pivot
    x < pivot ? left.push(x) : right.push(x)
  });

  console.log('left', left);
  console.log('right', right);

  return quickSort(left).concat(pivot, quickSort(right));
};

export { quickSort };
