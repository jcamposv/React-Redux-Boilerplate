import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import user from './user';

export default combineReducers({
  routing: routerReducer,
  user,
});
