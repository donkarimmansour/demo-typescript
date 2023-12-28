import { PrismaClient } from "@db/mongodb";


// create an instance of prisma client
const prisma = new PrismaClient();

type PrismaContextType = {
  prisma: PrismaClient;
};


const prismaContext = (): PrismaContextType => ({ prisma }) 

export default prismaContext