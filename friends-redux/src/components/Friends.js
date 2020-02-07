import React from "react";
import { connect } from "react-redux";
import DeleteButton from "./DeleteButton";

import "../styles/Friends.css";

const Friends = props => {
  return (
    <div className="list-wrapper">
      {props.error && <h3>{props.error}</h3>}
      {props.loading && <h2>Loading</h2>}
      {props.addLoading && <h2>Adding Friend</h2>}
      <h2 className="list-header">Friends List</h2>

      <div className="friends-list">
        {!props.friends.length && !props.loading && <h3>No friends :(</h3>}

        {!props.loading &&
          props.friends.map(friend => {
            return (
              <div className="friend-card" key={friend.id}>
                <div className="friend-info">
                  <h3>{friend.name}</h3>
                  <p>Age: {friend.age}</p>
                  <p>Email: {friend.email}</p>
                </div>
                <DeleteButton who={friend.id} />
              </div>
            );
          })}
      </div>
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
