export const loadStatesRequest = () => ({
  type: '@states/LOAD_REQUEST'
})

export const loadStatesSuccess = data => ({
  type: '@states/LOAD_SUCCESS',
  payload: { data },
});

export const loadStatesFailure = () => ({
  type: '@states/LOAD_FAILURE',
});
