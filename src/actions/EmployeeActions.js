/**
 * Created by sedir on 19/09/17.
 */
import * as types from "./types";
import firebase from 'firebase';
import {NavigationActions} from "react-navigation";

export const pullCreateEmployee = () => {
  return dispatch => dispatch({
    type: types.PULL_CREATE_EMPLOYEE
  });
};

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: types.EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch(NavigationActions.back());
        dispatch({
          type: types.EMPLOYEE_CREATE
        });
      });
  }
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot =>{
        dispatch({ type: types.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
};