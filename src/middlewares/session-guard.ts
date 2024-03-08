import { UnauthorizedException } from '../utils/modules/custom-error.module';
import { RequestHandler } from 'express';
import asyncWrap from '../utils/modules/async-wrap.module';

export const loginAuthGuard = (): RequestHandler => {
  return asyncWrap((req, res, next) => {
    if (!req.session || !req.session.userIdx) {
      throw new UnauthorizedException('로그인 되어있지 않습니다');
    }

    return next();
  });
};
