import {createStore, compose, applyMiddleware} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import rootReducer from "./reducers";
import promiseMiddleware from "redux-promise-middleware";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";

const initialState = {
   //signUpCompletedStatus: false
};

const loggerMiddleware = createLogger();
const middlewares = [thunk, promiseMiddleware(), loggerMiddleware];

const enhancers = [persistState("local")];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;