import signUpReducer from "./modules/sign-up-module";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    // BOT: Reducer list here
    signUp: signUpReducer,
    routing: routerReducer
});

export default rootReducer;