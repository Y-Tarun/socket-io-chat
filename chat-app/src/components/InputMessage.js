import React, { useState } from 'react';

export const InputMessage = (emit) => {
    let[message,setMessage]=useState("")
const sendMessage=()=>{
    emit(message);
    setMessage("")
}

  return <div>
<form>
    <input type="text" placeholder="Type your message here" value={message} onChange={(e)=>setMessage(e.target.value)}/>
    <button type="submit" onClick={sendMessage}>Send</button>
</form>
  </div>;
};
