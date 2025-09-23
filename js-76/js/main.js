"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosContainer = document.querySelector('.todos');

function createTodoElement(todo) {
  const li = document.createElement('li');
  li.classList.add('todo');
  if (todo.is_completed) {
    li.classList.add('completed');
  }
  li.dataset.id = todo.id;

  const textDiv = document.createElement('div');
  textDiv.classList.add('todo-text');
  textDiv.textContent = todo.text;

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('todo-actions');

  const completeBtn = document.createElement('button');
  completeBtn.classList.add('button-complete', 'button');
  completeBtn.innerHTML = '&#10004;';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('button-delete', 'button');
  deleteBtn.innerHTML = '&#10006;';

  actionsDiv.append(completeBtn, deleteBtn);
  li.append(textDiv, actionsDiv);

  return li;
}

function handleCreateTodo(todos, text) {
  const newTodo = createTodo(todos, text);
  const todoElement = createTodoElement(newTodo);
  todosContainer.appendChild(todoElement);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;
  handleCreateTodo(todos, text);
  input.value = '';
  input.focus();
});

todosContainer.addEventListener('click', e => {
  const target = e.target;
  const todoElement = target.closest('.todo');
  if (!todoElement) return;

  const todoId = Number(todoElement.dataset.id);

  if (target.classList.contains('button-complete')) {
    const updatedTodo = completeTodoById(todos, todoId);
    if (updatedTodo) {
      todoElement.classList.toggle('completed', updatedTodo.is_completed);
    }
  }

  if (target.classList.contains('button-delete')) {
    deleteTodoById(todos, todoId);
    todoElement.remove();
  }
});

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
