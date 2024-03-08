import { IUser } from '../interfaces/IUser';

declare module 'express-session' {
  export interface CustomSessionData {
    userIdx: IUser['idx'];
  }

  interface SessionData extends CustomSessionData {}
}
