export interface IUser {
  idx: number;
  loginId: string;
  password: string;
  email: string;
  name: string;
  createdAt: string;
}

export namespace IUser {
  export interface IUserProfile extends Omit<IUser, 'password'> {}
}
