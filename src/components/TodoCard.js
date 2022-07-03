import React from 'react'
import { BiUndo } from 'react-icons/bi';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";


export const TodoCard = ({ todo, todos, setTodos }) => {

  const handleDelete = () => {
    const newList = todos.filter(t => t.id !== todo.id)
    setTodos(newList);
    // LOCAL STOTAGE
    window.localStorage.setItem('todo', JSON.stringify(newList));
  }

  const handleComplete = () => {
    const newList = todos.filter(t => t.id !== todo.id)
    todo.completed = !todo.completed;
    setTodos([...newList, todo]);
    // LOCAL STOTAGE
    window.localStorage.setItem('todo', JSON.stringify([...newList, todo]));

  }


  return (
    <article className={todo.completed ? "todo-list__card todo-list__card--completed todo todo--completed" : "todo-list__card todo"} >
      <h3 className="todo-list__title" >{todo.title}</h3>
      <div>
        <button
          onClick={handleComplete}
          className={todo.completed ? "todo--toggle-completed btn btn--yellow" : "todo--toggle-completed btn btn--green"}
          type="button"
        >
          {todo.completed ? <BiUndo className="icon" /> : <MdOutlineDone className="icon" />}
        </button>
        {todo.completed &&
          <button
            onClick={handleDelete}
            className="todo__button--remove btn btn--red"
            type="button"
          >
            <RiDeleteBinLine className="icon" />
          </button>
        }
      </div>
    </article>
  )
}
