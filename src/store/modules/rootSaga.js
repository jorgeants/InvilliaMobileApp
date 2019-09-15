import { all } from 'redux-saga/effects';

import users from './users/sagas';
import places from './places/sagas';

export default function* rootSaga() {
  return yield all([
    users,
    places
  ]);
}
