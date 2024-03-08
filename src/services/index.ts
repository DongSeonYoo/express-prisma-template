import Container from 'typedi';
import { AuthService } from './auth.service';
import { RedisService } from '../database/redis.database';

export const authService = Container.get(AuthService);
export const redisService = Container.get(RedisService);
