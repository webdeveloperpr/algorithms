import { fibonacci } from './';

describe('fibonacci', () => {
  it('should return the fibonacci number at the specified index', () => {
    const result = fibonacci(4);
    expect(result).to.equal(5);

  });
});