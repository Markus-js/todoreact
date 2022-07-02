import React from 'react'

export const TodoCard = ({ title, setTodos }) => {
  return (
    <div className="todo-list__card" >{title}</div>
  )
}
