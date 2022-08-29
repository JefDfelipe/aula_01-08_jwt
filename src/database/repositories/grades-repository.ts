import GradesEntity from '../entities/grades-entity';

export default class GradesRepository {
  async find() {
    const grades = await GradesEntity.find();

    return grades;
  };

  async findOne(userId: number) {
    const grade = await GradesEntity.findOne(userId);

    return grade;
  };

  async create(userId: number, value: number) {
    const grade = new GradesEntity(userId, value);

    await grade.save();

    return grade;
  };

  async update(gradeId: number, userId: number, value: number) {
    const grade = await GradesEntity.findOne(gradeId);

    if (grade) {
      grade.userId = userId;
      grade.value = value;

      await grade?.save();
    };

    return grade;
  };

  async delete(gradeId: number) {
    await GradesEntity.delete(gradeId);
  };

  async findByUserId(userId: number) {
    const grades = await GradesEntity.find({
      where: {
        userId: userId
      }
    });

    return grades;
  };
};