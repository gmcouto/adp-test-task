const calculator = require('./task-calculator');

test('Will use calculator to solve problems', () => {
  const problem = { id: '123', operation: 'division', left: -1, right: 1 };
  const solution = { id: '123', result: -1 };
  expect(calculator[operation](left, right)).toBe(result);
});
