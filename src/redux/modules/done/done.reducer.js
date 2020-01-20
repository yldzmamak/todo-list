import * as donesTypes from './done.type';
import { filterData, updateData } from '../../../utils/utils';

const initialState = {
  dones: [],
};

const reducer = (state = initialState, action) => {
  let newData;

  switch (action.type) {
    case `${donesTypes.ADD_DONE}`:
      newData = updateData(state.dones, action.payload);
      return { ...state, dones: newData };

    case `${donesTypes.DELETE_DONE}`:
      newData = filterData(state.dones, action.payload);
      return { ...state, dones: newData };

    default:
      return state;
  }
};

export default reducer;
