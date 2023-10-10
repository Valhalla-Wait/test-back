import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskService } from './../task/task.service';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private entityManager: EntityManager,
    private taskService: TaskService
    ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.save(createUserDto);
      return user
    } catch (e) {
      throw new InternalServerErrorException({
        message: e
      });
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find(); 
    return users
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }

  async findOne(id: number) {
      const userData: User = await this.userRepository.findOneBy({id})
      if(!userData) {
        throw new BadRequestException({
          message: 'Пользователь не найден'
        })
      }
      return userData;
  }

  async createTrans() {
    try {
      const trans = await this.entityManager.transaction(async (transactional) => {
        await this.userRepository.save({
          name: 'Petya',
          cash: 3000
        });
        await this.userRepository.save({
          name: 'Petya',
          cash: 3000
        });
      })
      return 'Транзакция прошла успешно'
    } catch (e) {
      console.log(e)
      throw new InternalServerErrorException({
        errorData: e
      })
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
