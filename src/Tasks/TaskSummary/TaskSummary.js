import React, { useState } from "react";
import "./TaskSummary.css";

function TaskSummary(props) {
  const [date, setdate] = useState();
  const addDate = () => {
    const newdate = (
      <input
        type="date"
        style={{ padding: "0", height: "auto" }}
        onChange={props.displayDate}
      />
    );
    setdate(newdate);
  };

  return props.show ? (
    <div>
      <div className="modal">
        <section>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => {
              props.delete(props.id);
            }}
          />
          <i className="fa fa-times" aria-hidden="true" onClick={props.hide} />
          <h3 style={{ color: "#003366", marginTop: "15px" }}>{props.title}</h3>
          <input
            type="text"
            placeholder="Add a description"
            onChange={props.addDesc}
          />

          <span style={{ cursor: "pointer" }} onClick={addDate}>
            Add Date
          </span>
          {date}

          <span style={{ cursor: "pointer" }}>Move to another List</span>
        </section>
      </div>
    </div>
  ) : null;
}

export default TaskSummary;
