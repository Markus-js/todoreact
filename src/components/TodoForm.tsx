import React, { useState, useRef, MouseEvent } from 'react';
import { IProps } from '../App';

const TodoForm: React.FC<IProps> = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTodo = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const id = new Date().getTime();

    if (inputValue.trim() === '') {
      return;
    }

    setTodos([...todos, { id, title: inputValue, completed: false }]);
    // LOCAL STOTAGE
    window.localStorage.setItem('todo', JSON.stringify([...todos, { id, title: inputValue, completed: false }]));
    setInputValue('');
    inputRef.current!.value = '';
  };

  return (
    <section className="todo-form">
      <form>
        <input onChange={(e) => setInputValue(e.target.value)} ref={inputRef} id="txtTodoItemToAdd" data-testid="txtTodoItemToAdd" type="text" placeholder="Add Todo" required />
        <button onClick={(e) => handleAddTodo(e)} id="btnAddTodo" className="btn" data-testid="btnAddTodo" type="submit">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
