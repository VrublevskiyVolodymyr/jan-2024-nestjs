import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseUserResDto {
  //працює плагін в nest-cli.json  "@nestjs/swagger"
  // @ApiProperty({
  //   description: 'Unique identifier of the user',
  //   format: 'uuid',
  //   example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  // })
  id: string;

  // @ApiProperty({
  //   description: 'Name of the user',
  //   type: String,
  //   example: 'John Doe',
  // })
  name: string;

  // @ApiProperty({
  //   description: 'Email address of the user',
  //   type: String,
  //   example: 'john.doe@example.com',
  // })
  email: string;

  // @ApiPropertyOptional({
  //   description: 'Age of the user',
  //   type: Number,
  //   example: 30,
  // })
  age?: number;

  // @ApiPropertyOptional({
  //   description: 'Phone number of the user',
  //   type: String,
  //   example: '+1234567890',
  // })
  phone?: string;

  // @ApiProperty({
  //   description: 'Date when the user was created',
  //   type: String,
  //   format: 'date-time',
  //   example: '2024-09-15T08:00:00Z',
  // })
  createdAt: Date;

  // @ApiProperty({
  //   description: 'Date when the user was last updated',
  //   type: String,
  //   format: 'date-time',
  //   example: '2024-09-15T08:00:00Z',
  // })
  updatedAt: Date;
}
