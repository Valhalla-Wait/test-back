import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });
  describe('findAll', () =>{
    it('should return array of users', async () => {
      const result:User[] = [
        {
          id: 0,
          name: 'Vasya',
          cash: 1000
        }
      ]
      jest.spyOn(service, 'findAll').mockImplementation(async () => result)
      expect(controller.findAll).toBe(result);
    });
  })
 
});
