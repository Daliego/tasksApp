import { Request, Response } from "express";
import {
  getAllTasksSquema,
  postTaskSquema,
  taskIdValidation,
} from "../../services/squemaValidation/tasksSquema";
import { Task } from "../../domain/entity/Task";
import {
  EntityManager,
  FindOptionsOrder,
  FindOptionsOrderValue,
  FindOptionsUtils,
} from "typeorm";
import { AppDataSource } from "../../dataSource";
import { User } from "../../domain/entity/User";
import { Console } from "console";
import { EnumStatus } from "../../domain/enum/enumStatus";

export class TaskController {
  async getAllTasks(req: Request, res: Response) {
    const query = req.query;

    console.log(query);

    const { done, orderBy } = getAllTasksSquema.validateSync(query, {
      stripUnknown: true,
      abortEarly: false,
    });

    let tasks: Task[] = [];

    if (orderBy.match(",")) {
      const [name, done_enum] = orderBy.split(",");

      tasks = await Task.find({
        where: {
          status: done,
        },
        order: {
          name: name as FindOptionsUtils,
          status: done_enum as keyof EnumStatus as FindOptionsOrderValue,
        },
      });
    } else {
        tasks = await Task.find({
            where: {
                status: done,
            },
            order:
            orderBy === "name"
            ? { name: orderBy as FindOptionsOrderValue }
            : { status: orderBy as FindOptionsOrderValue },
        });
        console.log("veio pra ca")
    }

    res.json(tasks);
  }

  async getTaskById(req: Request, res: Response) {
    const params = req.params;

    const { id } = taskIdValidation.validateSync(params, {
      stripUnknown: true,
      abortEarly: false,
    });

    const task = await Task.findOneBy({ id });

    if (!task) {
      throw new Error("Task not found");
    }

    res.json(task);
  }

  async postTask(req: Request, res: Response) {
    const body = req.body;

    const task = postTaskSquema.validateSync(body, {
      stripUnknown: true,
      abortEarly: false,
    });

    await Task.save(task);

    res.json(task);
  }

  async deleteTask(req: Request, res: Response) {
    const params = req.params;

    const { id } = taskIdValidation.validateSync(params, {
      stripUnknown: true,
      abortEarly: false,
    });

    await Task.delete({ id });

    res.json({ message: `The task with id: ${id} were deleted` });
  }
}
