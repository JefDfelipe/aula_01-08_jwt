import UserRepository from '../database/repositories/user-repository';
import CacheRepository from '../database/repositories/cache';

export default class UserService {
  async find() {
    const repository = new UserRepository();
    const cacheRepository = new CacheRepository();
    const cache = cacheRepository.find('user');

    if (cache) {
      return cache;
    };

    const user = await repository.find();
    cacheRepository.save('user', user);

    return user;
  };

  async findOne(userId: number) {
    const repository = new UserRepository();
    const user = await repository.findOne(userId);

    return user;
  };

  async findByEmail(email: string) {
    const repository = new UserRepository();
    const user = await repository.findByEmail(email);

    return user;
  };

  async create(name: string, email: string, password: string) {
    if (await this.findByEmail(email)) {

      throw new Error('E-mail já cadastrado')
    }

    const repository = new UserRepository();
    const newUser = await repository.create(name, email, password);

    return newUser;
  };

  async update(userId: number, name: string, email: string, password: string) {
    const repository = new UserRepository();
    const user = await repository.update(userId, name, email, password);
    const uniqueEmail = await this.findByEmail(email);

    if (uniqueEmail && uniqueEmail.email !== email) {
      throw new Error('E-mail já cadastrado')
    }

    return user;
  };

  async delete(userId: number) {
    const repository = new UserRepository();
    await repository.delete(userId);
  };
};