import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TaskStateContext } from "../../context/taskContext";
import "../../styles/taskDetailsStyles/style.css";

export function TaskDetails() {
  const { id } = useParams();

  const { tasks } = useContext(TaskStateContext);

  const task = tasks.find((task) => task.id === id);

  useEffect(() => {
    console.log("Task Details renderizado!");
  }, [id]);

  return (
    <main className="taskListDetails">
      <div>
        <h2>Task Details</h2>
        <div>
          <label>ID</label>
          <p>{id}</p>
        </div>

        <div>
          <label>Name</label>
          <p> {task?.name}</p>
        </div>

        <div>
          <label>Description</label>
          <p> {task?.description}</p>
        </div>
      </div>
    </main>
  );
}
