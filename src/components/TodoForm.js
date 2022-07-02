import { useState, useRef } from 'react'

export const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    setTodos([...todos, { id: todos.length + 1, title: inputValue, completed: false }]);
    window.localStorage.setItem('todo', JSON.stringify([...todos, { id: todos.length + 1, title: inputValue, completed: false }]))
    setInputValue('');
    inputRef.current.value = null;
  }

  return (
    <section className="todo-form">
      <form>
        <input onChange={(e) => setInputValue(e.target.value)} ref={inputRef} id="txtTodoItemToAdd" type="text" placeholder="Add Todo" required />
        <button onClick={(e) => handleAddTodo(e)} id="btnAddTodo" className="btn" type="submit">Add</button>
      </form>
    </section>
  )
}
