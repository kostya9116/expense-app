import {createAction, createReducer} from "redux-action";
import {attachPromiseHandlers} from "../utils/promise-utils";

const createItemAction = (actionName, service, thenFunc, catchFunc) => {
    return createAction(actionName, (data) => {
        const promise = new Promise((resolve, fault) => {
            service.create(data).then(response => response.json())
                .then((result) => {
                    resolve(result);
                }).catch((err) => {
                /* eslint-disable no-console */
                    console.log(err);
                /* eslint-enable no-console */
                    return err;
                });
        });
        attachPromiseHandlers(promise, thenFunc, catchFunc);
        return promise;
    });
};

export const actions = {
    create: createAction,
};

export const complexActions = {};

export const allActions = {
    ...actions,
    ...complexActions,
};

const createReducerFunction = (createAction, initialState) => {
    return createReducer(initialState, {
        [createAction]: (actionPayload, state) => {
            return state;
        },

    });
};

const createCRUDModule = (service, actionsArg, initialState) => {
    const {createActionType} = actionsArg;
    return {
        create: (thenFunc, catchFunc) => createItemAction(createActionType, service, thenFunc, catchFunc),
        reducer: createReducerFunction(createActionType, initialState),
    };
};

export default createCRUDModule;
