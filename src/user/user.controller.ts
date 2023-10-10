import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, HttpStatus, ParseUUIDPipe, ParseFloatPipe, UsePipes, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CreateUserGuard } from './guards/createUser.guard';
import { ValidateParamIdPipe } from './pipes/validationPipe';
import { SpeedUserRes } from './interceptors/speedUserRes';

// @UseInterceptors(SpeedUserRes)
// @UsePipes(ValidateParamIdPipe)
@UseGuards(CreateUserGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/trans')
  async createTrans() {
    return this.userService.createTrans();
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @UseInterceptors(SpeedUserRes)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
