import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import type { GetParams } from 'src/types/requests';
import { User, Prisma } from '@prisma/client';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  findOne = async (
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> => {
    return await this.prisma.user.findUniqueOrThrow({
      where: userWhereUniqueInput,
    });
  };

  fetchUsers = async (
    params: GetParams<
      Prisma.UserWhereUniqueInput,
      Prisma.UserWhereInput,
      Prisma.UserOrderByWithRelationInput
    >,
  ): Promise<User[]> => {
    return await this.prisma.user.findMany({
      ...params,
    });
  };

  createUser = async (data: Prisma.UserCreateInput): Promise<User> => {
    const user = await this.prisma.user.create({ data });

    return user;
  };
}
