import React, { Component } from "react";
import { addFriend } from "../actions";
import { connect } from "react-redux";

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addFriend({ ...this.state });
  };

  render() {
    return (
      <form className="friends-info" onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          onChange={this.changeHandler}
          value={this.state.name}
        />
        <input
          type="text"
          name="age"
          onChange={this.changeHandler}
          value={this.state.age}
        />
        <input
          type="text"
          name="email"
          onChange={this.changeHandler}
          value={this.state.email}
        />
        <button>Add Friend</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(FriendForm);
