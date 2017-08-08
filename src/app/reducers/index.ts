import {combineReducers} from 'redux';
import formReducer from './forms';

export default combineReducers({
  form: formReducer
});