const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
/////
const backendPort=5000;
/////
io.on("connection",(socket)=>{
    console.log(socket.id);
})







server.listen(backendPort, () => {
    console.log(`listening on port ${backendPort}`);
  });