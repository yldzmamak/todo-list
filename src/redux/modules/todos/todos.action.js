import * as todosTypes from './todos.type';

export const addTodo = todo => {
  return { type: todosTypes.ADD_TODOS, payload: todo };
};

export const deleteTodo = todo => {
  return { type: todosTypes.DELETE_TODOS, payload: todo };
};
