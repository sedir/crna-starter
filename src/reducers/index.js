/**
 * Created by sedir on 15/09/17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer
});