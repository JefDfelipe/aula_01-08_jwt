import { Request } from 'express';
import UserService from '../../src/services/user-service';
import UserController from "../../src/controllers/user-controller";

const makeSut = () => new UserController();

describe('User Controller', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('index', () => {
    it('should return all users when accesing user route', async () => {
      const sut = makeSut();
      const user = [{
        id: 1,
        name: 'any name',
        email: 'any@mail',
        password: '1234'
      }];

      jest.spyOn(UserService.prototype, 'find').mockResolvedValue(user);

      const req: any = {} as Request;
      const res: any = {
        json: jest.fn().mockResolvedValue(user),
        status: jest.fn()
      };

      const resController = await sut.index(req, res);

      expect.assertions(1);
      expect(resController).toEqual(user);
    });
  });

  describe('show', () => {

  });

  describe('store', () => {

  });

  describe('update', () => {

  });

  describe('delete', () => {

  });
});