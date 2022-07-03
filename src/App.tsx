import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.scss';

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export interface IProps {
  todos: ITodos[];
  setTodos: (todos: ITodos[]) => void;
}

const init = () => {
  const exist = window.localStorage.getItem('todo');
  if (!exist) {
    window.localStorage.setItem('todo', JSON.stringify([]));
  }
  return JSON.parse(window.localStorage.getItem('todo') || '[]');
};

const App: React.FC = () => {
  const [todos, setTodos] = useState(init());

  return (
    <div className="todo-app">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
