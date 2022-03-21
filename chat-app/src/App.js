import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useParams } from 'react-router-dom';
import { socket } from './SocketService';
import { Button } from 'react-bootstrap';
import ChatBubble from './components/ChatBubble';
import { nanoid } from 'nanoid';



function App() {
  let {username}=useParams()
  const [activities, setActivities] = useState([])
  let[message,setMessage]=useState("")
   
  useEffect(() => {    
    
    socket.emit("setUser",username)      
  }, [])
  socket.on("chat", message=>{
    setActivities([...activities,message])
    })

  const onSubmitHandler = (event) => {  
    event.preventDefault();
    socket.emit("chat",{message,username,id:nanoid(),type:"chat"})   
      setMessage("")
  } 

  socket.on("newUserJoined",(newPerson)=>{
    setActivities([...activities,newPerson])
  })
  return (
    <div className="appArea d-flex flex-column justify-content-end overflow-auto rounded">
      <div className="chatArea d-flex flex-column overflow-auto p-3 ">
      {activities.map(activity=>{
        if(activity.type==="chat")
        return <ChatBubble 
        key={activity.id}
        messageObject={{message: activity.message, 
                        username: activity.username, 
                        sender:activity.username===username?'you':'not-you'}}
        />
        return <p key= {activity.id}>{activity.message}</p>      
      })}
      </div>
      <div className="inputArea">
      <form class="form-group" onSubmit={onSubmitHandler}>
      <input 
      required
      type="text" 
      class="form-control"  
      placeholder="Message"
      value={message} 
      onChange={(e)=>setMessage(e.target.value)}
      />
      <Button type='submit' >Send</Button>
      </form>
      </div>
    </div>
  )
  
}

export default App;
