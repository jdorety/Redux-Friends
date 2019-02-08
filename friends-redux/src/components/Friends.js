import React from "react";
import { connect } from "react-redux";
import DeleteButton from "./DeleteButton";

const Friends = props => {
  return (
    <div className="friends-list">
      {props.error && <h3>{props.error}</h3>}
      {props.loading && <h2>Loading</h2>}
      {props.addLoading && <h2>Adding Friend</h2>}
      {!props.friends.length && !props.loading && <h3>No friends :(</h3>}
      {props.friends.map(friend => {
        return (
          <div className="friend-card" key={friend.id}>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <DeleteButton who={friend.id} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading,
    addLoading: state.addLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(Friends);
