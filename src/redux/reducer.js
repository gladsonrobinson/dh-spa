import { combineReducers } from "redux";
import WeatherReducers from "../containers/Weather/reducers";

const AppReducer = combineReducers({
  weather: WeatherReducers
});

export default AppReducer;
