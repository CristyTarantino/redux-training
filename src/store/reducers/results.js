import * as actionType from '../actionConstants';

const initialState = {
  results: []
};

// N.B. Immutable Update Patterns -> https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, {id: new Date(), value: action.payload.result}]
      };
    case actionType.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducer;