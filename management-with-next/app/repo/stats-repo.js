import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class statsRepo {
  async getCourseCount() {
    return await prisma.course.aggregate({
      _count: { id: true },
    });
  }

  async getStudentCount() {
    return await prisma.student.aggregate({
      _count: { id: true },
    });
  }
  async getInstructorCount() {
    return await prisma.instructor.aggregate({
      _count: { id: true },
    });
  }

  async getTop3CompletedCourses() {
    return await prisma.course.findMany({
      orderBy: {
        completedCourses: {
          _count: "desc",
        },
      },
      take: 3,
      include: {
        _count: {
          select: { completedCourses: true },
        },
      },
    });
  }

  async getAgradeRate(courseId) {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        name: true,
        completedCourses: {
          select: {
            grade: true,
          },
        },
      },
    });
    const total = course?.completedCourses.length ?? 0;
    const aGrade =
      course?.completedCourses.filter((cour) => cour.grade === "A").length ?? 0;

    return {
      courseName: course?.name,
      totCompleted: total,
      totPass: aGrade,
      rate: total > 0 ? (aGrade / total) * 100 : 0,
    };
  }

  async getFailureRatePerCourse() {
    const completed = await prisma.course.findMany({
      select: {
        id: true,
        name: true,
        completedCourses: {
          select: {
            grade: true,
          },
        },
      },
    });

    return completed.map((course) => {
      const total = course.completedCourses.length;
      const failed = course.completedCourses.filter(
        (c) => c.grade === "F"
      ).length;

      return {
        courseName: course.name,
        totalCompleted: total,
        failedCount: failed,
        failureRate: `${total > 0 ? (failed / total) * 100 : 0}%`,
      };
    });
  }
  async getTop3CurrentCourse() {
    return await prisma.course.findMany({
      orderBy: {
        currentCourses: {
          _count: "desc",
        },
      },
      take: 3,
      include: {
        _count: {
          select: { currentCourses: true },
        },
      },
    });
  }
  async getStudentsNotCompleteCourse() {
    const students = await prisma.student.findMany({
      where: {
        completedCourses: {
          none: {},
        },
      },
      //   select : {
      //     user: {
      //         select: {
      //             username: true
      //         }
      //     }
      //   }
    });

    return students.length;
  }

  async countInstructorsWithOneOrNoCourses() {
    const instructors = await prisma.instructor.findMany({
      select: {
        _count: {
          select: { courses: true },
        },
      },
    });

    return instructors.filter((i) => i._count.courses <= 1).length;
  }
  async getTotalCoursesTaught() {
    const result = await prisma.instructor.findMany({
      select: {
        user: {
          select: {
            username: true,
          },
        },
        _count: {
          select: { courses: true },
        },
      },
      orderBy: {
        courses: {
          _count: "desc",
        },
      },
    });

    // If you still want the overall total:
    const total = result.reduce((sum, curr) => sum + curr._count.courses, 0);

    return {
      totalCoursesTaught: total,
      breakdown: result.map((instructor) => ({
        username: instructor.user.username,
        coursesTaught: instructor._count.courses,
      })),
    };
  }

  //   async getStudentsPerCourseCategory() {
  //     return await prisma.course.groupBy({
  //       by: ["category"],
  //       where: {
  //         category: {
  //           not: null, // single set of braces here
  //         },
  //       },
  //       _count: {
  //         registeredCourses: true,
  //       },
  //       orderBy: {
  //         _count: {
  //           registeredCourses: "desc",
  //         },
  //       },
  //     });
  //   }
}
