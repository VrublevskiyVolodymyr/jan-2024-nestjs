import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto } from './dto/req/create-post.dto';
import { PostsListReqDto } from './dto/req/posts-list.req.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly carsService: PostsService) {}

  @Post()
  public create(@Body() createPostDto: CreatePostDto) {
    return this.carsService.create(createPostDto);
  }

  @Get()
  public findAll(@Query() query: PostsListReqDto) {
    return this.carsService.findAll(query);
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.carsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
