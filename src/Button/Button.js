import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button type="submit">{props.event}</button>
    </div>
  );
};

export default Button;
