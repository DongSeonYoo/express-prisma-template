import asyncWrap from '../utils/modules/async-wrap.module';
import { validate } from '../middlewares/validate.middleware';
import { body, param } from 'express-validator';
import { ResponseEntity } from '../utils/modules/response-entity.module';
import { authService } from '../services';
import { Router } from 'express';

const testRouter = Router();

testRouter.get(
  '/:accountIdx',
  validate([param('accountIdx').notEmpty().isInt().withMessage('정수가 아닙니다').toInt()]),
  asyncWrap(async (req, res, next) => {
    const { accountIdx } = req.params;
    console.log(typeof accountIdx); // number
    const account = await authService.getUserProfile(Number(accountIdx));

    return res.send(ResponseEntity.SUCCESS_WITH(account));
  }),
);

testRouter.post(
  '/login',
  validate([
    body('loginId').notEmpty().withMessage('입력되지 않았습니다'),
    body('password').notEmpty().withMessage('입력되지 않았습니다'),
  ]),
  asyncWrap(async (req, res, next) => {
    const { loginId, password } = req.body;

    const accessToken = await authService.login({ loginId, password });

    return res.send(ResponseEntity.SUCCESS_WITH(accessToken));
  }),
);

export default testRouter;
