import React from "react";

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <li>
      <span>{task.name}</span>
      <button onClick={onComplete}>Complete</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
