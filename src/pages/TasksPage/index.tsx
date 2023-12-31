import { useReducer } from "react";
import { ActionType, taskStateReducer } from "../../reducers/tasks_reducer";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import {
  TaskDispatchContext,
  TaskStateContext,
} from "../../context/taskContext";

export interface Task {
  id: string;
  name: string;
  description?: string;
  done: boolean;
  created_at: Date;
}

export function TasksPage() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}
