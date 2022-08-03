import express from 'express';
import cors from 'cors';
import UserRouter from './routers/user';
import AuthRouter from './routers/auth';

export default class Application {
    private readonly app: express.Application;

    constructor() {
        this.app = express();
    }

    get server() {
        return this.app;
    }

    init() {
        this.config();
        this.routers();
    }

    start(port: number) {
        this.app.listen(port);
    }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    routers() {
        this.app.use(new UserRouter().init());
        this.app.use(new AuthRouter().init());
    }
}