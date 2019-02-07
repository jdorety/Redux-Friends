import { LOADING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  friends: [],
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return { ...state, loading: false, friends: action.friends };
    case FAILURE:
      return { ...state, loading: false, error: action.error, friends: [] };
    default:
      return state;
  }
};
