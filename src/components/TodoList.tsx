import React from 'react';
import TodoCard from './TodoCard';
import { IProps } from '../App';

const TodoList: React.FC<IProps> = ({ todos, setTodos }) => {
  todos.sort((a, b) => a.id - b.id);

  return (
    <main id="todo-list">
      <h2>To Do List</h2>
      <section id="todoList" className="todo-list__list">
        {todos.length >= 1 && todos.map((todo) => (
          <TodoCard todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
        ))}
      </section>
    </main>
  );
};

export default TodoList;
