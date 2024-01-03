import express from 'express';
import errorHandling from './middlewares/error-handling';
import routes from './routes';
import exceptionWrap from './utils/exception-wrap';

const app = express();

// use global middleware
app.use(express.json());

// navigate routes
app.use('/', exceptionWrap(routes));

// global error hanlding
app.use(errorHandling);

export default app;
