import {
  CHANGE_QUANTITY,
  ITEMS_RETRIEVED,
  LOGGED_OUT,
  SET_ERROR,
  USER_RETRIEVED,
} from "../actions/action_types";

export default function Reducer(state = { items: [] }, action) {
  switch (action.type) {
    case USER_RETRIEVED:
      return { ...state, user: action.payload, error: null, logged: true };
    case LOGGED_OUT:
      return { ...state, user: null, error: null, logged: false };
    case ITEMS_RETRIEVED:
      return { ...state, items: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CHANGE_QUANTITY:
      let { op, id } = action.payload;
      let index = state.items.findIndex((el) => el.id === id);
      let copy = JSON.parse(JSON.stringify(state.items));
      if (op === "increase") copy[index].quantity++;
      else if (op === "decrease") copy[index].quantity--;
      return { ...state, error: null, items: copy };
    default:
      return state;
  }
}
