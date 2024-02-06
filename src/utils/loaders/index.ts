import { Application } from 'express';
import expressLoader from './express';
import errorHandling from '../../middlewares/error-handling';

export default async function (app: Application) {
  // load global middleware of express
  expressLoader(app);

  // another loader... (ex: database loader..)

  // load global error handling (must be completed at the end of file)
  app.use(errorHandling());
}
