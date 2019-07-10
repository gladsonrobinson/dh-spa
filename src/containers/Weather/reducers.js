import { SEARCH_SUCCESS, SET_FETCH_STATUS, SEARCH_FAILURE } from "./actions";

let initialState = {
  forcastData: [],
  errorMessage: "",
  fetchStatus: false
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        fetchStatus: false,
        forcastData: action.data.list,
        errorMessage: ""
      };
    case SET_FETCH_STATUS:
      return { ...state, fetchStatus: true, forcastData: [], errorMessage: "" };
    case SEARCH_FAILURE:
      return { ...state, fetchStatus: false, errorMessage: action.error };
    default:
      return state;
  }
};

export default weather;
