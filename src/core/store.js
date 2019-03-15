import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../redux/reducers';
// import * as middleware from 'redux/middleware';

// const middlewares = [middleware.error, thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(...middlewares))
// );

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;