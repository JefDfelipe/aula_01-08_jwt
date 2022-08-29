import { Request, Response } from 'express';
import GradesService from '../services/grades-service';

export default class GradesController {
  index = async (request: Request, response: Response) => {
    const service = new GradesService();
    return response.json(await service.find());
  };

  show = async (request: Request, response: Response) => {
    const { id } = request.params;
    const service = new GradesService();

    return response.json(await service.findOne(Number(id)));
  };

  store = async (request: Request, response: Response) => {
    const { userId, value } = request.body;
    const gradeService = new GradesService();
    const grade = await gradeService.create(userId, value);

    return response.status(201).json(grade);
  };

  update = async (request: Request, response: Response) => {
    const { userId, value } = request.body;
    const { id } = request.params;
    const service = new GradesService();
    const grade = await service.update(Number(id), userId, value);

    return response.json(grade);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;
    const service = new GradesService();
    await service.delete(Number(id));

    return response.sendStatus(204);
  };

  gradesByUser = async (request: Request, response: Response) => {
    const {userId} = request.params;
    const service = new GradesService();
    const grades = await service.findByUserId(Number(userId));

    return response.json(grades);
  };
};