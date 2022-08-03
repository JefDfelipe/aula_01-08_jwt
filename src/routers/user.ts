import { Router } from 'express';
import UserController from '../controllers/user';
import authMiddleware from '../middlewares/auth';

export default class UserRouter {
    init() {
        const routes = Router();
        const controller = new UserController();

        routes.get('/user', [authMiddleware], controller.index);
        routes.get('/user/:id', [authMiddleware], controller.show);
        routes.post('/user', [authMiddleware], controller.store);
        routes.put('/user/:id', [authMiddleware], controller.update);
        routes.delete('/user/:id', [authMiddleware], controller.delete);

        // JWT + ACL node

        return routes;
    }
};