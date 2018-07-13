import { insertionSort } from './index';

describe('insertionSort', () => {
  const arr = [1, 2, 4, 3, 5];
  it('should sort', () => {
    const result = insertionSort(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
