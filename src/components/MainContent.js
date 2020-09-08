import React from 'react'

export default class MainContent extends React.Component {
  constructor(props) {
      super()
      this.state = {
          isLoggedIn: false
      }
      this.toggleLoggedState = this.toggleLoggedState.bind(this)
  }

  toggleLoggedState(){
    this.setState(prevState => {
        return {
            isLoggedIn: !this.state.isLoggedIn
        }
    })
  }  

  render(){
    const inOrOut = this.state.isLoggedIn ? "IN" : "OUT"
    const titleText = "LOGGED " + inOrOut
    const buttonText = "LOG " + inOrOut
    return(
            <div>
                <h1> {titleText}</h1> 
                <button 
                    onClick={this.toggleLoggedState}
        >{buttonText}</button>
            </div>
        )   
  }
}