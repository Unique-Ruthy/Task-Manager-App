import React, { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ name: "", description: "", dueDate: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask({ name: "", description: "", dueDate: "" });
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate || currentDate}
        onChange={handleInputChange}
        min={currentDate}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
