import * as inProgressTypes from './inProgress.type';

const initialState = {
  inProgress: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${inProgressTypes.ADD_IN_PROGRESS}`:
      const newData = [...state.inProgress, action.payload];
      return { ...state, inProgress: newData };

    default:
      return state;
  }
};

export default reducer;
