import { Request, Response } from 'express';
import userServices from '../services/user.services';

class UserController {
  createUser = async (req: Request, res: Response): Promise<Response> => {
    const { code, token } = await userServices.createUser(req.body);

    return res.status(code).json({ token });
  };
}

export default new UserController();