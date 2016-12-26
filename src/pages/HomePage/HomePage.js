import React, {Component} from "react";
import "./style/homePageStyle.scss";
import {Button, ButtonToolbar} from "react-bootstrap";
import {browserHistory} from "react-router";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: "videos/homePageBackgroundVideo.mp4"
        };
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
                <video id="background-video" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
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