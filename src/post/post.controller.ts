import { CreatePostDto } from './dto/create-post-dto/create-post-dto';
import { PostService } from './post.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Get('')
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }
  @Post('create')
  async createPost(@Body() data: CreatePostDto) {
    return this.postService.createPost(data);
  }
}
