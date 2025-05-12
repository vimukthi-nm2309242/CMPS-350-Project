import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class studentRepo {
  async getAllStudents() {
    return await prisma.student.findMany({
      include: {
        completedCourses: true,
        currentCourses: true,
        registeredCourses: true,
      },
    });
  }
  async getStudentByID(studId) {
    try {
      return await prisma.student.findUnique({
        where: {
          id: studId,
        },
        include: {
          completedCourses: true,
          currentCourses: true,
          registeredCourses: true,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "No student with this ID exists",
          status: 404,
        },
      };
    }
  }
  async createStudent(studData) {
    return await prisma.student.create({
      data: studData,
    });
  }
  async updateStudent(studId, studData) {
    try {
      return await prisma.student.update({
        data: studData,
        where: {
          id: studId,
        },
      });
    } catch (e) {
      return {
        error: {
          messgae: "Unable to update this student.",
          status: 404,
        },
      };
    }
  }
  async deleteStudent(studId) {
    try {
      return await prisma.student.delete({
        where: {
          id: studId,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "No student with this ID exists",
          status: 404,
        },
      };
    }
  }
}
