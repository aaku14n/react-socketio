const port = 8000;
const io = require('socket.io').listen(port);
const usernames = {};
io.sockets.on('connection', (socket) => {

  socket.on('adduser', (username) => {
    console.log('socket is subscribing to timer with interval ', username);
    socket.username = username;
    usernames[username] = socket.id;
    console.log(usernames);
    io.sockets.emit('userlist',usernames);

  });

  socket.on('message',(data)=>{
    
    let id = usernames[data.from];
    console.log(io.sockets);
    io.sockets.socket[id].emit("message", data);
    // io.sockets.socket(usernames[data.from]).emit("message",data);
    // socket.broadcast.to(_id).emit('message', 'for your eyes only',result => {console.log(result)});
    io.sockets.connected[id].emit('message', 'for your eyes only',result=>{console.log(result)});
    // io.sockets.to(_id).emit('message',data);
    // socket.to(usernames[data.from]).emit('message', "this is a test");
    // socket.to(usernames[data.to]).emit('message', "this is a test");
    // io.to(usernames[data.from]).emit("message",data);
    // io.socket.to(_id).emit("message",dat); 
    // // io.sockets.connected(_id).emit("message",data);
    // io.sockets.connected[_id].emit('message', 'for your eyes only');
    console.log('here');
    // io.sockets.socket(_id).emit("message",usernames);

  })

});


console.log('listening on port ', port);