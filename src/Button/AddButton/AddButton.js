import React from "react";
import "./AddButton.css";

const AddBtn = (props) => {
  return (
    <div>
      <span className={props.class} onClick={props.addList}>
        +
      </span>
    </div>
  );
};

export default AddBtn;
