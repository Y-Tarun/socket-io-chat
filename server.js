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
io.on("connection",socket=>{        
   console.log(` what is socket: ${socket}`)   
    let user="";
    socket.on('setUser',(username)=>{
      user=username
      console.log(`${user} connected`)
    })
   socket.on("chat", (message)=>{
     console.log(`what is message: ${message}`)
     io.emit("chat",message)
   })
   socket.on("disconnect",()=>{
     console.log(`${user} disconnected`)
   })
   

})







server.listen(backendPort, () => {
    console.log(`listening on port ${backendPort}`);
  });