require('dotenv').config();

import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export const utils = {
    DATABASE_URL: process.env.DATABASE_URL as string,
    PORT: process.env.PORT || 8000
}