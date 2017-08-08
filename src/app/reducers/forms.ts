import * as actionTypes from '../constants/actionTypes';

const objectAssign = require('object-assign');

const defaultState = {};

export default (state = defaultState, action) => {
  let form;

  switch (action.type) {
    case actionTypes.CHANGE_FIELD:
      const { formName, fieldName, value } = action.payload;
      return objectAssign({}, state, {
        [formName]: {
          [fieldName]: value
        },
      });

    case actionTypes.CLEAR_FORM:
      return objectAssign({}, state, {
        [action.payload.formName]: {}
      });

    case actionTypes.SET_DATA:
      return objectAssign({}, state, {
        [action.payload.formName]: action.payload.data
      });

    default:
      return state;
  }
};