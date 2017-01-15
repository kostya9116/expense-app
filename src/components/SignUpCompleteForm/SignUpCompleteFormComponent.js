import React, {Component} from "react";
import {browserHistory} from "react-router";
import {Grid, Form, label, Button, Message} from "semantic-ui-react";

class SignUpCompleteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoURL: "videos/homePageBackgroundVideo.mp4"
        };
        this.closeButtonClick = this.closeButtonClick.bind(this);
        this.loginButtonClick = this.loginButtonClick.bind(this);
    }

    closeButtonClick() {
        browserHistory.push("/")
    }

    loginButtonClick() {
        browserHistory.push("/login");
    }

    render() {
        return (
            <Grid className="signUpCompletedPageContainer">
                <video id="background-video" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <Form size="large" className="signUpCompleteFormContainer">
                    <Form.Group className="signUpCompletePanelContainer" widths="equal">
                        <Form.Field className="signUpCompletedPageMessage">
                            <label>Thank you for registering</label>
                        </Form.Field>
                        <Message className="signUpCompleteFormParagraphText">
                        <pre> Now you can log in with your username and
                                password.</pre>
                        </Message>
                    </Form.Group>
                    <Form.Group className="footerButtonsContainer">
                        <Button className="footerButton"
                                onClick={this.loginButtonClick}>
                            Log In
                        </Button>
                        <Button className="footerButton"
                                onClick={this.closeButtonClick}>
                            Close
                        </Button>
                    </Form.Group>
                </Form>
            </Grid>
        );
    }
}
export default SignUpCompleteForm;