import { mergeSort } from './';

describe.only('mergeSort', () => {
  const arr = [1, 2, 3, 4, 5,];
  it('should sort', () => {
    const result = mergeSort(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
