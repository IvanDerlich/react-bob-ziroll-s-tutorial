import React from 'react'

export default function TodoItem(props) {
  console.log(props)  
  let checkbox = <input type="checkbox" />      
  if (props.item.completed)
    checkbox = <input type="checkbox" defaultChecked/>
  return (        
    <div className="todo-item">
      {checkbox}      
      <p>{props.item.text}</p>
      <hr/>
    </div>
  )
}