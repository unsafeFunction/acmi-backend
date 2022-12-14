import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/localAuth';
import { RegisterDto, LoginDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('register')
  async register(@Body() data: RegisterDto) {
    return this.authService.register(data);
  }
}
