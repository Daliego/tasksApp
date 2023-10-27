import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DataSource,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EnumStatus } from "../enum/enumStatus";
import { User } from "./User";

@Entity()
export class Task  extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ type: "enum", enum: EnumStatus, default: EnumStatus.NOTDONE })
  status?: EnumStatus;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
