import { FETCH_COMPLETE } from '../actions/userActions';

const initialState = {
    items: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPLETE: {
            return {
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
    }
};
