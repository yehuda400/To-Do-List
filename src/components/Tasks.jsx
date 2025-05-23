import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import TaskCard from "./TaskCard";

export default function Tasks() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="tasks-container">
      {tasks.length > 0 && tasks.map((t) => <TaskCard task={t} />)}
    </div>
  );
}
