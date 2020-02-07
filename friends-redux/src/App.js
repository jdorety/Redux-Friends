import React, { Component } from "react";
import FriendForm from "./components/FriendForm";
import Friends from "./components/Friends";
import { fetchData } from "./actions";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <Friends />
        <FriendForm />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchData }
)(App);
