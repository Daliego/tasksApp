import { createContext } from "react";
import { Action, TaskState } from "../reducers/tasks_reducer";

export const TaskStateContext = createContext<TaskState>({tasks: []});

export const TaskDispatchContext = createContext<React.Dispatch<Action>>(() => {});