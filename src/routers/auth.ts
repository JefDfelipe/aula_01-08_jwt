import { Router } from 'express';
import AuthController from '../controllers/auth';

export default class AuthRouter {
    init() {
        const routes = Router();
        const controller = new AuthController();

        routes.post('/login', controller.login);

        return routes;
    }
};