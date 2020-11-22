const server = require('./server');
// eslint-disable-next-line import/order
const io = require('socket.io')(server);
const userEvents = require('./user-events');
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

io.on('connection', (socket) => {
  console.log('user connected');
  userEvents.setup(socket);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(80);
console.log('Server running at http://127.0.0.1:80/');
