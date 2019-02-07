import React, { Component } from "react";
import FriendForm from "./components/FriendForm";
import Friends from "./components/Friends";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <FriendForm />
      </div>
    );
  }
}

export default App;
