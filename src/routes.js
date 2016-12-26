import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {history} from "./store";

import App from "./components/App";
import * as Pages from "./pages";

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Pages.HomePage}/>
            <Route path="login" component={Pages.LoginPage}/>
            <Route path="sign_up" component={Pages.SignUpPage}/>
        </Route>
    </Router>
);

export default routes;