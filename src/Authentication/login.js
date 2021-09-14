import React from "react";
import "./login.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <div className="main_div">
        <div className="centerForm">
          <h1>Log In!</h1>
          <form className="login">
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
            <input
              type="checkbox"
              id="remember"
              name="remember me"
              value="Remember me"
            />
            <label>Remember me</label>
            <a href="/">Forgot password?</a>
          </span>
          <Link to="/dashboard">
            <Button event="Log in" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default login;
