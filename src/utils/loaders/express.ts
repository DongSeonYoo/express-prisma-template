import { Application, json } from 'express';
import cookieParser from 'cookie-parser';
import errorHandling from '../../middlewares/error-handling';
import setRoute from './set-route';

export default function (app: Application) {
  app.use(json());
  app.use(cookieParser());
  app.use('/', setRoute());
  app.use(errorHandling);
}
