import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="headerNav">
          <Link to="/">
            <h1>Tasksboard</h1>
          </Link>
          <img src="https://picsum.photos/id/237/200/300"></img>
        </nav>
      </div>
    </>
  );
};

export default Header;
