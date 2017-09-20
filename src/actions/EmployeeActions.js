/**
 * Created by sedir on 19/09/17.
 */
import * as types from "./types";
import firebase from 'firebase';
import {NavigationActions} from "react-navigation";

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
      });
  }
};