import './App.css';
import { InputMessage } from './components/InputMessage';

import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");


const emitMessage=(message)=>{
  socket.emit('message',message)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Connect Players</h1>
      <InputMessage emit={emitMessage}/>
      </header>
    </div>
  );
}

export default App;
