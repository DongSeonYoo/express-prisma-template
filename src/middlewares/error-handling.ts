import { ResponseEntity } from '../utils/modules/response-entity';
import { CustomError } from '../utils/modules/custom-error';
import { HttpStatus } from '../utils/modules/http-status';
import { Request, Response, NextFunction } from 'express';

export default function () {
  return (error: CustomError | Error, req: Request, res: Response, next: NextFunction) => {
    // 개발환경 전용
    console.error(error);

    if (error instanceof Error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(ResponseEntity.ERROR());
    }

    return res
      .status(error.statusCode)
      .send(ResponseEntity.ERROR_WITH(error.statusCode, error.message));
  };
}
