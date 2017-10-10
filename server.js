var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
server.listen(8000);
var io = socket_io();
io.attach(server);
const usernames = {};
const usersocket = {};
io.sockets.on('connection', (socket) => {

  socket.on('adduser', (username) => {
    console.log('socket is subscribing to timer with interval ', username);
    socket.username = username;
    usersocket[username]= socket;
    usernames[username] = socket.id;
    console.log(usernames);
    io.sockets.emit('userlist',usernames);

  });

  socket.on('message',(data)=>{
    io.sockets.emit('message',data);
    // io.sockets.sockets(id).emit('message', data);
    // io.sockets.connected[usernames[data.from]].emit("message", data);
    // io.sockets.socket(usernames[data.from]).emit("message",data)
    // io.sockets.to(_id).emit('message',data);
    // socket.to(usernames[data.from]).emit('message', "this is a test");
    // socket.to(usernames[data.to]).emit('message', "this is a test");
    // io.to(usernames[data.from]).emit("message",data);
    // io.socket.to(_id).emit("message",dat); 
    // // io.sockets.connected(_id).emit("message",data);
    // io.sockets.connected[_id].emit('message', 'for your eyes only');
    // io.sockets.socket(_id).emit("message",usernames);

  })

});


console.log('listening on port 8000');