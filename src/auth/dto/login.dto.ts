import { ApiProperty } from '@nestjs/swagger';

class LoginDto {
  @ApiProperty({ required: true, type: 'string' })
  email: string;

  @ApiProperty({ required: true })
  password: string;
}

export default LoginDto;
