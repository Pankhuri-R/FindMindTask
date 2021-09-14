import React, { useState, useEffect, Fragment } from "react";
import "./tasks.css";
import options from "../assets/3-dot-icon-11.jpg";
import AddBtn from "../Button/AddButton/AddButton";

import Task from "./Task/Task";

const MyTasks = () => {
  const [task, settask] = useState("");
  const [items, setitems] = useState([]);

  const AddedElement = (event) => {
    settask(event.target.value);
  };
  const itemAdd = () => {
    setitems((oldtasks) => {
      return [...oldtasks, task];
    });
    settask("");
  };

  const deleteTask = (id) => {
    // console.log("Pressed delete");

    setitems((oldtasks) => {
      return oldtasks.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <section className="tasksBox">
        <span>
          <p style={{ marginBottom: "20px" }}>My Tasks</p>
          <p>
            <a href="/">
              <img src={options} />
            </a>
          </p>
        </span>
        <span>
          <span href="/" onClick={itemAdd}>
            <AddBtn class="add_small "></AddBtn>
          </span>
          <input
            type="text"
            style={{ opacity: "0.5", textAlign: "center", border: "none" }}
            value={task}
            placeholder="Add a task"
            onChange={AddedElement}
          ></input>
        </span>
        {items.map((item, index) => {
          return (
            <Task name={item} key={index} id={index} deleteTask={deleteTask} />
          );
        })}
      </section>
    </div>
  );
};

export default MyTasks;
