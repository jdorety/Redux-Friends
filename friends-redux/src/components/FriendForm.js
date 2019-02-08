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
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <form className="friends-info" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.changeHandler}
          value={this.state.name}
          required
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={this.changeHandler}
          value={this.state.age}
          required
        />
        <input
          type="text"
          placeholder="E-Mail"
          name="email"
          onChange={this.changeHandler}
          value={this.state.email}
          required
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
