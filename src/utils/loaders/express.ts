import { Application, json } from 'express';
import cookieParser from 'cookie-parser';
import testRouter from '../../routes/test.routes';

export default function (app: Application) {
  app.use(json());
  app.use(cookieParser());
  app.use('/test', testRouter);
}
