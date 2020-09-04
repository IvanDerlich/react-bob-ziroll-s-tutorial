import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'


export default function MainContent() {

  return (
    <div className="todo-list"> 
      {todosData.map((item) => <TodoItem key={item.id} item={item}/>)}
    </div>
  )
}