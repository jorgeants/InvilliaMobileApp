import { combineReducers } from 'redux';

import users from './users/reducers'
import places from './places/reducers'

export default combineReducers({
  users,
  places,
});
