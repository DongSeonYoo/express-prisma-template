import session from 'express-session';
import { redisService } from '../services';
import { env } from './env';

export const sessionConfig = () =>
  session({
    store: redisService.store,
    secret: env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 5, // 5분,
    },
  });
