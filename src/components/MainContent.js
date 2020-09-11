import React from 'react'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
    }
   


    render(){ 
        return(
            <main>
              Main Component
            </main>
          )
    }
}