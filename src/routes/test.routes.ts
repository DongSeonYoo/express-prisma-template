import { Router } from 'express';
import asyncWrap from '../utils/modules/async-wrap.module';
import { validate } from '../middlewares/validate.middleware';
import { body } from 'express-validator';
import { ResponseEntity } from '../utils/modules/response-entity.module';

const testRouter = Router();

testRouter.get(
  '/',
  validate([
    body('name')
      .notEmpty()
      .withMessage('비어있습니다')
      .isLength({ min: 1, max: 6 })
      .withMessage('1부터 6까지 입력가능합니다'),
    body('email')
      .notEmpty()
      .withMessage('비어있습니다')
      .isEmail()
      .withMessage('이메일 형식이 아닙니다'),
  ]),
  asyncWrap(async (req, res, next) => {
    res.send(ResponseEntity.SUCCESS_WITH('succes'));
  }),
);

export default testRouter;
