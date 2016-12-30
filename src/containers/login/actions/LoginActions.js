import * as types from '../../../constants/ActionTypes';
import {browserHistory} from 'react-router';

export function loginUserPassRequest(userPass) {
  return {
    type : types.LOGIN_USER_PASS_REQUEST,
    userPass
  }
}

export function loginUserPassResponse(response) {
  return {
    type : types.LOGIN_USER_PASS_RESPONSE,
    loginInfo : response
  }
}

export function loginApiUserPass(userPass){
  return dispatch => {
    dispatch(loginUserPassRequest(userPass))
    /* return fetch('apiurl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPass)})
      .then(response => response.json())
      .then(json => dispatch(loginUserPassResponse(json)))
      .then(() => { browserHistory.push('/home')}) */

    // Replace this code with commented
    dispatch(loginUserPassResponse({loginInfo : "token"}));
    browserHistory.push('/home');
  }
}
