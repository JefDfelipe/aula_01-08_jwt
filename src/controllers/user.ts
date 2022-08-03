import { Request, Response } from 'express';
import UserRepository, { User } from '../repositories/user';

export default class UserController {
    index = (request: Request, response: Response) => {
        return response.json(UserRepository.users);
    }

    show = (request: Request, response: Response) => {
        const { id } = request.params;
        return response.json(UserRepository.users.find((user: User) => user.id === Number(id)));
    }

    store = (request: Request, response: Response) => {
        const { id, name, email, password } = request.body;
        const user = {
            id,
            name,
            email,
            password
        }

        UserRepository.users.push(user);

        return response.json(user);
    }

    update = (request: Request, response: Response) => {
        return response.send('UPDATE');
    }

    delete = (request: Request, response: Response) => {
        return response.send('DELETE');
    }
}