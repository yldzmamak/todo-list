import * as inProgressTypes from './inProgress.type';

import { filterData, updateData } from '../../../utils/utils';

const initialState = {
  inProgress: [],
};

const reducer = (state = initialState, action) => {
  let newData;

  switch (action.type) {
    case `${inProgressTypes.ADD_IN_PROGRESS}`:
      newData = updateData(state.inProgress, action.payload);
      return { ...state, inProgress: newData };

    case `${inProgressTypes.DELETE_IN_PROGRESS}`:
      newData = filterData(state.inProgress, action.payload);
      return { ...state, inProgress: newData };

    default:
      return state;
  }
};

export default reducer;
