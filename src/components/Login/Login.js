import React, {Component} from "react";
import "../../../assets/styles/homePageStyle.scss";
import {browserHistory} from "react-router";
import {
    Grid,
    Col,
    Panel,
    FormGroup,
    InputGroup,
    Glyphicon,
    FormControl,
    Button,
    ButtonToolbar,
    Row
} from "react-bootstrap";

class LogInForm extends Component {

    render() {
        return (
            <div>
                <Grid className="logInFormComponentContainer">
                    <Row>
                        <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={8} smOffset={2} xs={8} xsOffset={2}>
                            <Panel className="loginFormPanelContainer" header="Log In">
                                <form className="logInFormFieldsContainer form-horizontal ">
                                    <FormGroup className="loginFormFieldContainer input-group">
                                        <InputGroup>
                                            <InputGroup.Addon>
                                                <Glyphicon glyph="user"/>
                                            </InputGroup.Addon>
                                            <FormControl type="text" name="usernameLogIn"
                                                         placeholder="username or email"
                                                         ref="logInUserName"/>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="loginFormFieldContainer input-group">
                                        <InputGroup>
                                            <InputGroup.Addon>
                                                <Glyphicon glyph="lock"/>
                                            </InputGroup.Addon>
                                            <FormControl type="password" name="passwordLogIn"
                                                         placeholder="password"
                                                         ref="logInPassword"/>
                                        </InputGroup>
                                    </FormGroup>
                                </form>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <ButtonToolbar className="logInFormButtonsContainer">
                            <Button className="footerButton">
                                Log In
                            </Button>
                            <Button className="footerButton">
                                Cancel
                            </Button>
                        </ButtonToolbar>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default LogInForm;