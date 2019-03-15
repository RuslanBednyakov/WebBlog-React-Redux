import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux';

import userSettings from './userSettings';
import posts from './posts';
import users  from './users';
// import error from './error';

// export default combineReducers({
//   userSettings,
//   posts,
//   users,
//   error,
//   routing: routerReducer
// })

export default combineReducers({
  posts,
  users,
  userSettings
})