import { createContext, useState, useEffect } from "react";

import createId from "./utils/generateUniqueId";

export const TasksContext = createContext({
  tasks: [],
  onAddTask: () => {},
  onDeleteTask: () => {},
  onEditTask: () => {},
  onMoveUpTask: () => {},
  onMoveDownTask: () => {},
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

  function onMoveUpTask(id) {
    setTasks((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      if (index <= 0) return prev;
      const newTasks = [...prev];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      return newTasks;
    });
  }

  function onMoveDownTask(id) {
    setTasks((prev) => {
      const index = prev.findIndex((t) => t.id === id);
      if (index === -1 || index === prev.length - 1) return prev;
      const newTasks = [...prev];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      return newTasks;
    });
  }

  return (
    <TasksContext
      value={{
        tasks,
        onAddTask,
        onDeleteTask,
        onEditTask,
        onMoveUpTask,
        onMoveDownTask,
      }}
    >
      {children}
    </TasksContext>
  );
}
