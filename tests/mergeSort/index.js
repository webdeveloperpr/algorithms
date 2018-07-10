const merge = (left = [], right = []) => {
  let sortedArr = [];
  while (left.length || right.length) {
    if (left.length && right.length) left[0] < right[0]
      ? sortedArr.push(left.shift())
      : sortedArr.push(right.shift());
    else if (left.length) sortedArr.push(left.shift());
    else if (right.length) sortedArr.push(right.shift());
  }

  return sortedArr;
};

function mergeSort(arr) {
  const length = arr.length;
  if (length < 2) return arr;
  const mid = parseInt(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

export { mergeSort };
