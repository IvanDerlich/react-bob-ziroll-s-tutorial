import React from "react"

export default class TodoItem extends React.Component {

    render(){
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed} 
                    //onClick={this.handleClick}
                    onChange={() => this.props.handleTodoItemOnChange(this.props.item.id)}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}