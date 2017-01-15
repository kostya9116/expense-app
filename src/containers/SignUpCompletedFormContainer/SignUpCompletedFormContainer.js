import React, {Component} from "react";
import SignUpCompleteForm from "../../components/SignUpCompleteForm/SignUpCompleteFormComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {bindComplexActionCreators} from "rrmb-generator-utils";
import {actions, complexActions} from "../../modules/sign-up-completed-form-module";

const mapStateToProps = (state) => ({
    "state": state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...bindActionCreators(
            actions,
            dispatch
        ),
        ...bindComplexActionCreators(
            complexActions,
            dispatch
        ),
    },
});

const Container = SignUpCompleteForm;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
