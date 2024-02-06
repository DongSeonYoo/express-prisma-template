import { LoginTokenPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: {
        idx: LoginTokenPayload['userIdx'];
      };
    }
  }
}
