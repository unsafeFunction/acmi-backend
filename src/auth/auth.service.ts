import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({
      email,
    });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      return isMatch;
    }
    return null;
  }

  async login(user: LoginDto) {
    const payload = { username: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: RegisterDto) {
    return await this.userService.createUser(user);
  }
}
