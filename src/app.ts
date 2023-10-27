import 'express-async-errors'
import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import { errorHandler } from "./domain/errors/errorHandler";
import { TaskRoutes } from "./presentation/routes/TaskRoutes";
import { AppDataSource } from './dataSource';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(TaskRoutes);

// const ds = AppDataSource.initialize()

app.use(errorHandler);
app.listen(3333, () => {
  console.log("App listing on port 3333");
});
