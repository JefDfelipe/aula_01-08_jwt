import { Router } from 'express';
import UserController from '../controllers/user-controller';
import authMiddleware from '../middlewares/auth-middleware';

export default class UserRouter {
  init() {
    const routes = Router();
    const controller = new UserController();

    routes.get('/user',
                [authMiddleware],
                controller.index
                /*
                    #swagger.tags = ['UserList]
                    #swagger.description = 'Listar usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/User' }]
                    }
                    #swagger.responses[400] = {
                      description: 'Not found'
                    }
                    #swagger.responses[500] = {
                      description: 'Server failure'
                    }
                */
    );
    routes.get('/user/:id',
                [authMiddleware],
                controller.show
                /*
                    #swagger.tags = ['UserList]
                    #swagger.description = 'Listar um usuário'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.parameters['id'] = {
                        in: 'param',
                        description: 'Id do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: { $ref: '#/definitions/User' }
                    }
                    #swagger.responses[400] = {
                      description: 'Not found'
                    }
                    #swagger.responses[500] = {
                      description: 'Server failure'
                    }
                */
    );
    routes.post('/user',
                [authMiddleware],
                 controller.store
                /*
                    #swagger.tags = ['User]
                    #swagger.description = 'Cadastrar usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.parameters['name'] = {
                        in: 'body',
                        description: 'Nome do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['email'] = {
                        in: 'body',
                        description: 'E-mail do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['password'] = {
                        in: 'body',
                        description: 'Senha do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: { $ref: '#/definitions/User' }
                    }
                    #swagger.responses[400] = {
                      description: 'Not found'
                    }
                    #swagger.responses[500] = {
                      description: 'Server failure'
                    }
                */
    );
    routes.put('/user/:id',
                [authMiddleware],
                controller.update
                /*
                    #swagger.tags = ['User]
                    #swagger.description = 'Cadastrar usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.parameters['name'] = {
                        in: 'body',
                        description: 'Nome do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['email'] = {
                        in: 'body',
                        description: 'E-mail do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: { $ref: '#/definitions/User' }
                    }
                    #swagger.responses[400] = {
                      description: 'Not found'
                    }
                    #swagger.responses[500] = {
                      description: 'Server failure'
                    }
                */
    );
    routes.delete('/user/:id',
                    [authMiddleware],
                    controller.delete
                    /*
                    #swagger.tags = ['UserList]
                    #swagger.description = 'Listar usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.parameters['id'] = {
                        in: 'param',
                        description: 'Id do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.responses[200] = {
                        description: 'Success'
                    }
                    #swagger.responses[400] = {
                      description: 'Not found'
                    }
                    #swagger.responses[500] = {
                      description: 'Server failure'
                    }
                */
    );

    // JWT + ACL node

    return routes;
  }
};