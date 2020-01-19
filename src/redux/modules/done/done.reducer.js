import * as donesTypes from './done.type';

const initialState = {
  dones: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${donesTypes.ADD_DONE}`:
      const newData = [...state.dones, action.payload];
      return { ...state, dones: newData };

    default:
      return state;
  }
};

export default reducer;
