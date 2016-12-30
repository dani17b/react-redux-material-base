import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';
import { LoginContainer, HomeContainer} from './containers';

const reducer = combineReducers({
  ...reducers,
  routing : routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
  if (store.getState().login.loginInfo == null) {
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={LoginContainer}/>
        <Route path="home" component={HomeContainer} onEnter={requireAuth}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
