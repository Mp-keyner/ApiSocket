const Server = require('./models/server');
const server = new Server();
server.execute()


// io.on('connection', (socket) => { 
//     console.log('Client connection con el ID: ', socket.id);
//     io.emit('connection',{
//         msg: 'success message',
//         date: new Date()
//     });
//     socket.on("messageClient", (data) => {
//         console.log("Connection established", data.msg, "name:", data.name);
//       });
//  });

 