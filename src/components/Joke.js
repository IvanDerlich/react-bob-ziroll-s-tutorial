import React from 'react'

function Joke(props){  
  let punchLine = <h1>Punchline: {props.punchLine}</h1>
  let question = <h1>Question: {props.question}</h1>  
  if(!props.question){    
    punchLine = <h1>Joke: {props.punchLine}</h1>
    question = ""
  }
  
  return(
    <div>
      {question}
      {punchLine}      
    </div>
  )
}

export default Joke