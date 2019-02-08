import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../actions";

const DeleteButton = props => {
  function clickHandler(e) {
    props.deleteFriend(props.who);
  }

  return <button onClick={clickHandler}>X</button>;
};

export default connect(
  null,
  {
    deleteFriend
  }
)(DeleteButton);
