import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MiddlewareSoft } from './user/middleware/middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TaskModule, 
    AuthModule, 
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'testDB',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(MiddlewareSoft)
    .exclude(
      {path: 'user', method: RequestMethod.POST},
    )
    .forRoutes('user')
  }
}
