import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import type { GetParams } from 'src/types/requests';
import { User, Prisma } from '@prisma/client';
import { isUniqueConstraintViolation } from 'src/utils/helpers';

@Injectable()
export class UserService {
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
    try {
      const user = await this.prisma.user.create({ data });

      return user;
    } catch (error) {
      if (isUniqueConstraintViolation(error)) {
        throw new HttpException(
          'There is a unique constraint violation, a new user cannot be created with this email',
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  };
}
