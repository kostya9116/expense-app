import {createAction, createReducer} from "redux-action";

export const SIGN_UP_COMPLETED_STATUS_CHANGE_ACTION = "SIGN_UP_COMPLETED_STATUS_CHANGE_ACTION";

const initialState = {
};

const changeSignUpCompletedStatus = createAction(SIGN_UP_COMPLETED_STATUS_CHANGE_ACTION, (status) => status);

export const actions = {
    changeSignUpCompletedStatus: changeSignUpCompletedStatus
};

export const complexActions = {};

const signUpCompletedReducer = createReducer(initialState, {
    [SIGN_UP_COMPLETED_STATUS_CHANGE_ACTION]: (actionPayload, state) => {
        return {...state, signUpCompletedStatus: actionPayload};
    },

});

export default signUpCompletedReducer;
