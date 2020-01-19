import { authAction } from '../modules';

export const handleAuthenticated = ({ dispatch }) => next => action => {
  if (action.payload && action.payload.status === 401) {
    dispatch(authAction.logout());
  } else {
    next(action);
  }
};
