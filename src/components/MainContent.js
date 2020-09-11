import React from 'react'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {                
                const memes = response.data.memes
                this.setState({allMemeImgs: memes})
            })
        this.handleChange =  this.handleChange.bind(this)
        this.randomlyPickImage = this.randomlyPickImage.bind(this)
    }
   
    handleChange(event){        
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    randomlyPickImage(event){        console.log("Randomly pick an Image")        
        const pickedImg = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)]
        console.log(pickedImg)
        this.setState({
            randomImg: pickedImg.url
        })
        event.preventDefault()
    }

    render(){ 
        return(
            <main>
              <form className="meme-form" onSubmit={this.randomlyPickImage}>
                    <label> Top Text
                        <input 
                            type="text"
                            name="topText"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />  
                    </label>        
                    <label> Bottom Text                                
                        <input 
                            type="text"
                            name="bottomText"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />  
                    </label>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </main>
          )
    }
}