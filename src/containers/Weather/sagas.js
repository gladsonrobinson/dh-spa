import { put, call, fork, takeLatest, all } from "redux-saga/effects";
import * as actions from "./actions";
import { api } from "../../services";

function* getWeather(action) {
  try {
    yield put(actions.fetchStart());
    const data = yield call(api.fetchWeather, action.payload.searchKey);
    yield put(actions.searchSuccess(data));
  } catch (error) {
    yield put(actions.searchFailure(error));
  }
}

function* watchGetWeather() {
  yield takeLatest(actions.GET_WEATHER_DATA, getWeather);
}

export default function* weatherRootSaga() {
  yield all([fork(watchGetWeather)]);
}
