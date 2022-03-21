import React from 'react'

function ChatBubble({messageObject}) {
    const {message,username,sender} = messageObject
   
    if(sender==='you')
  return (   
      <div className='d-flex  justify-content-end green-bubble align-self-end me-3 mb-3 '>
      <p className="text-right text-wrap p-3 m-0">{message}</p>    
      </div>
  )
  return(
      <div className="d-flex justify-content-start blue-bubble mb-3 ms-3 ">
      
       <p className="text-wrap p-3 m-0"><span className='text-uppercase font-weight-bold'>{username} :</span> {message} </p>

      </div>

  )
}

export default ChatBubble