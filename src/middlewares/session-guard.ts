import { ForbiddenException, UnauthorizedException } from '../utils/modules/custom-error.module';
import { RequestHandler } from 'express';
import asyncWrap from '../utils/modules/async-wrap.module';
import { Role } from '../interfaces/IRole';

export const loginAuthGuard = (role: Role = Role.STUDENT): RequestHandler => {
  return asyncWrap((req, res, next) => {
    if (!req.session || !req.session.userIdx || !req.session.role) {
      throw new UnauthorizedException('로그인 되어있지 않습니다');
    }

    if (req.session.role > role) {
      throw new ForbiddenException('권한이 없습니다');
    }

    return next();
  });
};
