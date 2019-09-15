import { all, takeLatest, call, put } from 'redux-saga/effects';

// import { apiLocation } from '../../../services/api';

import * as StatesActions from './actions';

function* loadStatesRequest() {
  try {
    // const response = yield call(
    //   apiLocation.get,
    //   '/localidades/estados',
    // );

    yield put(StatesActions.loadStatesSuccess(''));
  } catch (error) {
    yield put(StatesActions.loadStatesFailure());
  }
}

export default all([takeLatest('@states/LOAD_REQUEST', loadStatesRequest)]);
