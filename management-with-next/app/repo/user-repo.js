import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class userRepo {
  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async getUserByType(userType) {
    return await prisma.user.findMany({
      where: {
        type: userType,
      },
    });
  }
}

//small repo just to retreieve all the users in the database plus being able to retreive by the type
