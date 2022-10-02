import { ApiProperty } from '@nestjs/swagger';
import { CARE_TYPE, CareStep } from '@prisma/client';

class CareStepDto {
  @ApiProperty({ required: true, enum: ['MORNING', 'EVENING', 'CUSTOM'] })
  type: CARE_TYPE;
}

class CareDto {
  @ApiProperty({ required: true })
  user_id: string;

  @ApiProperty({ required: true, enum: ['MORNING', 'EVENING', 'CUSTOM'] })
  type: CARE_TYPE;

  @ApiProperty({ type: CareStepDto, isArray: true })
  steps: CareStep[];
}

class UpdateCareDto {
  @ApiProperty({ required: true, enum: ['MORNING', 'EVENING', 'CUSTOM'] })
  type: CARE_TYPE;
}

export { CareDto, UpdateCareDto };
