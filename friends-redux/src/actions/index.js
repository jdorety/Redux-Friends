import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const ADD_LOADING = "ADD_LOADING";

export const fetchData = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: SUCCESS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, error: err });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_LOADING });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(response => {
      dispatch({ type: ADD_SUCCESS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FAILURE, error: err });
    });
};

export const deleteFriend = id => dispatch => {
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
