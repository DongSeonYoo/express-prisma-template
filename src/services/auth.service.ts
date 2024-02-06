import { Service } from 'typedi';
import { Prisma } from '../database/prisma.database';
import { IAccount } from '../interfaces/IAccount';
import { BadRequestException } from '../utils/modules/custom-error.module';

@Service()
export class AuthService {
  constructor(private readonly prisma: Prisma) {}

  async test(userIdx: number): Promise<IAccount.IAccountProfile> {
    const accountInfo = await this.prisma.accountTb.findUnique({
      where: {
        id: userIdx,
        deletedAt: null,
      },
      select: {
        loginId: true,
        email: true,
        name: true,
        updatedAt: true,
        createdAt: true,
      },
    });

    if (!accountInfo) {
      throw new BadRequestException('해당하는 유저가 없습니다');
    }

    return {
      loginId: accountInfo.loginId,
      email: accountInfo.email,
      name: accountInfo.name,
      updatedAt: accountInfo.updatedAt,
      createdAt: accountInfo.createdAt,
    };
  }
}
