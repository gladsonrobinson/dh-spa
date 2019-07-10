export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SET_FETCH_STATUS = "SET_FETCH_STATUS";
export const GET_WEATHER_DATA = "GET_WEATHER_DATA";

export const getWeatherByCity = searchKey => {
  return {
    type: GET_WEATHER_DATA,
    payload: {
      searchKey
    }
  };
};

export const fetchStart = () => {
  return {
    type: SET_FETCH_STATUS
  };
};

export const searchSuccess = data => {
  return {
    type: SEARCH_SUCCESS,
    data
  };
};

export const searchFailure = error => {
  return {
    type: SEARCH_FAILURE,
    error
  };
};
