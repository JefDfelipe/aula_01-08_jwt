import NotesRepository from '../database/repositories/notes-repository';

export default class NotesService {
  async find() {
    const repository = new NotesRepository();
    const note = await repository.find();

    return note;
  }

  async findOne(noteId: number) {
    const repository = new NotesRepository();
    const note = await repository.findOne(noteId);

    return note;
  }

  async create(description: string, value: number) {
    // TODO: validar se e-mail é único
    const repository = new NotesRepository();
    const note = await repository.create(description, value);

    return note;
  }

  async update(noteId: number, description: string, value: number) {
    // TODO: validar se e-mail é único menos o meu atual
    const repository = new NotesRepository();
    const note = await repository.update(noteId, description, value);

    return note;
  }

  async delete(noteId: number) {
    const repository = new NotesRepository();
    await repository.delete(noteId);
  }
}