const io = require('socket.io')();

io.on('connection', (client) => {
    console.log(client);
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('submessage', (message) => {
    console.log('client is subscribing to timer with interval ', message);
    io.sockets.emit('user',message);
      client.emit('user', message);
    
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);