import io from "socket.io-client";

export const Actions={
    
    EmitMessage:(thisSocket,message)=>{
        thisSocket.emit('chat',message)  
    },
    SetUserName:(socket,username)=>{
        socket.emit("setUser",username)
    }
    
    
}