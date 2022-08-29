import { Router } from 'express';
import GradeController from '../controllers/grades-controller';
import authMiddleware from '../middlewares/auth-middleware';

export default class GradesRouter {
  init() {
    const routes = Router();
    const controller = new GradeController();

    routes.get('/grade',
      [authMiddleware],
      /*
          #swagger.tags = ['GradeList]
          #swagger.description = 'Listar notas'
          #swagger.security = [{ Bearer: [] }]
          #swagger.responses[200] = {
              description: 'Success',
              schema: [{ $ref: '#/definitions/Grade' }]
          }
      */
      controller.index);
    routes.get('/grade/:id', [authMiddleware], controller.show);
    routes.post('/grade', [authMiddleware], controller.store);
    routes.put('/grade/:id', [authMiddleware], controller.update);
    routes.delete('/grade/:id', [authMiddleware], controller.delete);
    routes.get('/user/:userId/grade', [authMiddleware], controller.gradesByUser);

    return routes;
  };
};