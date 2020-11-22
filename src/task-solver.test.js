const solver = require('./task-solver');

test('Will return proper object for submission', () => {
  const problem = { id: '123', operation: 'division', left: -1, right: 1 };
  const solution = { id: '123', result: -1 };
  expect(solver.solve(problem)).toStrictEqual(solution);
});
