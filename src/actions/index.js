/**
 * Created by sedir on 15/09/17.
 */
import * as types from './types';
import firebase from 'firebase';
import { NavigationActions } from "react-navigation";

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  }
};

export const pullOtherScreen = (text) => {
  return {
    type: types.PULL_OTHER_SCREEN
  }
};


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_USER_LOADING
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((error) => loginUserFail(dispatch, error.code));
      });
  };
};


const loginUserFail = (dispatch, errorCode) => {
  dispatch({
    type: types.LOGIN_USER_FAIL,
    payload: errorCode
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });

  dispatch(NavigationActions.navigate({
    routeName: 'OtherScreen'
  }));

};