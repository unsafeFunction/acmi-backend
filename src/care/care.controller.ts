import {
  Controller,
  Post,
  UseGuards,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CareService } from './care.service';
import { CareDto, UpdateCareDto } from './dto/care.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import omit from 'lodash.omit';

@ApiTags('care')
@ApiBearerAuth()
@Controller('care')
export class CareController {
  constructor(private careService: CareService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create care instance' })
  async create(@Body() data: CareDto) {
    try {
      this.careService.createCare(omit(data, ['steps']));
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':user_id')
  @ApiParam({
    name: 'user_id',
  })
  async getUserCare(@Param() params) {
    return this.careService.getUserCares(params.user_id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update care instance' })
  async updateCare(
    @Param('id') id: string,
    @Body() updateCareBody: UpdateCareDto,
  ) {
    return this.careService.updateCare({
      where: { id },
      data: updateCareBody,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Remove care instance' })
  async deleteCare(@Param('id') params) {
    this.careService.deleteCare(params);
  }
}
