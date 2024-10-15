import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { PrivateUserResDto } from './dto/res/private-user.res.dto';
import { PublicUserResDto } from './dto/res/public-user.res.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PrivateUserResDto })
  @ApiConflictResponse({ description: 'Conflict' })
  @Post()
  public async create(
    @Req() req: Request,
    @Body() dto: CreateUserDto,
  ): Promise<PrivateUserResDto> {
    return await this.usersService.create(dto);
  }

  @ApiBearerAuth()
  @Get('me')
  public async findMe(): Promise<PrivateUserResDto> {
    return await this.usersService.findMe(1);
  }

  @ApiBearerAuth()
  @ApiConflictResponse({ description: 'Conflict' })
  @Patch('me')
  public async updateMe(
    @Body() dto: UpdateUserDto,
  ): Promise<PrivateUserResDto> {
    return await this.usersService.updateMe(1, dto);
  }

  @Get('/')
  public async findAll(): Promise<PublicUserResDto[]> {
    return await this.usersService.findAll();
  }

  @Get(':userId')
  @ApiBearerAuth()
  public async findOne(
    @Param('userId') userId: string,
  ): Promise<PublicUserResDto> {
    return await this.usersService.findOne(+userId);
  }

  @ApiBearerAuth()
  @Delete('me')
  public async removeMe(): Promise<{ message: string }> {
    await this.usersService.removeMe(1);
    return;
  }
}
