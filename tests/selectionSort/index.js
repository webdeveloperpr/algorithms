const bubbleSort1 = (arr) => {
  const length = arr.length - 1;
  return arr
    .reduce(({ acc, swapped, lastIndex }, val, i) => {
      // If a value was swapped re-run the bubbleSort
      if (i === length && swapped) {
        const sliceLeft = acc.slice(0, lastIndex);
        const sliceRight = acc.slice(lastIndex);
        return [...bubbleSort1(sliceLeft).acc, ...sliceRight];
      }

      // Swap values when index > index + 1
      if (acc[i] > acc[i + 1]) {
        const temp = acc[i];
        acc[i] = acc[i + 1];
        acc[i + 1] = temp;
        return { acc, swapped: true, lastIndex: i };
      }

      return { acc, swapped, lastIndex };
    }, { acc: arr, swapped: false });
};

const bubbleSort2 = (arr) => {
  let length = arr.length - 1;
  let x = arr.slice();
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (x[i] > x[i + 1]) {
        const temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapped = true;
      }
    }
    length--;

  } while (swapped);
  return x;
};

export {
  bubbleSort1,
  bubbleSort2,
}
