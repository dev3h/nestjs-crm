import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post-dto/create-post-dto';
import { PostEntity } from 'src/entities/post.entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    // inject model
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}
  async getAllPosts() {
    return await this.postRepository.find();
  }
  async createPost(data: CreatePostDto) {
    const newPost = await this.postRepository.create(data);
    await this.postRepository.save(newPost);
    return newPost;
  }
}
