import React, { useState } from 'react';
import { Actions } from './Actions';

export const InputMessage = ({socket,userName}) => {
    let[message,setMessage]=useState("")

const onSubmit=(event)=>
{
    event.preventDefault();
    Actions.EmitMessage(socket,{message,userName});
    setMessage("")
}

  return <div>
<form onSubmit={onSubmit}>
    <input type="text" placeholder="Type your message here" value={message} onChange={(e)=>setMessage(e.target.value)}/>
    <button type="submit" >Send</button>
</form>
  </div>;
};
