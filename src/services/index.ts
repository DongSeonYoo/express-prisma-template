import Container from 'typedi';
import { AuthService } from './auth.service';
import { PostService } from './post.service';

export const authService = Container.get(AuthService);
export const postService = Container.get(PostService);
