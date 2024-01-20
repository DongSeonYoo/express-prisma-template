import { Router } from 'express';

const userRouter = Router();

userRouter.get('/test', (req, res, next) => {
  return res.send('슝');
});

export default userRouter;
