import { ApiProperty } from '@nestjs/swagger';

class RegisterDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;
}

export default RegisterDto;
