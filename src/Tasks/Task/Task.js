import React, { useState } from "react";
import "./Task.css";
import EditIcon from "../../assets/editpencil.png";
import Backdrop from "../../Backdrop/Backdrop";
import TaskSummary from "../TaskSummary/TaskSummary";

const Task = (props) => {
  const [Checked, setChecked] = useState("");
  const [show, setshow] = useState(false);

  const setCheck = () => {
    if (Checked == "checked") {
      setChecked("");
    }
    if (Checked == "") {
      setChecked("checked");
    }
  };

  const showBackdrop = () => {
    setshow(true);
  };
  const hideBackdrop = () => {
    setshow(false);
  };

  const [desc, setdesc] = useState("");

  const addDesc = (event) => {
    setdesc(event.target.value);
  };

  const [dispDate, setdispDate] = useState();
  const displayDate = (event) => {
    setdispDate(event.target.value);
  };

  return (
    <div>
      <Backdrop show={show} hide={hideBackdrop} />
      <TaskSummary
        show={show}
        hide={hideBackdrop}
        title={props.name}
        delete={() => {
          props.deleteTask(props.id);
        }}
        addDesc={addDesc}
        displayDate={displayDate}
      />
      <section className="task">
        <label class="container">
          {props.name}
          <input type="checkbox" checked={Checked} onClick={setCheck} />
          <span class="checkmark"></span>
          <span onClick={showBackdrop}>
            <img src={EditIcon} />
          </span>
          <p className="description">{desc}</p>
          <p className="date">{dispDate}</p>
          {/* <p>{date}</p> */}
        </label>
      </section>
    </div>
  );
};

export default Task;
