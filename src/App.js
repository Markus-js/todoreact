import { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './App.scss';

const todosList = [{ id: 1, title: 'Todo 1', completed: false }, { id: 2, title: 'Todo 2', completed: true }];

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(todos)
  })

  return (
    <div className="todo-app">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
