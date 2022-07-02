import { useState, useEffect } from 'react'

export const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: todos.length + 1, title: inputValue, completed: false }]);
  }

  return (
    <div>
      <form>
        <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Add Todo" />
        <button onClick={(e) => handleAddTodo(e)} type="submit">Add</button>
      </form>
    </div>
  )
}
