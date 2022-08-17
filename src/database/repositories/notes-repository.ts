import NotesEntity from '../entities/notes-entity';

export default class NotesRepository {
  async find() {
    const notes = await NotesEntity.find();

    return notes;
  }

  async findOne(noteId: number) {
    const note = await NotesEntity.findOne(noteId);

    return note;
  }

  async create(description: string, value: number) {
    const note = new NotesEntity(
      description,
      value
    );

    await note.save();

    return note;
  }

  async update(noteId: number, description: string, value: number) {
    const note = await NotesEntity.findOne(noteId);

    if (note) {
      note.description = description;
      note.value = value;

      await note?.save();
    }

    return note;
  }

  async delete(noteId: number) {
    await NotesEntity.delete(noteId);
  }
}