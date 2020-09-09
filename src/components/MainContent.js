import React from 'react'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            loading: false,
            character: {dsfg:"sdfgd"}         
        }
    }

    componentDidMount() {        
        this.setState({
            loading: true,
        })
        fetch("https://swapi.dev/api/people/5")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                        character: data,
                        loading: false
                    }
                )
            })        
    }
    
    render(){
        const text = this.state.loading ?
            "Loading..." : 
            this.state.character.name
        return(   
            <div>      
                {text}
            </div> 
          )
    }
}