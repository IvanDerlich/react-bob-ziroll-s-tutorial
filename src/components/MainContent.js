import React from 'react'
 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  
  handleOnClick(){         
    this.setState( prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render(){
    
    return(   
      <div>
        <div>
          <h1>{this.state.count}</h1>
          <button            
            onClick={this.handleOnClick}
          >
            Change!
          </button>
        </div>
      </div> 
    )
  }    
}

export default App