import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskStateContext } from "../../context/taskContext";

export function TaskDetails() {
  const { id } = useParams();

  const { tasks } = useContext(TaskStateContext);

  const task = tasks.find((task) => task.id === id);

  return (
    <div>
      <h1>Task Details</h1>

      <p>Task ID: {id}</p>
      <p>Task Name: {task?.name}</p>
    </div>
  );
}
