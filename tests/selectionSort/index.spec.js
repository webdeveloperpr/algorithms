import { bubbleSort1, bubbleSort2 } from './';

describe('bubbleSort', () => {
  const arr = [1, 2, 4, 3, 5];
  it('should bubbleSort', () => {
    const result = bubbleSort1(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should bubbleSort', () => {
    const result = bubbleSort2(arr);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
});


