import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './App.scss';

const init = () => {
  const exist = window.localStorage.getItem('todo')
  if (!exist) {
    window.localStorage.setItem('todo', JSON.stringify([]));
  }
  return JSON.parse(window.localStorage.getItem('todo'))
}

function App() {
  const [todos, setTodos] = useState(init() || []);

  return (
    <div className="todo-app">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
