import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}
function sendMessage(message){
    socket.emit('submessage', message);
}
function submessage(cb){
    socket.on('user', msg => cb(null,msg));
}
export { subscribeToTimer,submessage ,sendMessage};