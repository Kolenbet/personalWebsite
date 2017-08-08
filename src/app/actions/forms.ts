import * as actionTypes from '../constants/actionTypes';

export function changeField(formName, fieldName, value) {
  return {
    type: actionTypes.CHANGE_FIELD,
    payload: {
      formName,
      fieldName,
      value
    }
  };
}

export function clearForm(formName) {
  return {
    type: actionTypes.CLEAR_FORM,
    payload: {
      formName
    }
  };
}

export function setData(formName, data) {
  return {
    type: actionTypes.SET_DATA,
    payload: {
      formName,
      data
    }
  };
}