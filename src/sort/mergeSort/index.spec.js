import shuffle from 'lodash.shuffle';

const createNumbersArray = (number) => Array(number)
  .fill('')
  .map((x, i) => i + 1);

import { mergeSort } from './index';

describe('mergeSort', () => {
  const arr = createNumbersArray(10);
  it('should sort', () => {
    const result = mergeSort(shuffle(arr));
    expect(result).to.deep.equal(arr);
    console.log(result);
  });
});
