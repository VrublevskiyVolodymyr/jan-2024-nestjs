import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    example: 'John Doe',
  })
  public readonly name: string;

  @ApiProperty({
    description: 'The email address of the user',
    type: String,
    example: 'john.doe@example.com',
  })
  public readonly email: string;

  @ApiProperty({
    description: 'The password for the user account',
    type: String,
    example: 'securepassword123',
  })
  public readonly password: string;

  @ApiProperty({
    description: 'The age of the user',
    type: Number,
    required: false,
    example: 30,
  })
  public readonly age?: number;

  @ApiProperty({
    description: 'The phone number of the user',
    type: String,
    required: false,
    example: '+1234567890',
  })
  public readonly phone?: string;
}
