import { Router } from 'express';
import asyncWrap from '../utils/modules/async-wrap.module';
import { validate } from '../middlewares/validate.middleware';
import { body, param } from 'express-validator';
import { ResponseEntity } from '../utils/modules/response-entity.module';
import { authService } from '../services';

const testRouter = Router();

testRouter.get(
  '/:accountIdx',
  validate([
    param('accountIdx')
      .notEmpty()
      .withMessage('비어있습니다')
      .isInt()
      .withMessage('숫자가 아닙니다')
      .toInt(),
    body('name')
      .notEmpty()
      .withMessage('비어있습니다')
      .isLength({ min: 1, max: 6 })
      .withMessage('1자리부터 6자리까지 가능'),
    body('email')
      .notEmpty()
      .withMessage('비어있습니다')
      .isEmail()
      .withMessage('이메일 형식이 아닙니다'),
  ]),
  asyncWrap(async (req, res, next) => {
    const { accountIdx } = req.params;

    // console.log(typeof userIdx); // number
    const account = await authService.test(Number(accountIdx));

    return res.send(ResponseEntity.SUCCESS_WITH(account));
  }),
);

export default testRouter;
