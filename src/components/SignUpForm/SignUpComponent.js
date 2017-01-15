import React, {Component} from "react";
import {browserHistory} from "react-router";
import store from "store";
import {Form, Button, Message} from "semantic-ui-react";

class SignUpForm extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            videoURL: "videos/homePageBackgroundVideo.mp4"
        };
        this.validation = this.validation.bind(this);
        this.enterEvent = this.enterEvent.bind(this);
        this.cancelButtonClick = this.cancelButtonClick.bind(this);
        this.hashCode = this.hashCode.bind(this);
    }

    cancelButtonClick(formdata) {
        formdata = {};
        browserHistory.push("/");
    }

    hashCode(str) {
        str += "";
        return str.split("").reduce((prevHash, currVal) =>
        ((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
    }

    validation(e, {formData}) {
        e.preventDefault();
        const registeredUsersList = store.get("usersList");
        const firstName = formData.firstName;
        const userName = formData.username;
        const eMail = formData.email;
        const password = formData.password;
        const rePassword = formData.reTypePassword;
        const pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        let emptyFields = true;
        let errorMessage = "";
        let userMatch;
        for (let key of Object.keys(formData)) {
            if (formData[key] === "") {
                emptyFields = false;
            }
        }
        if (registeredUsersList) {
            userMatch = registeredUsersList.filter((user) => {
                if ((userName.value === user.userName || eMail.value === user.eMail)) {
                    return true;
                }
                return false;
            });
        } else {
            userMatch = false;
        }

        if (!emptyFields) {
            errorMessage = "Please fill all fields below";
        } else if (userMatch.length) {
            errorMessage = "Username or email already registered";

        } else {
            if (eMail.search(pattern) !== 0) {
                errorMessage = "Invalid email address";
            } else if (password !== rePassword) {
                errorMessage = "Your passwords don't match";
            } else {
                const hashedPass = this.hashCode(password);
                const userInfo = {
                    "userName": userName,
                    "firstName": firstName,
                    "eMail": eMail,
                    "password": hashedPass,
                    "logInStatus": false
                };
                this.props.actions.create("userList", userInfo);
            }
        }
        (errorMessage ? this.setState({errorMessage: errorMessage}) : browserHistory.push("/login"));
    }

    enterEvent(e) {
        if (e.charCode === 13) {
            this.validation();
        }
    }

    render() {
        return (
            <div className="signUpPageContainer">
                <video id="background-video" loop autoPlay muted>
                    <source src={this.state.videoURL} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <Form size="large" className="signUpFormContainer" onSubmit={this.validation}>
                    <Form.Group className="signUpFormPanelContainer" widths="equal">
                        <Form.Field className="signUpFormHeaderContainer">
                            <label>SIGN UP</label>
                        </Form.Field>
                        <Form.Group className="signUpFormFieldsContainer">
                            <Message>
                                <pre className="loginFormErrorMessage"> {this.state.errorMessage}</pre>
                            </Message>
                            <Form.Input className="signUpFormFieldContainer"
                                        label="First Name*"
                                        name="firstName"
                                        placeholder="Enter Your First Name"
                                        onKeyPress={this.enterEvent}
                            />
                            <Form.Input className="signUpFormFieldContainer"
                                        label="Username*"
                                        name="username"
                                        placeholder="Enter Username"
                                        onKeyPress={this.enterEvent}
                            />
                            <Form.Input className="signUpFormFieldContainer"
                                        label="Email*"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        onKeyPress={this.enterEvent}
                            />
                            <Form.Input className="signUpFormFieldContainer"
                                        label="Password*"
                                        name="password"
                                        type="password"
                                        placeholder="Enter Your Password"
                                        onKeyPress={this.enterEvent}
                            />
                            <Form.Input className="signUpFormFieldContainer"
                                        label="Re-Type Password*"
                                        name="reTypePassword"
                                        type="password"
                                        placeholder="Re-type Your Password"
                                        onKeyPress={this.enterEvent}
                            />
                        </Form.Group>
                    </Form.Group>
                    <Button type="submit" className="footerButton">Sign Up</Button>
                    <Button type="reset" className="footerButton" onClick={this.cancelButtonClick}>Cancel</Button>
                </Form>
            </div>
        );
    }
}

export default SignUpForm;