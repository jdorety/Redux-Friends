import {
  LOADING,
  SUCCESS,
  FAILURE,
  ADD_FAILURE,
  ADD_LOADING,
  ADD_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  loading: false,
  addLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return { ...state, loading: false, friends: action.friends };
    case FAILURE:
      return { ...state, loading: false, error: action.error, friends: [] };
    case ADD_LOADING:
      return { ...state, addLoading: true };
    case ADD_SUCCESS:
      return {
        ...state,
        friends: [...action.friends],
        addLoading: false,
        loading: false
      };
    case ADD_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
