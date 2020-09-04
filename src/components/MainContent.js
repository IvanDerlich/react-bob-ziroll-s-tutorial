/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'

const MainContent = () => {

  const jokesComponents = jokesData.map(joke => <Joke 
    question={joke.question}
    punchLine={joke.punchLine}
    key={joke.id}
  />)   
  
  return (
    <div className="contacts">      
      {jokesComponents}      
    </div>   
  )
}
export default  MainContent;
