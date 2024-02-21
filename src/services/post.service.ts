import { Service } from 'typedi';
import { Prisma } from '../database/prisma.database';
import { IPost } from '../interfaces/post/IPost';

@Service()
export class PostService {
  constructor(private readonly prisma: Prisma) {}

  // 해당하는 유저의 게시글을 가져옴
  async getUserPosts(accountId: number): Promise<IPost.IUserPosts[]> {
    const postsResult = await this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
      },
      where: {
        accountId,
      },
    });

    return postsResult.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
    }));
  }
}
