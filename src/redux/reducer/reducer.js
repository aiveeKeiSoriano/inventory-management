import { LOGGED_OUT, SET_ERROR, USER_RETRIEVED } from "../actions/action_types";


export default function Reducer(state = {}, action) {
    switch (action.type) {
        case USER_RETRIEVED:
            return { ...state, user: action.payload, error: null }
        case LOGGED_OUT:
            return { ...state, user: null, error: null }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
} 