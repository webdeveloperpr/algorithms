import { selectionSort } from './';

describe('selectionSort', () => {
  const arr = [1, 2, 4, 3, 5];
  it('should sort', () => {
    const result = selectionSort(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
