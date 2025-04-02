import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="HomePage">
          <div className="HomePageDiv">Welcome to KeepTalking</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
