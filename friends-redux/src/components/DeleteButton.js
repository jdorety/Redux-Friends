import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../actions";

import "../styles/DeleteButton.css";

const DeleteButton = props => {
  function clickHandler(e) {
    props.deleteFriend(props.who);
  }

  return (
    <button className="delete" onClick={clickHandler}>
      X
    </button>
  );
};

export default connect(
  null,
  {
    deleteFriend
  }
)(DeleteButton);
