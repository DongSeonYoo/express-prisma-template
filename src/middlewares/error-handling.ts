import { ErrorRequestHandler } from 'express';
import { ResponseEntity } from '../utils/response-entity';
import { CustomError } from '../utils/custom-error';
import { HttpStatus } from '../utils/http-status';

const errorHandling: ErrorRequestHandler = (error: CustomError | Error, req, res, next) => {
  console.error(error);

  if (!(error instanceof CustomError)) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(ResponseEntity.ERROR());
  }

  return res
    .status(error.statusCode)
    .send(ResponseEntity.ERROR_WITH(error.statusCode, error.message));
};

export default errorHandling;
