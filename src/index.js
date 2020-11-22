const fetcher = require('./task-fetcher');
const solver = require('./task-solver');
const submitter = require('./task-submitter');

const execute = async () => {
  const problem = await fetcher.fetch();
  console.log(JSON.stringify(problem));
  const solution = solver.solve(problem);
  console.log(JSON.stringify(solution));
  const result = await submitter.submit(solution);
  console.log(JSON.stringify(result));
};
execute().then(() => {});
