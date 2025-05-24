import { useContext, useRef } from "react";
import { TasksContext } from "../TasksContext";

export default function Input() {
  const { onAddTask } = useContext(TasksContext);
  const inputRef = useRef();

  function handleAddTask() {
    const value = inputRef.current.value;
    onAddTask(value);
    inputRef.current.value = "";
  }

  return (
    <div className="form">
      <input ref={inputRef} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}
