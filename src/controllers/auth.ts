import { Request, Response } from 'express';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import UserRepository, { User } from '../repositories/user';
import dotenv from 'dotenv';

dotenv.config();

export default class AuthController {
    login = (request: Request, response: Response) => {
        const { email, password } = request.body;
        const user = UserRepository.users.find((user: User) => user.email === email && user.password === password);

        // 1. busca no banco pelo email
        // 2. se não encontrar: email ou senha inválido
        // 3. criptografa a senha recebida acima
        // 4. pega a entidade do usuário e compara com a senha recebida criptografada
        // 5. se não bater as senhas: email ou senha inválido
        // 6. gera o token
        // salt -> id + email

        if (!user) {
            return response.status(400).json({
                mensagem: 'Usuário ou senha inválido'
            });
        }

        const secret: Secret = String(process.env.PRIVATE_TOKEN);
        const options: SignOptions = {
            expiresIn: process.env.EXPIRE_TOKEN
        }

        const token = jwt.sign(
            { 
                id: user.id,
                email: user.email 
            }, 
            secret,
            options
        );

        return response.json({
            user: { 
                id: user.id,
                name: user.name,
                email: user.email
            },
            token,
        });
    }
}