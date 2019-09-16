const INITIAL_STATE = {
  userLocation: null,
  data: [],
  error: false,
  errorMessage: null,
  success: false,
  successMessage: null,
  loading: false,
};

export default function places(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@places/LOAD_REQUEST':
      return {
        ...state,
        userLocation: action.payload.location,
        loading: true
      };
    case '@places/LOAD_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        error: false,
        errorMessage: null,
        loading: false,
      };
    case '@places/LOAD_FAILURE':
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
        loading: false,
      };
    default:
      return state;
  }
}
