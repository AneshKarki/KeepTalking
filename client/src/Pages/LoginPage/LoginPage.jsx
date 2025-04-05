// import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  // const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginP = async (e) => {
    e.preventDefault();
    if (email.length < 0 || password.length < 0) {
      alert("please fill all the fields");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:5005/api/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        console.log(res);
        if (res.status == 200) {
          console.log(res.data.token);
          alert("login sucessfully");
          localStorage.setItem("token", res.data.token);
          // setToken(res.data.token);
          navigate("/");
        } else {
          alert("incorrect credintials");
          setEmail("");
          setPassword("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="loginMainDiv">
        <div className="pDiv">
          <p>
            <b>Welcome to Blog</b>
          </p>
        </div>
        <div className="formDiv">
          <div style={{ fontSize: "50px" }}>Login Here</div>
          <form onSubmit={loginP}>
            <label htmlFor="email" className="textL">
              Email
            </label>
            <br />
            <input
              id="email"
              className="imputL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <label htmlFor="password" className="textL">
              Password
            </label>
            <br />
            <input
              id="password"
              className="imputL"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
            <button className="btnsL" type="submit">
              Login
            </button>
          </form>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <div>Dont have Account? Register</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
