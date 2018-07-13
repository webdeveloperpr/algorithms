import { swap } from '../utils/index';

const selectionSort = arr => {
  let min;
  // Starting from index 0
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
};

export { selectionSort };
