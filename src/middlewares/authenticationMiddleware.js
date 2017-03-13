import { replace } from 'react-router-redux';

// Authentication middleware
export const authenticationMiddleware = store => next => action => {
  if(action.type && action.type.endsWith("LOCATION_CHANGE")){
    if(store.getState().login.loginInfo == null &&(action.payload.pathname != "" && action.payload.pathname != "/")){
      store.dispatch(
        replace({
          pathname: '/'
        })
      );
    }
  }
  next(action);
}
