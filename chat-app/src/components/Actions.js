import io from "socket.io-client";

export const Actions={
    CreateSocket:()=>{
        const socket = io.connect("http://localhost:5000");
        return socket;
    },
    EmitMessage:(socket,message)=>{
        socket.emit('chat',message)  
    }
}