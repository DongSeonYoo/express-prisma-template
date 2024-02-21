import { Router } from 'express';
import { postService } from '../services';
import asyncWrap from '../utils/modules/async-wrap.module';
import { ResponseEntity } from '../utils/modules/response-entity.module';

const postRouter = Router();

// 로그인 한 유저의 게시글 작성 목록을 보여줌
postRouter.get(
  '/',
  asyncWrap(async (req, res, next) => {
    const tempLoginUserIdx = 32;
    const account = await postService.getUserPosts(tempLoginUserIdx);

    return res.send(ResponseEntity.SUCCESS_WITH(account));
  }),
);

export default postRouter;
