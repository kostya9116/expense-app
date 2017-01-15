import {createAction, createReducer} from "redux-action";
import SignUpService from "../services/SignUpService";
import {browserHistory} from "react-router";

export const CREATE_CATEGORY_ACTION = "CREATE_CATEGORY_ACTION";

const initialState = {
    signUpCompletedStatus: false
};

const service = new SignUpService();
const createItemAction = createAction(CREATE_CATEGORY_ACTION, (dataFolder, data) => ([dataFolder, data]));

export const actions = {
    create: createItemAction
};

export const complexActions = {};

const signUpReducer = createReducer(initialState, {
    [CREATE_CATEGORY_ACTION]: (actionPayload, state) => {
        service.create(actionPayload[0], actionPayload[1]);
        return {...state, signUpCompletedStatus: true};
    },

});

export default signUpReducer;
