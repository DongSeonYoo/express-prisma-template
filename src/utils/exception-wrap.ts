import { Request, Response, NextFunction } from 'express';

// wrapping try-catch
const exceptionWrap = (cb: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            Promise.resolve(cb(req, res, next)).catch(next);
        } catch (error) {
            next(error);
        }
    };
};

export default exceptionWrap;
