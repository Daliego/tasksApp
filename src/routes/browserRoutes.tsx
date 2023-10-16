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
import { TasksPage } from "../pages/TasksPage";
import { Logout } from "../pages/logout";

// const { logout, isAuthenticated } = useContext(AuthContext);

// const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//   console.log("Estava: " + isAuthenticated);
//   logout();
//   console.log("E agora: " + isAuthenticated);
// };

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
                  <NavLink to="/">login</NavLink>
                </li>
                <li>
                  <NavLink to="/task">Tasks</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Sair</NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: "task",
        children: [
          { index: true, element: <TasksPage /> },
          { path: ":id", element: <TaskDetails /> },
        ],
      },
      { path: "logout", element: <Logout />},
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
