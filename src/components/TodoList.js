import { TodoCard } from './TodoCard';

export const TodoList = ({ todos, setTodos }) => {
  todos.sort((a, b) => a.id - b.id);

  return (
    <main className="todo-list">
      <h2>To Do List</h2>
      <section id="todoList" className="todo-list__list">
        {todos.length >= 1 && todos.map(todo => {
          return (
            <TodoCard todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
          )
        })}
      </section>
    </main>

  )
}