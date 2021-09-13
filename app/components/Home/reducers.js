import {
    LOAD_PAGES,
} from './actions';

const INITIAL_STATE = {
    pages: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_PAGES:
            return {
                ...state,
                pages: action.payload
            };

        default:
            return state;
    }
};
