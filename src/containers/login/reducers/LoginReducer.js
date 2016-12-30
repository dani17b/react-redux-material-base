import * as types from '../../../constants/ActionTypes';

const initialState = {
  "userCredentials" : null,
  "loginInfo" : null
 };

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_PASS_REQUEST:
        return {
          ...state,
          userCredentials : action.userPass
        };
      break;
    case types.LOGIN_USER_PASS_RESPONSE:
          return {
            ...state,
            loginInfo : action.loginInfo
          };
        break;
    default:
      return state;
  }
}
