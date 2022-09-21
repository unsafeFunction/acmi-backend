import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { CareService } from './care/care.service';
import { CareController } from './care/care.controller';
import { CareModule } from './care/care.module';

@Module({
  imports: [AuthModule, UsersModule, CareModule],
  controllers: [AppController, CareController],
  providers: [AppService, PrismaService, CareService],
})
export class AppModule { }
