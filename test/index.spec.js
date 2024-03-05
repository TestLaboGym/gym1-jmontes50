// isEven.test.js
const isEven = require('../index.js');

test('2 should be even', () => {
  expect(isEven(2)).toBe(true);
});

test('3 should not be even', () => {
  expect(isEven(3)).toBe(false);
});

test('0 should be even', () => {
  expect(isEven(0)).toBe(true);
});

test('Negative numbers should be handled', () => {
  expect(isEven(-4)).toBe(true);
});

test('Floating point numbers should be handled', () => {
  expect(isEven(2.5)).toBe(false);
});
