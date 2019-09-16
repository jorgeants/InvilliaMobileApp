export const loadPlacesRequest = location => ({
  type: '@places/LOAD_REQUEST',
  payload: { location },
})

export const loadPlacesSuccess = data => ({
  type: '@places/LOAD_SUCCESS',
  payload: { data },
});

export const loadPlacesFailure = errorMessage => ({
  type: '@places/LOAD_FAILURE',
  payload: { errorMessage }
});
