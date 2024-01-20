import { Router } from 'express';
import testRouter from '../../apis/test/test';
import userRouter from '../../apis/user/user';

export default function () {
  const router = Router();

  // auth middleware를 여기에서 확인할 수 있는게 단점이네
  router.use('/test', testRouter);

  // 라우터 쭉쭉 추가
  router.use('/user', userRouter);

  return router;
}
