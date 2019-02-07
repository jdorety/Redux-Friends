import React from "react";
import { connect } from "react-redux";

const Friends = props => {
  return props.friends.map(friend => {
    return (
      <div className="friend-card" key={friend.id}>
        <h3>{friend.name}</h3>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  {}
)(Friends);
