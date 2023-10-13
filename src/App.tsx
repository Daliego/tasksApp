import {
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import "./App.css";
import { useReducer } from "react";
import { taskStateReducer } from "./reducers/tasks_reducer";
import { TaskDispatchContext, TaskStateContext } from "./context/taskContext";
import { ElementRoutes } from "./routes/browserRoutes";

function App() {
  const [state, dispatch] = useReducer(taskStateReducer, { tasks: [] });

  return (
    <div>
      <TaskStateContext.Provider value={state}>
        <TaskDispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <header>
              <h1>Task App</h1>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/task">Tasks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <ElementRoutes />
          </BrowserRouter>
        </TaskDispatchContext.Provider>
      </TaskStateContext.Provider>
    </div>
  );
}

export default App;
