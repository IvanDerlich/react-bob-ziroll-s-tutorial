import React from 'react'
import randomcolor from 'randomcolor'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: randomcolor()
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  
  render(){
    console.log("Render")
    return(   
      <div>
        <div>
          <h1 style={{color: this.state.color}}>{this.state.count}</h1>
          <button            
            onClick={this.increment}
          >
            Increment!
          </button>
          <button            
            onClick={this.decrement}
          >
            Decrement!
          </button>
        </div>
      </div> 
    )
  }    

  componentDidMount(){
    console.log("Mount")
  }  

  componentDidUpdate(prevProps, prevState){
    console.log("Update")    
    if(prevState.count !== this.state.count){
        this.setState( prevState => {
            return{
                color: randomcolor()
            }
        })
    }    
  }

  increment(){         
    this.setState( prevState => {
      return {
        count: prevState.count + 1        
      }
    })
  }
  decrement(){         
    this.setState( prevState => {
      return {
        count: prevState.count - 1        
      }
    })
  }
}

export default App