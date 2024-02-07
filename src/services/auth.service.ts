import { Service } from 'typedi';
import { Prisma } from '../database/prisma.database';
import { IAccount } from '../interfaces/account/IAccount';
import { ILoginRequest, ILoginResponse } from '../interfaces/account/ILogin';
import { BadRequestException } from '../utils/modules/custom-error.module';

@Service()
export class AuthService {
  constructor(private readonly prisma: Prisma) {}

  async getUserProfile(userIdx: number): Promise<IAccount.IViewProfile.Response> {
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

  async login(loginDto: ILoginRequest): Promise<ILoginResponse> {
    const findUser = await this.prisma.accountTb.findUnique({
      where: {
        loginId: loginDto.loginId,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!findUser) {
      throw new BadRequestException('아이디 또는 비밀번호가 일치하지 않음');
    }

    // 암호화된 비밀번호 대조..
    // accessToken 쿵짝쿵짝
    const accessToken = 'accessToken입미당';

    return {
      accessToken,
      userIdx: findUser.id,
    };
  }
}
