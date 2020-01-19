import * as todosTypes from './todos.type';

import { filterData, updateData } from '../../../utils/utils';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  let newData;

  switch (action.type) {
    case `${todosTypes.ADD_TODOS}`:
      newData = updateData(state.todos, action.payload);
      return { ...state, todos: newData };

    case `${todosTypes.DELETE_TODOS}`:
      newData = filterData(state.todos, action.payload);
      return { ...state, todos: newData };

    default:
      return state;
  }
};

export default reducer;
