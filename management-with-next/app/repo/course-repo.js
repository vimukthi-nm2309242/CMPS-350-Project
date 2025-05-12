import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class courseRepo {
  async getAllCourses() {
    return await prisma.course.findMany();
  }
  async getCourseById(courseCode) {
    try {
      return await prisma.course.findUnique({
        where: {
          code: courseCode,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "No course with this code.",
          status: 404,
        },
      };
    }
  }
  async createCourse(courseData) {
    return await prisma.course.create({
      data: courseData,
    });
  }
  async updateCourse(courseCode, courseData) {
    try {
      return await prisma.course.update({
        data: courseData,
        where: {
          code: courseCode,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "Cannot update course because it does not exist",
          status: 404,
        },
      };
    }
  }

  async deleteCourse(courseCode) {
    try {
      return await prisma.course.delete({
        where: {
          code: courseCode,
        },
      });
    } catch (e) {
      return {
        error: {
          message: "Unable to delete this course",
          status: 404,
        },
      };
    }
  }
}
