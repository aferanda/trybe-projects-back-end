import { Request, Response } from 'express';
import userServices from '../services/user.services';

class UserController {
  createUser = async (req: Request, res: Response): Promise<Response> => {
    const { code, token } = await userServices.createUser(req.body);

    return res.status(code).json({ token });
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    const { code, token, error } = await userServices.login(req.body);

    if (error) return res.status(code).json({ error });

    return res.status(code).json({ token });
  };
}

export default new UserController();