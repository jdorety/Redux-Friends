import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const ADD_LOADING = "ADD_LOADING";
export const DELETE_LOADING = "DELETE_LOADING";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: SUCCESS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, error: "Error retrieving friends list" });
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
      dispatch({
        type: ADD_FAILURE,
        error: "Error adding friend, try again later."
      });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_LOADING });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response =>
      dispatch({ type: DELETE_SUCCESS, friends: response.data })
    )
    .catch(err =>
      dispatch({
        type: DELETE_FAILURE,
        error: "Couldn't delete friend, try again later."
      })
    );
};
