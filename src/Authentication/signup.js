import React from "react";
import "./login.css";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="main_div">
        <div className="centerForm">
          <h1>Sign up</h1>
          <form className="login">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            ></input>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              required
            ></input>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            ></input>
          </form>

          <span>
            <input type="checkbox" id="terms" name="terms" value="terms" />
            <label>I accept the terms and condition</label>
            <Link to="/login">Already registered?</Link>
          </span>
          <Link to="/dashboard">
            <Button event="Sign up" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
