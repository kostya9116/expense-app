import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpComponent";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bindComplexActionCreators } from "rrmb-generator-utils";
import { actions, complexActions } from "../../modules/sign-up-module";

const mapStateToProps = (state) => ({

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

const Container = SignUpForm;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
