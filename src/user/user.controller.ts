import { Controller, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwtAuth';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @ApiParam({
    name: 'id',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getProfile(@Param() params) {
    return this.userService.findOne({
      id: params.id,
    });
  }
}
