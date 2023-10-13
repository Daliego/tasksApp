import {
  NavLink,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoudPage";
import { TaskDetails } from "../pages/TaskDetails";
import { HomePage } from "../pages/HomePage";
import { TasksPage } from "../pages/TasksPage";

const routes: RouteObject[] = [
  {
    element: (
      <>
          <div className="navDiv">
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
          </div>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "task", children: [
        { index: true, element: <TasksPage /> },
        { path: ":id", element: <TaskDetails /> },
      ]
       },
      { path: "login", element: <LoginPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export function BaseAppWithBrowserRoute() {
  const MyBrowserRouter = createBrowserRouter(routes);

  return (
    <main>
      <RouterProvider router={MyBrowserRouter} />
    </main>
  );
}

// export const MyBrowserRouter = createBrowserRouter(routes);
