import {
    GET_DITTIES_SUCCESS,
    GET_DITTIES_ERROR,
    GET_ONE_DITTY_SUCCESS
} from '../actions/dittiesActions';

const initialState = {
    ditties: {},
    oneDitty: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === GET_DITTIES_SUCCESS) {
        return Object.assign({}, state, {
            ditties: action.data,
            error: null
        });
    } else if (action.type === GET_ONE_DITTY_SUCCESS) {
        return Object.assign({}, state, {
            oneDitty: action.data,
            error: null
        });
    } else if (action.type === GET_DITTIES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}