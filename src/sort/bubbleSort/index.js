import { swap } from '../utils/index';

// Inefficient algorithm, but it's simple enough to implement.
const bubbleSort = (arr) => {
  let length = arr.length - 1;
  let x = arr.slice();
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length; i++) {
      if (x[i] > x[i + 1]) {
        swap(x, i, i + 1);
        swapped = true;
      }
    }
    length--;

  } while (swapped);
  return x;
};

export {
  bubbleSort
}
