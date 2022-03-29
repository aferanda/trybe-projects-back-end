import jwtGenerator from '../helpers/jwtGenerator';
import { IUser } from '../interfaces/interfaces';
import prisma from '../models/prismaClient';

class UserService {
  createUser = async (user: IUser) => {
    const newUser = await prisma.user.create({
      data: user,
    });

    const token = jwtGenerator(newUser);

    return { code: 201, token };
  };
}

export default new UserService();