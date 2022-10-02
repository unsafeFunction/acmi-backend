import { ApiProperty } from '@nestjs/swagger';

class RegisterDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty()
  name: string;
}

export default RegisterDto;
