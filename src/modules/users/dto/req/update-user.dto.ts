import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'The updated name of the user',
    type: String,
    example: 'Jane Doe',
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'The updated age of the user',
    type: String,
    example: '31',
  })
  age?: string;

  @ApiPropertyOptional({
    description: 'The updated phone number of the user',
    type: String,
    example: '+0987654321',
  })
  phone?: string;
}
