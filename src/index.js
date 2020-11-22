const server = require('./server');
// eslint-disable-next-line import/order
const io = require('socket.io')(server);
const userEvents = require('./user-events');

io.on('connection', (socket) => {
  userEvents.setup(socket);
  socket.on('disconnect', () => {});
});

server.listen(80);
// eslint-disable-next-line no-console
console.log('Server running at http://127.0.0.1:80/');
