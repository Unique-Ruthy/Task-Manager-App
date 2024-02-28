import React from "react";
import { TaskManagerProvider } from "./TaskManager";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  return (
    <TaskManagerProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </TaskManagerProvider>
  );
};

export default App;
