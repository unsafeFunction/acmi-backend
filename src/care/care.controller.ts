import { Controller, Post, UseGuards, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
import CareDto from './dto/care.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('care')
@ApiBearerAuth()
@Controller('care')
export class CareController {
  // constructor(private authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @ApiOperation({ summary: 'Create care instance' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: CareDto) {
    return 'qwe';
  }
}
