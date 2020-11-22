const solver = require("./task-solver");

test("Can solve addition problems", () => {
  const operation = "addition";
  const left = -5;
  const right = 10;
  const result = 5;
  expect(solver[operation](left, right)).toBe(result);
});
test("Can solve subtraction problems", () => {
  const operation = "subtraction";
  const left = 10;
  const right = 7;
  const result = 3;
  expect(solver[operation](left, right)).toBe(result);
});
