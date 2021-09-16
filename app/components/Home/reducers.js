import {
    LOAD_LOCALS,
    ROUTE_GENERATED,
    ACCOUNT_CREATED,
} from './actions';

const INITIAL_STATE = {
    locals: [],
    route: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_LOCALS:
            return {
                ...state,
                locals: action.payload
            };
        case ROUTE_GENERATED:
            return {
                ...state,
                route: action.payload
            }
        default:
            return state;
    }
};
