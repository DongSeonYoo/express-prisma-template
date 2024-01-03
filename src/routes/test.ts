import { PrismaClient } from '@prisma/client';
import { NextFunction, Router, Response, Request } from 'express';
import { BadRequestException, NotFoundException } from '../utils/custom-error';
import { ResponseEntity } from '../utils/response-entity';
import { validate } from '../utils/validater';
import exceptionWrap from '../utils/exception-wrap';

const router = Router();
const prisma = new PrismaClient();

/**
 * GET /test/posts
 */
router.get('/post-count', async (req: Request, res: Response, next: NextFunction) => {
    const count = await prisma.post_tb.count();

    return res.send(ResponseEntity.SUCCESS_WITH({ count }));
});

router.get(
    '/post/:postId',
    exceptionWrap(async (req: Request, res: Response, next: NextFunction) => {
        const { postId } = req.params;

        validate(postId, 'postId').checkInput().isNumber();

        const post = await prisma.post_tb.findUnique({
            where: {
                id: parseInt(postId),
            },
        });

        if (!post) {
            throw new NotFoundException('해당하는 게시글이 존재하지 않습니다');
        }

        return res.send(ResponseEntity.SUCCESS_WITH(post));
    }),
);

// 100개 insert
router.post('/push', async (req, res, next) => {
    for (let i = 1; i <= 100; i++) {
        await prisma.post_tb.create({
            data: {
                user_id: 11,
                title: `title ${i}`,
                content: `content ${i}`,
            },
        });
    }

    return res.send('success');
});

// throw error test
router.get('/error', (req, res, next) => {
    throw new BadRequestException('400에러던집니다 잘받으십쇼');
});

export default router;
