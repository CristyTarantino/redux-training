import * as actionType from '../actionConstants';

const initialState = {
  counter: 0
};

// N.B. Immutable Update Patterns -> https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      };
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      };
    default:
      return state;
  }
};

export default reducer;