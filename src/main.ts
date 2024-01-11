import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsLoggerFilter } from './utils/exceptions-logger.filter/exceptions-logger.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionsLoggerFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();
