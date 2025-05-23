import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function onDeleteTask(t) {
    setTasks((prevTasks) => {
      const index = prevTasks.indexOf(t);

      const duplicatedTasks = [...prevTasks];
      duplicatedTasks.splice(index, 1);
      return duplicatedTasks;
    });
  }

  function handleSave(task) {
    if (task) {
      console.log(task);
      setTasks((prev) => [...prev, task]);
    }
  }

  return (
    <TasksContext
      value={{
        tasks,
        addTask: handleSave,
        deleteTask: onDeleteTask,
      }}
    >
      {children}
    </TasksContext>
  );
}
