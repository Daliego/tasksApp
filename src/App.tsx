import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import { useReducer } from "react";
import { taskStateReducer } from "./reducers/tasks_reducer";
import { TaskDispatchContext, TaskStateContext } from "./context/taskContext";
import { BaseAppWithBrowserRoute } from "./routes/browserRoutes";
import { AuthProvider } from "./context/authContext";

function App() {
  const [taskState, dispatch] = useReducer(taskStateReducer, { tasks: [] });

  return (
    <div>
      <TaskStateContext.Provider value={taskState}>
        <TaskDispatchContext.Provider value={dispatch}>
          <AuthProvider>
            <BaseAppWithBrowserRoute />
          </AuthProvider>
        </TaskDispatchContext.Provider>
      </TaskStateContext.Provider>
    </div>
  );
}

export default App;
