import {PrismaClient} from '@prisma/client';

const prismaClient = new PrismaClient();//inicializando para acessar os models

export default prismaClient;