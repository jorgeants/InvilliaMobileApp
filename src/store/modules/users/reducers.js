const INITIAL_STATE = {
  data: [],
  error: false,
  errorMessage: null,
  success: false,
  successMessage: null,
  loading: false,
};

export default function states(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@states/LOAD_REQUEST':
      return { ...state, loading: true };
    case '@states/LOAD_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        error: false,
        errorMessage: null,
        loading: false,
      };
    case '@states/LOAD_FAILURE':
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
