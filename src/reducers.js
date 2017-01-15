import signUpReducer from "./modules/sign-up-module";
import signUpCompletedReducer from "./modules/sign-up-completed-form-module";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    // BOT: Reducer list here
    signUp: signUpReducer,
    signUpCompletedReducer: signUpCompletedReducer,
    routing: routerReducer
});

export default rootReducer;