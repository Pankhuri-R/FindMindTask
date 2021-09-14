import React, { useState } from "react";
import Header from "../Header/Header";
import MyTasks from "../Tasks/tasks";
import AddBtn from "../Button/AddButton/AddButton";
import TaskSummary from "../Tasks/TaskSummary/TaskSummary";

const TasksPage = () => {
  const [TaskList, setTaskList] = useState([]);
  const addTaskList = () => {
    const newList = <MyTasks />;
    setTaskList((lists) => {
      return [...lists, newList];
    });
  };
  return (
    <div>
      <Header />

      <MyTasks />
      {TaskList}

      <TaskSummary />
      <AddBtn class="add_large" addList={addTaskList} />
    </div>
  );
};

export default TasksPage;
