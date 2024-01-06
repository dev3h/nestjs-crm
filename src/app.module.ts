import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
