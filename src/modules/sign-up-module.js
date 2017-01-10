import {createAction, createReducer} from "redux-action";
import SignUpService from "../services/SignUpService";
import createCRUDModule from "./crud-module";

export const CREATE_CATEGORY_ACTION = "CREATE_CATEGORY_ACTION";

const initialState = {
// Initial State goes here!
};

const crud = createCRUDModule(new SignUpService(), {
    createActionType: CREATE_CATEGORY_ACTION,
}, initialState);

const createItemAction = crud.create(CREATE_CATEGORY_ACTION, data => data);

export const actions = {
    create: createItemAction
};

export const complexActions = {};

const signUpReducer = crud.reducer;
export default signUpReducer;