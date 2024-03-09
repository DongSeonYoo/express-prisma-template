import { IUser } from '../interfaces/IUser';
import { Role } from '../interfaces/IRole';

declare module 'express-session' {
  export interface CustomSessionData {
    userIdx: IUser['idx'];
    role: Role;
  }

  interface SessionData extends CustomSessionData {}
}
