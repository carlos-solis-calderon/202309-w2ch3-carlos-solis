import { length } from './tools';
import { describe, test, expect } from '@jest/globals';
describe('Given my lenght function', () => {
  test('when parametres are length then sould be 4', () => {
    const array = [1, 2, 3, 4];
    const result = length(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});
