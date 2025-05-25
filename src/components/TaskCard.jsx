import { useContext, useRef, useState, useEffect } from "react";
import { TasksContext } from "../TasksContext";

export default function TaskCard({ task }) {
  const { onDeleteTask, onEditTask, onMoveDownTask, onMoveUpTask } =
    useContext(TasksContext);
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

  function handleMoveDownTask(id) {
    onMoveDownTask(id);
  }
  function handleMoveUpTask(id) {
    onMoveUpTask(id);
  }

  return (
    <>
      <div className="card" key={task.id}>
        {!isEditing ? (
          <>
            <div className="card-task-name">{task.taskName}</div>
            <div className="actions">
              <button onClick={() => handleMoveDownTask(task.id)}>⬇️</button>
              <button onClick={() => handleDeleteTask(task.id)}>❌</button>
              <button onClick={() => handleEditTask(task)}>✏️</button>
              <button onClick={() => handleMoveUpTask(task.id)}>⬆️</button>
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
