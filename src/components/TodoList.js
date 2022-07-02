import React from 'react'
import { TodoCard } from './TodoCard';

export const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      todo list
      {todos && todos.map(todo => {
        return (
          <div key={todo.id}>
            <TodoCard title={todo.title} setTodos={setTodos} />
          </div>
        )
      })}
    </div>

  )
}