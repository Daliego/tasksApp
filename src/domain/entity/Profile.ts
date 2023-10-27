import {Entity, PrimaryGeneratedColumn} from "typeorm"
import { User } from "./User"

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: string
    name: string
    email: string
    avatar_url: string
    city: string
}