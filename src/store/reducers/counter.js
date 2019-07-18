import * as actionTypes from '../../store/actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  counter: 0
};

// N.B. Immutable Update Patterns -> https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, {counter: state.counter + 1});
    case actionTypes.DECREMENT:
      return updateObject(state, {counter: state.counter - 1});
    case actionTypes.ADD:
      return updateObject(state, {counter: state.counter + action.payload.value});
    case actionTypes.SUBTRACT:
      return updateObject(state, {counter: state.counter - action.payload.value});
    default:
      return state;
  }
};

export default reducer;
