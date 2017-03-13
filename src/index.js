import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { routerReducer, ConnectedRouter, routerMiddleware, replace } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { authenticationMiddleware } from './middlewares/authenticationMiddleware';
import * as reducers from './reducers';
import { LoginContainer, HomeContainer} from './containers';

const reducer = combineReducers({
  ...reducers,
  router : routerReducer
});

// Build the middleware for intercepting and dispatching navigation actions
const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(compose(
    applyMiddleware(authenticationMiddleware),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routeMiddleware)
  ))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={LoginContainer}/>
        <Route path="/home" component={HomeContainer}/>
      </div>
    </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);
