import { useContext, useRef } from "react";
import { TasksContext } from "../TasksContext";

export default function Input() {
  const { addTask } = useContext(TasksContext);
  const inputRef = useRef();

  function handleSave() {
    const value = inputRef.current.value;
    addTask(value);
    inputRef.current.value = "";
  }

  return (
    <div className="form">
      <input ref={inputRef} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
