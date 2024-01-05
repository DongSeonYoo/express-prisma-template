import express from 'express';
import errorHandling from './middlewares/error-handling';
import routes from './routes';

const app = express();

// use global middleware
app.use(express.json());

// navigate routes
app.use('/', routes);

// global error hanlding
app.use(errorHandling);

export default app;
