import express from 'express';
import { body, validationResult, ContextRunner } from 'express-validator';
import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '../utils/modules/custom-error.module';
import asyncWrap from '../utils/modules/async-wrap.module';
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
export const validate = (validations: ContextRunner[]) => {
  return asyncWrap(
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      for (let validation of validations) {
        const result = await validation.run(req);
        if (!result.isEmpty()) break;
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const reason = errors.array().map((error) => `${error['path']}: ${error['msg']}`);

        throw new BadRequestException('validation error', reason);
      }
      return next();
    },
  );
};

// {
//     "statusCode": 400,
//     "message": [
//         "email must be an email",
//         "email should not be empty",
//         "비밀번호는 문자, 숫자, 특수문자가 최소 1개 이상 포함되며 8자리에서 최대 16자리 문자열입니다.",
//         "password should not be empty"
//     ],
//     "data": ""
// }
