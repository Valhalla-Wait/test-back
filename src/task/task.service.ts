import { Injectable } from '@nestjs/common';
import { query } from './../utils/query';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return query<Task[]>([
      {
        id: 0,
        title: 'sdfasdf',
        status: false
      },
      {
        id: 1,
        title: 'KDFJD',
        status: false
      },
      {
        id: 2,
        title: ':LLDSF',
        status: true
      },
    ], 1500);
    
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
