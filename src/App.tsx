import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import { useReducer } from "react";
import { taskStateReducer } from "./reducers/tasks_reducer";
import { TaskDispatchContext, TaskStateContext } from "./context/taskContext";
import { BaseAppWithBrowserRoute } from "./routes/browserRoutes";

function App() {
  const [state, dispatch] = useReducer(taskStateReducer, { tasks: [] });

  return (
    <div>
      <TaskStateContext.Provider value={state}>
        <TaskDispatchContext.Provider value={dispatch}>
            <BaseAppWithBrowserRoute />
        </TaskDispatchContext.Provider>
      </TaskStateContext.Provider>
    </div>
  );
}

export default App;
