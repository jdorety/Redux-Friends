import {
  LOADING,
  SUCCESS,
  FAILURE,
  ADD_FAILURE,
  ADD_LOADING,
  ADD_SUCCESS,
  DELETE_FAILURE,
  DELETE_LOADING,
  DELETE_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  loading: false,
  addLoading: false,
  deleteLoading: false,
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
      return { ...state, addLoading: true, loading: true };
    case ADD_SUCCESS:
      return {
        ...state,
        friends: [...action.friends],
        addLoading: false,
        loading: false
      };
    case ADD_FAILURE:
      return { ...state, error: action.error };
    case DELETE_LOADING:
      return { ...state, loading: true, deleteLoading: true };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteLoading: false,
        friends: action.friends
      };
    case DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        addLoading: false,
        deleteLoading: false,
        error: action.error.toString()
      };
    default:
      return state;
  }
};
