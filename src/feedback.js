import React from 'react'
import {Firebase} from './firebase/config'
import {useState} from 'react'

function Feedback() {
  const [name,setname]=useState('')
  const [msg,setmsg]=useState('')
  const send=()=>{
    Firebase.firestore().collection('feedbacks').add({
      name:{name},
      message:{msg}
      
    })
    alert('Your feedback succesfully sended to SripadhSujith')
  }
  const change=event=>{
    setname(event.target.value)
    
  }
  const change2=event=>{
    setmsg(event.target.value);
  }
  return (
    <div>
        <h1>Feedback</h1>
        <label>Name:</label>
        <br/>
        <input  onChange={change}/>
        <br/>
        <label>Message:</label>
        <br/>
        <input  onChange={change2}/>
        <br/>
        <br/>
        <button id="snd" onClick={send}>Send</button>
    </div>
  )
}

export default Feedback