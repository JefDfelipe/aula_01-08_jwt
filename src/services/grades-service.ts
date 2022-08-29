import GradesRepository from '../database/repositories/grades-repository';

export default class GradesService {
  async find() {
    const repository = new GradesRepository();
    const grade = await repository.find();

    return grade;
  };

  async findOne(gradeId: number) {
    const repository = new GradesRepository();
    const grade = await repository.findOne(gradeId);

    return grade;
  };

  async create(userId: number, value: number) {
    this.isValidValue(value);

    const repository = new GradesRepository();
    const grade = await repository.create(userId, value);

    return grade;
  };

  async update(gradeId: number, userId: number, value: number) {
    this.isValidValue(value);

    const repository = new GradesRepository();
    const grade = await repository.update(gradeId, userId, value);

    return grade;
  };

  async delete(gradeId: number) {
    const repository = new GradesRepository();
    await repository.delete(gradeId);
  };

  async findByUserId(userId: number) {
    const repository = new GradesRepository();
    const grades = await repository.findByUserId(userId);

    return grades;
  };

  isValidValue = (grade: number) => {
    if (grade < 0 || grade > 10) {
      throw new Error('Nota inválida');
    };
  };
};