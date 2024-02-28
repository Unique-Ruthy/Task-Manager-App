import React, { createContext, useContext, useReducer } from "react";

const TaskManagerContext = createContext();

const initialState = {
  tasks: [],
};

const taskManagerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    case "UPDATE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "COMPLETE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const TaskManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskManagerReducer, initialState);

  const addTask = (task) => dispatch({ type: "ADD_TASK", payload: task });
  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });
  const completeTask = (taskId) =>
    dispatch({ type: "COMPLETE_TASK", payload: taskId });
  const deleteTask = (taskId) =>
    dispatch({ type: "DELETE_TASK", payload: taskId });

  return (
    <TaskManagerContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        updateTask,
        completeTask,
        deleteTask,
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
};

const useTaskManager = () => {
  const context = useContext(TaskManagerContext);
  if (!context) {
    throw new Error("useTaskManager must be used within a TaskManagerProvider");
  }
  return context;
};

export { TaskManagerProvider, useTaskManager };
