import './App.css';
import { InputMessage } from './components/InputMessage';
import { Actions } from './components/Actions';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';

const thisSocket = Actions.CreateSocket();


function App() {
  
  const [chats, setChats] = useState([])
  thisSocket.on("chat", message=>{
    setChats([...chats,message])
    })
  const [modalShow, setModalShow] = useState(true);
  const [userName, setUserName] = useState("")

  useEffect(() => {     
     thisSocket.emit('setUser',userName)
  
   
  }, [userName])
  

  return (
  
    <div className="App">
        <MyVerticallyCenteredModal
        show={modalShow}
        setUserName={setUserName}
        onHide={() => setModalShow(false)}/>


      <header className="App-header">
      {chats.map(chat=>{
        return <p key={(Math.random() + 1).toString(36).substring(7)}>{chat.message}:{chat.userName}</p>
      })}
      <h1>Connect Players</h1>
      <InputMessage socket= {thisSocket} userName={userName}/>
      </header>
    </div>
  );
}

export default App;
