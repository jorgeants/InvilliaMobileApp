import { all } from 'redux-saga/effects';

import places from './places/sagas';

export default function* rootSaga() {
  return yield all([
    places
  ]);
}
