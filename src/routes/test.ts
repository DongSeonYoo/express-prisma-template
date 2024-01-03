import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import {
    BadRequestException,
    NotFoundException,
    UnauthorizedException,
} from '../utils/custom-error';
import { ResponseEntity } from '../utils/response-entity';
import { HttpStatus } from '../utils/http-status';
import { validate } from '../utils/validater';

const router = Router();
const prisma = new PrismaClient();

/**
 * GET /test/posts
 */
router.get('/post-count', async (req, res, next) => {
    const count = await prisma.post_tb.count();

    return res.send(ResponseEntity.SUCCESS_WITH(count));
});

/**
 * GET /test/post/:postId
 */
router.get('/post/:postId', async (req, res, next) => {
    try {
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
    } catch (error) {
        return next(error);
    }
});

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
    try {
        throw new BadRequestException('400에러던집니다 잘받으십쇼');
    } catch (error) {
        return next(error);
    }
});

export default router;
