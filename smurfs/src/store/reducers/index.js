import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: true,
  errors: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    case POST_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
