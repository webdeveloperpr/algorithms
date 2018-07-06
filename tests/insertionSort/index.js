// Starting from the second element. It grabs it and then looks backward to
// insert it.

function insertionSort(array) {
  // we loop over the array
  for (let i = 0; i < array.length; i++) {
    // the current element on the index is saved as a temp var
    let temp = array[i];
    // J is the prev index
    let j = i - 1;
    // while the prev index is 0 or higher and the prev is element is  > current element
    while (j >= 0 && array[j] > temp) {
      // current element to previous
      array[i] = array[j];
      j--;
    }
    // previous to current element
    array[j + 1] = temp;
  }
  return array;
}

export { insertionSort };
