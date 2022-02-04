const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });
/////
const backendPort=5000;
/////
io.on("connection",(socket)=>{
    console.log(socket.id);
    
    socket.on('message',message=>{
        console.log(message)
    })
    socket.on("disconnect",()=>{
        console.log("disconnected")
    })
})







server.listen(backendPort, () => {
    console.log(`listening on port ${backendPort}`);
  });