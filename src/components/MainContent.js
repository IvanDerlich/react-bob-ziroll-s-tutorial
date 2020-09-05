/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React, {Component} from 'react'
  
export default class App extends Component{
  render(){
    return (
      <div>
        <Header username="Peter"/>
        <Greeting />
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends Component{
  render(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}