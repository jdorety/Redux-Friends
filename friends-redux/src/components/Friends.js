import React from "react";
import { connect } from "react-redux";

const Friends = props => {
  return (
    <div className="friends-list">
      {props.loading && <h2>Loading</h2>}

      {props.friends.map(friend => {
        return (
          <div className="friend-card" key={friend.id}>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  {}
)(Friends);
