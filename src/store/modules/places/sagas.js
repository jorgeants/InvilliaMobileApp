import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Environment } from '~/config/environment';

import { api } from '~/services/api';

import * as PlacesActions from './actions';

function* loadPlacesRequest(action) {
  try {
    const { latitude, longitude } = action.payload.location.coords;

    const response = yield api.get(
      `/nearbysearch/json?location=${latitude},${longitude}`,
      {
        params: {
          radius: 200,
          key: Environment.Google_Places_API_Key,
        },
      }
    );

    yield put(PlacesActions.loadPlacesSuccess(response.data.results));
  } catch (error) {
    console.tron.log(error);
    yield put(PlacesActions.loadPlacesFailure("Error ao carregar os locais próximos"));
  }
}

export default all([takeLatest('@places/LOAD_REQUEST', loadPlacesRequest)]);
