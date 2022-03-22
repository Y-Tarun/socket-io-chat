const express = require('express');
const app = express();
const http = require('http');
const { nanoid } = require('nanoid');
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
    let user="user";
    console.log(` what is socket: ${socket.id}`);

    socket.on("setUser",(userDto)=>{
      user=userDto.username
      console.log(`${user} connected`)
      // io.to(socket.id).emit("newUserJoined",({type:"newUserJoined",message:`Hi ${username}!!!`}) );
      socket.broadcast.emit("newUserJoined",({type:"newUserJoined",message:`say Hi to ${userDto.username} ...`,id:nanoid()}))

    })




   socket.on("chat", (message)=>{
     console.log(`${message.userDto.username} of id ${message.userDto.id}  sent ${message.message}. messageId is --${message.id}`)
     io.emit("chat",message)
   })




   socket.on("disconnect",()=>{
     console.log(`${user} disconnected`)
   })
   

})







server.listen(backendPort, () => {
    console.log(`listening on port ${backendPort}`);
  });