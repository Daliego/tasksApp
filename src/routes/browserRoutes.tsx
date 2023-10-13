import { RouteObject, createBrowserRouter, useRoutes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoudPage";
import { TaskDetails } from "../pages/TaskDetails";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { TasksPage } from "../pages/TasksPage";


export function ElementRoutes() {
  const MyBrowserRouter: RouteObject[] = [
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/task",
      children: [
        {
          index: true,
          Component: TasksPage,
        },
        {
          path: ":id",
          Component: TaskDetails,
        }
      ]
    },
    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "*",
      Component: NotFoundPage,
    },
  ];

  return useRoutes(MyBrowserRouter);
} 
