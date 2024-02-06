import jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface LoginTokenPayload {
    userIdx: number;
    // add more payload options
  }
  export interface JwtPayload extends jwt.LoginTokenPayload {}
}
