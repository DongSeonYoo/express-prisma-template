import { BaseTime } from '../index';

export interface IAccount extends BaseTime {
  id: number;
  loginId: string;
  password: string;
  email: string;
  name: string;
  phoneNumber?: string;
  profileImg?: string;
  provider?: string;
}

export namespace IAccount {
  export interface ILogin extends Pick<IAccount, 'loginId' | 'password'> {}

  export interface IProfile
    extends Pick<IAccount, 'loginId' | 'email' | 'name' | 'updatedAt' | 'createdAt'> {}
}
