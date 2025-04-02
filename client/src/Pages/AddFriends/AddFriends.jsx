import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./AddFriends.css";

const AddFriends = () => {
  return (
    <>
      <NavBar />
      <div>Search Friends</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for friends..."
          className="search-input"
        />
        <button className="search-button">Find</button>
      </div>
      <div className="friends-list-container">
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Add</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Add</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Add</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
        <div className="friends-list">
          <div className="friend-item">
            <div className="img-container"></div>
            <div className="add-friend">Add</div>
          </div>
          <div className="full-name">Full Name</div>
        </div>
      </div>
    </>
  );
};

export default AddFriends;
