import * as donesTypes from './done.type';

export const addDone = done => {
  return { type: donesTypes.ADD_DONE, payload: done };
};

export const deleteDone = done => {
  return { type: donesTypes.DELETE_DONE, payload: done };
};
