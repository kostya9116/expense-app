import React, {PropTypes} from "react";
import "./App.scss";
import Helmet from "react-helmet";

const App = (props) => (
    <div className="fieldsContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Helmet
            title="Expense Manager"
            link={[
                {rel: "shortcut icon", href: "./images/favicon.png"},
            ]}/>

        {props.children}
    </div>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node,
    ]),
};

export default App;
