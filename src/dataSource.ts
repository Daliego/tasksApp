import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./domain/entity/User";
import { Profile } from "./domain/entity/Profile";
import { Task } from "./domain/entity/Task";
require('dotenv').config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [User, Profile, Task],
  subscribers: [],
  migrations: ["src/persistance/migrations/*.{js,ts}"],
});

AppDataSource.initialize()
  .then(() => console.log("Database UP - OK"))
  .catch(console.error);
