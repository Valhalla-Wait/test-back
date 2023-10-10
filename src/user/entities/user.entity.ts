import { Task } from "src/task/entities/task.entity"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    name: string

    @Column()
    cash: number
}