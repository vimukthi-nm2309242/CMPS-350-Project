import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class adminRepo {
  async getAllAdmins() {
    return await prisma.admin.findMany();
  }
  async getAdminId(adminId) {
    try {
      return await prisma.admin.findUnique({
        where: {
          id: adminId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "No admin with this id.",
          status: 404,
        },
      };
    }
  }
  async createAdmin(adminData) {
    return await prisma.admin.create({
      data: adminData,
    });
  }
  async updateAdmin(adminId, adminData) {
    try {
      return await prisma.admin.update({
        data: adminData,
        where: {
          id: adminId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "Cannot update admin because it does not exist",
          status: 404,
        },
      };
    }
  }

  async deleteAdmin(adminId) {
    try {
      return await prisma.admin.delete({
        where: {
          id: adminId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "Unable to delete this admin",
          status: 404,
        },
      };
    }
  }
}