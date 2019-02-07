import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: SUCCESS, friends: response.data });
    })
    .catch(err => console.log(err));
};
