import { quickSort } from './';

describe.only('quickSort', () => {
  const arr = [4, 1, 5, 3, 2];
  it('should sort', () => {
    const result = quickSort(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
