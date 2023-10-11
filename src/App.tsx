import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import { TasksPage } from "./pages/TasksPage";
import { NotFoundPage } from "./pages/NotFoudPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { TaskDetails } from "./pages/TaskDetails";
import { useReducer } from "react";
import { taskStateReducer } from "./reducers/tasks_reducer";
import { TaskDispatchContext, TaskStateContext } from "./context/taskContext";

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

            <Routes>
              <Route Component={HomePage} path="/" />
              <Route path="/task">
                <Route index Component={TasksPage} />
                <Route path=":id" Component={TaskDetails} />
              </Route>
              <Route Component={LoginPage} path="/login" />
              <Route Component={NotFoundPage} path="*" />
            </Routes>
          </BrowserRouter>
        </TaskDispatchContext.Provider>
      </TaskStateContext.Provider>
    </div>
  );
}

export default App;
