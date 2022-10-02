import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import type { GetParams, UpdateParams } from 'src/types/requests';
import { Care, Prisma } from '@prisma/client';

@Injectable()
export class CareService {
  constructor(private prisma: PrismaService) { }

  createCare = async (data: Prisma.CareUncheckedCreateInput): Promise<Care> => {
    const care = await this.prisma.care.create({
      data,
    });

    return care;
  };

  getUserCares = async (
    params: GetParams<
      Prisma.CareWhereUniqueInput,
      Prisma.CareWhereInput,
      Prisma.CareOrderByWithRelationInput
    >,
  ): Promise<Care[]> => {
    const care = this.prisma.care.findMany({
      where: {
        user_id: params.where.id,
      },
      include: {
        steps: true,
      },
    });

    return care;
  };

  updateCare = async (
    params: UpdateParams<Prisma.CareWhereUniqueInput, Prisma.CareUpdateInput>,
  ): Promise<Care> => {
    const { where, data } = params;

    return this.prisma.care.update({
      data,
      where,
    });
  };

  deleteCare = async (
    careWhereUniqueInput: Prisma.CareWhereUniqueInput,
  ): Promise<Care> => {
    try {
      return await this.prisma.care.delete({
        where: {
          ...careWhereUniqueInput,
        },
      });
    } catch (error) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
  };
}
