const solver = require("./task-calculator");

test("Can solve addition problems", () => {
  const operation = "addition";
  const left = -5.5;
  const right = 10;
  const result = 4.5;
  expect(solver[operation](left, right)).toBe(result);
});
test("Can solve subtraction problems", () => {
  const operation = "subtraction";
  const left = 10.5;
  const right = 7;
  const result = 3.5;
  expect(solver[operation](left, right)).toBe(result);
});

test("Can solve multiplication problems", () => {
  const operation = "multiplication";
  const left = 10.1;
  const right = 7;
  const result = 70.7;
  expect(solver[operation](left, right)).toBe(result);
});
test("Can solve division problems", () => {
  const operation = "division";
  const left = 50.5;
  const right = 5;
  const result = 10.1;
  expect(solver[operation](left, right)).toBe(result);
});
test("Can solve remainder problems", () => {
  const operation = "remainder";
  const left = 10;
  const right = 2;
  const result = 0;
  expect(solver[operation](left, right)).toBe(result);
});
