import { Task } from "../..";
import { TaskDispatchContext, TaskStateContext } from "../../../../context/taskContext";
import { TaskListItem } from "../TaskListItem";
import { useContext } from "react";

// interface TaskListProps {
//   onRemove: (task: Task) => void;
//   onSave: (task: Task) => void;
// }

const TaskList = () => {
  const { tasks } = useContext(TaskStateContext);
  
  return (
    <>
      <h3>{tasks.length} Tarefas cadastradas</h3>
      <ul>
        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </>
  );
};

export { TaskList };
