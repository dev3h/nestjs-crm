import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import * as Joi from '@hapi/joi';
import { ExceptionsLoggerFilter } from './utils/exceptions-logger.filter/exceptions-logger.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    PostModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {}
