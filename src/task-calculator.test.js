const calculator = require('./task-calculator');

test('Can calculate addition problems', () => {
  const operation = 'addition';
  const left = -5.5;
  const right = 10;
  const result = 4.5;
  expect(calculator[operation](left, right)).toBe(result);
});
test('Can calculate subtraction problems', () => {
  const operation = 'subtraction';
  const left = 10.5;
  const right = 7;
  const result = 3.5;
  expect(calculator[operation](left, right)).toBe(result);
});

test('Can calculate multiplication problems', () => {
  const operation = 'multiplication';
  const left = 10.1;
  const right = 7;
  const result = 70.7;
  expect(calculator[operation](left, right)).toBe(result);
});
test('Can calculate division problems', () => {
  const operation = 'division';
  const left = 50.5;
  const right = 5;
  const result = 10.1;
  expect(calculator[operation](left, right)).toBe(result);
});
test('Can calculate remainder problems', () => {
  const operation = 'remainder';
  const left = 10;
  const right = 2;
  const result = 0;
  expect(calculator[operation](left, right)).toBe(result);
});
