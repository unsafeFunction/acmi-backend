import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { CareService } from './care/care.service';
import { CareController } from './care/care.controller';
import { CareModule } from './care/care.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, CareModule, UserModule],
  controllers: [AppController, CareController, UserController],
  providers: [AppService, PrismaService, CareService, UserService],
})
export class AppModule { }
