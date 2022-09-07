import Home from './home'
import About from './about'
import Feedback from './feedback'
import './App.css'
import {useState} from 'react'

function App() {
  const [state,setstate] =useState('home')
  let component
  if (state==='home'){
     component=<Home></Home>
  }
  if (state==="about"){
     component=<About></About>
  }
  if (state==="feedback"){
     component=<Feedback></Feedback>
  }
  
  return (
    
    <div>
      <div id="btns">
      <button id="h" onClick={()=>{
        setstate('home')
      }}>Home</button>
      <button id="a" onClick={()=>{
        setstate('about')
      }}>About me</button>
      <button id="f" onClick={()=>{
        setstate('feedback')
      }}>Feedback</button>

      </div>
    

      
      <img id="sri" src={process.env.PUBLIC_URL+"profile.jpeg"} alt=""/>
      <div id ="default">
      
      <h3>SripadhSujith</h3>
      <i>I 💖 python and react so much!</i>
      <br/>
      <br/>
      <i>Iam 13 year old</i>
      <br/>
      <br/>
      <i>Love to code</i>
      <br/>
      <br/>
      <h3>Contact me on:</h3>
      <i>Gmail:sripadhsujith@gmail.com</i>
      <div id="sn">
        <a rel="noreferrer" target={"_blank"} href="https://dev.to/sripadhs">
            <img id="dv" src={process.env.PUBLIC_URL+"dev.png"} alt="" />

            </a>
            <a rel="noreferrer" target={"_blank"}  href="https://github.com/sripadhs">
            <img id="gh" src={process.env.PUBLIC_URL+"github.png"} alt="" />

            </a>
      </div>      

      </div>

      <div id="main">
        {component}
      </div>

    
    </div>
  )
}

export default App