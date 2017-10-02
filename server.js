const io = require('socket.io')();
const usernames = {};
io.on('connection', (client) => {
    
  // client.on('subscribeToTimer', (interval) => {
  //   console.log('client is subscribing to timer with interval ', interval);
  //   setInterval(() => {
  //     client.emit('timer', new Date());
  //   }, interval);
  // });

  client.on('submessage', (message) => {
    console.log('client is subscribing to timer with interval ', message);
    io.sockets.emit('user',message);
      client.emit('user', message);
    
  });

  client.on('adduser', (username) => {
    console.log('client is subscribing to timer with interval ', username);
    client.username = username;
    usernames[username] = client.id;
    console.log(usernames);
    io.sockets.emit('userlist',usernames);
    // client.emit('userlist', usernames);
    
  });


});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);