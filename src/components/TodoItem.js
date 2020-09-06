import React from "react"

export default class TodoItem extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            done: props.item.completed
        }
    }

    render(){
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.state.done} 
                    //onClick={this.handleClick}
                    onChange={this.props.onChange}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
    
}