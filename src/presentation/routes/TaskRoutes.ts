import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

export const TaskRoutes = Router()

const taskController = new TaskController();

TaskRoutes.get("/tasks", taskController.getAllTasks);
TaskRoutes.get("/tasks/:id", taskController.getTaskById);
TaskRoutes.delete("/tasks/:id", taskController.deleteTask);
TaskRoutes.post("/tasks", taskController.postTask);
