import * as inProgressTypes from './inProgress.type';

export const addInProgress = inProgress => {
  return { type: inProgressTypes.ADD_IN_PROGRESS, payload: inProgress };
};

export const deleteInProgress = inProgress => {
  return { type: inProgressTypes.DELETE_IN_PROGRESS, payload: inProgress };
};
