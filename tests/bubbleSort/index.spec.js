import { bubbleSort } from './';

describe('bubbleSort', () => {
  const arr = [1, 2, 4, 3, 5];
  it('should bubbleSort', () => {
    const result = bubbleSort(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
