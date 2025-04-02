import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Friends.css";
const Friends = () => {
  return (
    <>
      <NavBar />
      <div className="friendsList-title">See your friends</div>
      <div className="friends-list-container">
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Added</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Added</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Added</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Added</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Added</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Added</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
      </div>
    </>
  );
};

export default Friends;
