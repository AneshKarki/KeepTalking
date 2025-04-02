import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="NavBarDiv">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/friends">Friends</Link>
        </div>
        <div>
          <Link to="/messages">Messages</Link>
        </div>
        <div>
          <Link to="/addfriends">Add Friends</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
