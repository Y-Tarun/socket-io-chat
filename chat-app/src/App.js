import { InputMessage } from './components/InputMessage';
import { Actions } from './components/Actions';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { socket } from './SocketService';
import io from "socket.io-client";
import { Button,Input } from 'react-bootstrap';
import ChatBubble from './components/ChatBubble';


function App() {
  let {username}=useParams()
  
  console.log("connection made")
  useEffect(() => {    
    
    socket.emit("setUser",username)      
  }, [])
  const [chats, setChats] = useState([])
  let[message,setMessage]=useState("")
  socket.on("chat", message=>{
    setChats([...chats,message])
    })

  const onClickHandler = () => {  
    socket.emit("chat",{message,username})   
      setMessage("")
  }
  return (
    <div className="appArea d-flex flex-column justify-content-end overflow-auto">
      <div className="chatArea d-flex flex-column overflow-auto p-3">
      {chats.map(chat=>{
        return <ChatBubble 
        key={(Math.random() + 1).toString(36).substring(7)}
        messageObject={{message: chat.message, 
                        username: chat.username, 
                        sender:chat.username===username?'you':'not-you'}}
        />
             
      
      })}
      </div>
      <div className="inputArea">
      <div class="form-group">
      <input 
      type="text" 
      class="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Message"
      value={message} 
      onChange={(e)=>setMessage(e.target.value)}
      />
      </div>
      {/* <Input type="text" placeholder='type ur message here'  value={message} onChange={(e)=>setMessage(e.target.value)}/> */}
      <Button onClick={()=>onClickHandler()} >Send</Button>
      </div>
    </div>
  )
  
}

export default App;
