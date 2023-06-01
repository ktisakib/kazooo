import { PrismaClient } from '@prisma/client';
import useAccelerate from '@prisma/extension-accelerate';
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient().$extends(useAccelerate);
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient().$extends(useAccelerate);
  }
  prisma = global.prisma;
}

export default prisma;