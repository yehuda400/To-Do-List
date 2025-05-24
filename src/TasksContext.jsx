import { createContext, useState, useEffect } from "react";

import createId from "./utils/generateUniqueId";

export const TasksContext = createContext({
  tasks: [],
  onAddTask: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
});

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      taskName: "Sample Task",
    },
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function onAddTask(taskName) {
    const newTask = { id: createId(), taskName };
    setTasks((prev) => [...prev, newTask]);
  }

  function onDeleteTask(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  function onEditTask({ id, newName }) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, taskName: newName } : t))
    );
  }

  return (
    <TasksContext
      value={{
        tasks,
        onAddTask,
        onDeleteTask,
        onEditTask,
      }}
    >
      {children}
    </TasksContext>
  );
}
