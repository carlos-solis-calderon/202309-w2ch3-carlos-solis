import { length, singularPop } from './tools';
import { describe, test, expect } from '@jest/globals';
describe('Given my lenght function', () => {
  test('when parametres are length then sould be 4', () => {
    const array = [1, 2, 3, 4];
    const result = length(array);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});

import { arrayPush } from './tools.js';
describe('Given the push function', () => {
  describe('When the argument is [1, 2, 3, 4], 5', () => {
    test('The result should be 5')  () => {
        const n = [1, 2, 3, 4];
        const x = 5;
        const expected = 5;

        const result = arrayPush(n, x);

        expect(result).toBe(expected);
      };
  });
});

// eslint-disable-next-line no-unused-expressions
describe('Given singularPop'),
  () => {
    describe('When the argument is a empty array'),
      () => {
        test('then result should be empty array'),
          () => {
            const testData = [];
            const expected = [];
            const result = singularPop(testData);
            expect(result).toEqual(expected);
          };
      };
  };
