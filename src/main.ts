import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addApiKey({       // <--- Покажет опцию X-API-KEY (apiKey)
    type: "apiKey",  // в окне 'Available authorizations' в Swagger
    name: "authorization", 
    in: "header", 
    description: "Enter your API key" 
  }, "X-API-KEY")
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
