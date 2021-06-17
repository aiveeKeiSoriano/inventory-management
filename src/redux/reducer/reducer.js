import { ITEMS_RETRIEVED, LOGGED_OUT, SET_ERROR, USER_RETRIEVED } from "../actions/action_types";


export default function Reducer(state = {items: []}, action) {
    switch (action.type) {
        case USER_RETRIEVED:
            return { ...state, user: action.payload, error: null, logged: true }
        case LOGGED_OUT:
            return { ...state, user: null, error: null, logged: false }
        case ITEMS_RETRIEVED:
            return { ...state, items: action.payload, error: null, }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
} 