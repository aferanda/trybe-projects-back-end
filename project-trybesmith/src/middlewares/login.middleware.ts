import { Request, Response, NextFunction } from 'express';
import schema from '../schemas/login.schema';

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ error: message });
  }

  return next();
};