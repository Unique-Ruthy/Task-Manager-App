import React, { useState, useEffect } from "react";

const EditTaskForm = ({ task, onUpdate }) => {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };
  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editedTask.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        value={editedTask.description}
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
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTaskForm;
