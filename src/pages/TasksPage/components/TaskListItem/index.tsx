import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Task } from "../..";
import { NavLink } from "react-router-dom";
import { TaskDispatchContext } from "../../../../context/taskContext";
import { ActionType } from "../../../../reducers/tasks_reducer";

interface TaskListItemProps {
  task: Task;
  // onRemove: (task: Task) => void;
  // onSave: (task: Task) => void;
}

export function TaskListItem({ task }: TaskListItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);
  const refDone = useRef<HTMLInputElement>(null);

  const dispatch = useContext(TaskDispatchContext);

  const handleRemove = () => {
    dispatch({ type: ActionType.Deleted, payload: { id: task.id } });
  };

  const handleSaveOrEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      task.name = refInput.current!.value;
      dispatch({ type: ActionType.Changed, payload: { task } });
    } else {
      setIsEditing(true);
    }
  };

  const handleChangeDone = () => {
    task.done = refDone.current!.checked;
    dispatch({ type: ActionType.Changed, payload: { task } });
  };

  useEffect(() => {
    refDone.current!.checked = task.done;
  }, []);

  useEffect(() => {
    if (isEditing) {
      refInput.current!.value = task.name;
      refInput.current!.focus();
    }
  }, [isEditing]);

  const labelBtnEditar = useMemo(() => {
    return isEditing ? "Salvar" : "Editar";
  }, [isEditing]);

  console.log("Item renderizado!");

  return (
    <li style={{ listStyle: "none" }}>
      <div style={{ display: "flex", gap: 10 }}>
        <input type="checkbox" ref={refDone} onChange={handleChangeDone} />

        {isEditing ? (
          <input ref={refInput} />
        ) : (
          <p>
            <NavLink to={`/task/${task.id}`}>{task.name}</NavLink>
          </p>
        )}

        <button onClick={handleSaveOrEdit}>{labelBtnEditar}</button>
        <button onClick={handleRemove}>Lixeira</button>
      </div>
    </li>
  );
}
