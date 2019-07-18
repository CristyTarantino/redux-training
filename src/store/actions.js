import * as actionType from './actionConstants';

export const increment = () => ({ type: actionType.INCREMENT });
export const decrement = () => ({ type: actionType.DECREMENT });
export const add = (value) => ({ type: actionType.ADD, payload: {
    value: value
  }});
export const subtract = (value) => ({ type: actionType.SUBTRACT, payload: {
    value: value
  }});
export const storeResult = (result) => ({ type: actionType.STORE_RESULT, payload: {
    result: result
  }});
export const deleteResult = (resultID) => ({ type: actionType.DELETE_RESULT, payload: {
    id: resultID
  }});