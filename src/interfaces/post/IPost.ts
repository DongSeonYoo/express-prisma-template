import { BaseTime } from '../';

export interface IPost extends BaseTime {
  id: number;
  title: string;
  content: string;
  accountId: number;
}

export namespace IPost {
  export interface IUserPosts {
    id: number;
    title: string;
    content: string;
  }
}
