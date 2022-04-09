import jwtGenerator from '../helpers/jwtGenerator';
import { IUser, ILogin } from '../interfaces/interfaces';
import prisma from '../models/prismaClient';

class UserService {
  createUser = async (user: IUser) => {
    const newUser = await prisma.user.create({
      data: user,
    });

    const token = jwtGenerator(newUser);

    return { code: 201, token };
  };

  login = async (credentials: ILogin) => {
    const { username, password } = credentials;
    const user = await prisma.user.findFirst({
      where: { username },
    });

    if (!user || user.password !== password) {
      return { code: 401, error: 'Username or password invalid' };
    }

    const token = jwtGenerator(user);

    return { code: 200, token };
  };
}

export default new UserService();