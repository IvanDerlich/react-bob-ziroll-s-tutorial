import React from 'react'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            firstName: "Pablo",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){ 
        return(   
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.firstName}
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
          )
    }
}