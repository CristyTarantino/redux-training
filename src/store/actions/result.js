import * as actionTypes from './actionTypes';

export const saveResult = ( result ) => ({
  type: actionTypes.STORE_RESULT, payload: {
    result: result
  }
});
export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctrRdc.counter;
      // console.log(oldCounter);
      // not a great practice, is better ig passed in the payload
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const deleteResult = (resultID) => ({ type: actionTypes.DELETE_RESULT, payload: {
    id: resultID
  }});