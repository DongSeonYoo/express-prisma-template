import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,

  // redis url
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',

  // secret key of session (cookie)
  SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY as string,
};
