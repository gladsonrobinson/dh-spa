import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import AppReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

const initialState = {};
const middleware = [sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

export default createStore(
  connectRouter(history)(AppReducer),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
