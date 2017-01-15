import React from "react";
import { Provider } from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import store, {history} from "./store";

import App from "./components/App";
import * as Pages from "./pages";

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Pages.HomePage}/>
                <Route path="login" component={Pages.LoginPage}/>
                <Route path="sign_up" component={Pages.SignUpPage}/>
                <Route path="sign_up_completed" component={Pages.SignUpCompletedPage}/>
            </Route>
        </Router>
    </Provider>
);

export default routes;