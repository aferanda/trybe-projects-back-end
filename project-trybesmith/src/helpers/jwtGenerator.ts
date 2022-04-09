import jwt from 'jsonwebtoken';
import { IToken } from '../interfaces/interfaces';

const jwtConfig = { expiresIn: '1d' };

const token = ({ id, username }: IToken) => jwt.sign({ id, username }, 'secret', jwtConfig);

export default token;