import React from "react"

export default class TodoItem extends React.Component {
   
    render(){
        const doneStyle = {
            color: "#cdcdcd",
            fontStyle: "italic",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input                     
                    type="checkbox" 
                    checked={this.props.item.completed} 
                    onChange={() => this.props.handleTodoItemOnChange(this.props.item.id)}
                />
                <p
                    style={this.props.item.completed ? doneStyle : null}
                >{this.props.item.text}</p>
            </div>
        )
    }
}