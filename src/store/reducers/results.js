import * as actionTypes from '../../store/actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.payload.id);
  return updateObject(state, {results: updatedArray});
};

// N.B. Immutable Update Patterns -> https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: [...state.results, {id: new Date(), value: action.payload.result}]});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default reducer;