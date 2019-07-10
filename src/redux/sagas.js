import weatherRootSaga from "../containers/Weather/sagas";
import { fork, all } from "redux-saga/effects";

export default function* root() {
  yield all([fork(weatherRootSaga)]);
}
