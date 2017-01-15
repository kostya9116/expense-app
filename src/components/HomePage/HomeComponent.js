import React, {Component} from "react";
import HomePageBackgroundVideoComponent from "../HomePageBackgroundVideo/HomePageBackgroundVideoComponent";
import {Button, ButtonToolbar} from "react-bootstrap";
import {browserHistory} from "react-router";

class Home extends Component {
    constructor(props) {
        super(props);
        this.loginButtonClick = this.loginButtonClick.bind(this);
        this.signUpButtonClick = this.signUpButtonClick.bind(this);
    }

    loginButtonClick() {
        browserHistory.push("/login");
    }

    signUpButtonClick() {
        browserHistory.push("/sign_up");
    }

    render() {
        return (
            <div className="homePageContainer">
                <HomePageBackgroundVideoComponent/>
                <ButtonToolbar>
                    <Button className="footerButton"
                            onClick={this.loginButtonClick}
                    >
                        Log In
                    </Button>
                    <Button className="footerButton"
                            onClick={this.signUpButtonClick}
                    >
                        Sign Up
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Home;