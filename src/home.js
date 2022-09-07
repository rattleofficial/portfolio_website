import React from 'react'

function Home() {
  return (
    <div>
        <h1>I💖</h1>
        <img id="py" src={process.env.PUBLIC_URL+"python.png"} alt="" />
        <img id="re" src={process.env.PUBLIC_URL+"logo192.png"} alt="" />
        <img id="rb" src={process.env.PUBLIC_URL+"ruby.jpg"} alt="" />
        <div id="card1">
          <h3>My official tech-provider</h3>
          <a rel="noreferrer" target={"_blank"}  href="https://github.com/rattleofficial">
          <img id="rf" src={process.env.PUBLIC_URL+"rattlefoundation.jpg"} alt="" />

          </a>
         

        </div>
    </div>
  )
}

export default Home