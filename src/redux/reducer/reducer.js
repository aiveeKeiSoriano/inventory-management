import { ITEMS_RETRIEVED, LOGGED_OUT, SET_ERROR, USER_RETRIEVED } from "../actions/action_types";


export default function Reducer(state = {items: []}, action) {
    switch (action.type) {
        case USER_RETRIEVED:
            return { ...state, user: action.payload, error: null }
        case LOGGED_OUT:
            return { ...state, user: null, error: null }
        case ITEMS_RETRIEVED:
            return { ...state, items: action.payload }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
} 