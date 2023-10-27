import { Column, Entity, Generated, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, TagSet } from "typeorm";
import { Profile } from "./Profile";
import { Task } from "./Task";

@Entity()
export class User {
    @Generated()
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    username: string
    @Column()
    password: string
    @Column()
    active: boolean
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]
}