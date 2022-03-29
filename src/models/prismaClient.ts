import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/Trybesmith`,
    },
  },
});

export default prisma;