import { Injectable } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { CreatePostDto } from '../posts/dto/req/create-post.dto';
import { PostsService } from '../posts/posts.service';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly postService: PostsService,
    private readonly logger: LoggerService,
  ) {}

  public async createPost(
    createPostDto: CreatePostDto,
  ): Promise<CreatePostDto> {
    this.postService.create(createPostDto);
    return createPostDto;
  }

  public async create(createUserDto: CreateUserDto): Promise<any> {
    this.logger.log('This is a test message');
    // throw new Error('this is error from UsersService create');
    return 'This action adds a new user';
  }

  public async findAll(): Promise<any> {
    return `This action returns all users`;
  }

  public async findMe(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async updateMe(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }
}
