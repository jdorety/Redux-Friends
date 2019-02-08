import React from "react";

const DeleteButton = props => {
  function clickHandler(e) {
    console.log(props.who);
  }

  return <button onClick={clickHandler}>X</button>;
};

export default DeleteButton;
