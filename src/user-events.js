const fetcher = require('./task-fetcher');
const solver = require('./task-solver');
const submitter = require('./task-submitter');

const setupFetchEvent = (socket) => {
  socket.on('fetch', () => {
    fetcher.fetch().then((problem) => {
      console.info(`Problem fetched: ${JSON.stringify(problem)}`);
      socket.emit('fetch/callback', problem);
    });
  });
};

const setupSolveEvent = (socket) => {
  socket.on('solve', (problem) => {
    socket.emit('solve/callback', solver.solve(problem));
  });
};

const setupSubmitEvent = (socket) => {
  socket.on('submit', (solution) => {
    submitter.submit(solution).then((result) => {
      console.info(
        `Submiting solution: ${JSON.stringify(solution)} \n Result found: ${JSON.stringify(result)}`
      );
      socket.emit('submit/callback', result);
    });
  });
};

const setup = (socket) => {
  setupFetchEvent(socket);
  setupSolveEvent(socket);
  setupSubmitEvent(socket);
};

module.exports = { setup };
