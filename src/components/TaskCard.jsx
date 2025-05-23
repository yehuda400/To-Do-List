import { useContext } from "react";
import { TasksContext } from "../TasksContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TasksContext);

  function handleDeleteTask(t) {
    console.log("in delete task: ", t);

    deleteTask(t);
  }
  return (
    <>
      {console.log("in card jsx: ", task)}
      <div className="card" key={task}>
        <div>{task}</div>
        <button onClick={() => handleDeleteTask(task)}>❌</button>
      </div>
    </>
  );
}
