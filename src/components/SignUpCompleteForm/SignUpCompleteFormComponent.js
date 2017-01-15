import React, {Component} from "react";
import HomePageBackgroundVideoComponent from "../HomePageBackgroundVideo/HomePageBackgroundVideoComponent";
import {browserHistory} from "react-router";
import {Grid, Form, label, Button, Message} from "semantic-ui-react";

class SignUpCompleteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showStatus: this.props.state.signUp.signUpCompletedStatus
        };
        this.closeButtonClick = this.closeButtonClick.bind(this);
        this.loginButtonClick = this.loginButtonClick.bind(this);
    }

    closeButtonClick() {
        browserHistory.push("/");
        this.props.changeSignUpCompletedStatus(false);
    }

    loginButtonClick() {
        browserHistory.push("/login");
        this.props.changeSignUpCompletedStatus(false);
    }

    render() {
        if (this.state.showStatus) {
            return (
                <Grid className="signUpCompletedPageContainer">
                    <HomePageBackgroundVideoComponent/>
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
        } else {
            return (
                <Grid className="signUpCompletedPageContainer">
                    <HomePageBackgroundVideoComponent/>
                    <Form size="large" className="signUpCompleteFormContainer">
                        <Form.Group className="signUpCompletePanelContainer" widths="equal">
                            <Form.Field className="signUpCompletedPageMessage">
                                <label>!!!Something went wrong!!!</label>
                            </Form.Field>
                            <Message className="signUpCompleteFormParagraphText">
                                <pre> The page doesn't exist</pre>
                            </Message>
                        </Form.Group>

                    </Form>
                </Grid>)
        }
    }
}
export default SignUpCompleteForm;