import { Request, Response } from 'express';
import NotesService from '../services/user-service';

export default class NotesController {
  index = async (request: Request, response: Response) => {
    const service = new NotesService();
    return response.json(await service.find());
  }

  show = async (request: Request, response: Response) => {
    const { id } = request.params;
    const service = new NotesService();

    return response.json(await service.findOne(Number(id)));
  }

  store = async (request: Request, response: Response) => {
    const { description, value } = request.body;
    const noteService = new NotesService();
    const note = await noteService.create(description, value);

    return response.status(201).json(note);
  }

  update = async (request: Request, response: Response) => {
    const { name, email, password } = request.body;
    const { id } = request.params;
    const service = new NotesService();
    const user = await service.update(Number(id), name, email, password);

    return response.json(user);
  }

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;
    const service = new NotesService();
    await service.delete(Number(id));

    return response.sendStatus(204);
  }
}