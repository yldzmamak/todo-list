import { combineReducers } from 'redux';

import todos from './todos/todos.reducer';
import inProgress from './inProgress/inProgress.reducer';
import dones from './done/done.reducer';

const rootReducer = combineReducers({
  todos,
  inProgress,
  dones,
});

export default rootReducer;
