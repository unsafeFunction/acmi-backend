import { ApiProperty } from '@nestjs/swagger';

class CareDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;
}

export default CareDto;
