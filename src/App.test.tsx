import React from 'react';
import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import App from './App';


const deleteTodo = async (app: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>) => {
  const { getByTestId, getByText } = render(<App />);
  const completed = screen.getByTestId('todo--completed');
  fireEvent.click(completed);

  const remove = screen.getByTestId('todo__button--remove');
  fireEvent.click(remove);
}

const createTodo = async (app: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>) => {
  const inputValue = 'This is a test';
  // input
  const input = screen.getByTestId('txtTodoItemToAdd');
  fireEvent.change(input, { target: { value: inputValue } })
  // button
  const btn = screen.getByTestId('btnAddTodo');
  fireEvent.click(btn);
}

describe("<App />", () => {

  let app: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  beforeEach(() => {
    app = render(<App />);
  });

  test('Remove todo', async () => {
    const { getByTestId, getByText } = app;

    createTodo(app);
    deleteTodo(app);
    const items = await screen.findAllByRole('article')
    expect(items).toHaveLength(2)
  });

  test('Should reset input', () => {
    const { getByTestId, getByText } = app;
    const inputValue = 'Remove after btn click';
    // set input value
    const input = screen.getByTestId('txtTodoItemToAdd');
    fireEvent.change(input, { target: { value: inputValue } })
    // has value in input
    expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
    // remove value
    const btn = screen.getByTestId('btnAddTodo');
    fireEvent.click(btn);
    // input is empty
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  test('Create three todos', async () => {
    const { getByTestId, getByText } = app;
    const inputValue = 'Im a todo';
    // deleteTodo(app)
    // input
    const input = screen.getByTestId('txtTodoItemToAdd');
    fireEvent.change(input, { target: { value: inputValue } })

    // add
    const btn = screen.getByTestId('btnAddTodo');
    fireEvent.click(btn);
    // find todos
    const items = await screen.findAllByRole('article')
    expect(items).toHaveLength(3)
  });
})





  // const todoList = screen.getByTestId('todoList');
  // const completed = screen.getByTestId('todo--completed');
  // const toggle = screen.getByTestId('todo--toggle-completed');
  // const remove = screen.getByTestId('todo__button--remove');
