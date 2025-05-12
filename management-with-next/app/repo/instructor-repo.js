import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class instructorRepo {
  async getAllInstructors() {
    return await prisma.instructor.findMany();
  }
  async getInstrctorId(instructorId) {
    try {
      return await prisma.instructor.findUnique({
        where: {
          id: instructorId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "No instructor with this id.",
          status: 404,
        },
      };
    }
  }
  async createInstructor(instructorData) {
    return await prisma.instructor.create({
      data: instructorData,
    });
  }
  async updateCourse(instructorId, instructorData) {
    try {
      return await prisma.instructor.update({
        data: instructorData,
        where: {
          id: instructorId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "Cannot update instructor because it does not exist",
          status: 404,
        },
      };
    }
  }

  async deleteCourse(instructorId) {
    try {
      return await prisma.instructor.delete({
        where: {
          id: instructorId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "Unable to delete this instructor",
          status: 404,
        },
      };
    }
  }
}