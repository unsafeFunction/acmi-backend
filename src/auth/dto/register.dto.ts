import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

class RegisterDto {
  @IsEmail()
  @ApiProperty({ required: true, type: 'string' })
  email: string;

  @ApiProperty({ required: true, type: 'string' })
  password: string;

  @ApiProperty({ required: true, type: 'string' })
  name: string;
}

export default RegisterDto;
