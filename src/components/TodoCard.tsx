import React from 'react';
import { BiUndo } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineDone } from 'react-icons/md';
import { ITodos } from '../App';

interface IProps {
  todo: ITodos;
  todos: ITodos[];
  setTodos: (todos: ITodos[]) => void;
}


const TodoCard: React.FC<IProps> = ({ todo, todos, setTodos }) => {

  const todosArrayWithoutCurrentTodo = () => todos.filter((t) => t.id !== todo.id);

  const handleDeleteTodo = () => {
    const newList = todosArrayWithoutCurrentTodo();
    setTodos(newList);
    // LOCAL STOTAGE
    window.localStorage.setItem('todo', JSON.stringify(newList));
  };

  const handleReverseTodoCompletionState = () => {
    const newList = todosArrayWithoutCurrentTodo();
    todo.completed = !todo.completed;
    setTodos([...newList, todo]);
    // LOCAL STOTAGE
    window.localStorage.setItem('todo', JSON.stringify([...newList, todo]));
  };

  return (
    <article id={todo.completed ? 'todo--completed' : 'null'} className={todo.completed ? 'todo-list__card todo-list__card--completed todo todo--completed' : 'todo-list__card todo'}>
      <h3 className="todo-list__title">{todo.title}</h3>
      <div>
        <button
          onClick={handleReverseTodoCompletionState}
          id='todo--toggle-completed'
          className={todo.completed ? 'todo--toggle-completed btn btn--yellow' : 'todo--toggle-completed btn btn--green'}
          type="button"
        >
          {todo.completed ? <BiUndo className="icon" /> : <MdOutlineDone className="icon" />}
        </button>
        {todo.completed
          && (
            <button
              onClick={handleDeleteTodo}
              id='todo__button--remove'
              className="todo__button--remove btn btn--red"
              type="button"
            >
              <RiDeleteBinLine className="icon" />
            </button>
          )}
      </div>
    </article>
  );
};

export default TodoCard;
