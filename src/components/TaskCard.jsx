import { useContext, useRef, useState, useEffect } from "react";
import { TasksContext } from "../TasksContext";

export default function TaskCard({ task }) {
  const { onDeleteTask, onEditTask } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleDeleteTask(id) {
    onDeleteTask(id);
  }

  function handleEditTask() {
    setIsEditing((prev) => !prev);
  }

  function handleSaveTask() {
    setIsEditing((prev) => !prev);
    onEditTask({ id: task.id, newName: inputRef.current.value });
  }

  return (
    <>
      <div className="card" key={task.id}>
        {!isEditing ? (
          <>
            <div>{task.taskName}</div>
            <div>
              <button onClick={() => handleDeleteTask(task.id)}>❌</button>
              <button onClick={() => handleEditTask(task)}>✏️</button>
            </div>
          </>
        ) : (
          <>
            <input ref={inputRef} defaultValue={task.taskName} />
            <div>
              <button onClick={() => handleSaveTask()}>✔️</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
