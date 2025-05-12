"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function top3CompletedAction() {
  const topCourses = await prisma.course.findMany({
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

  return topCourses.map((course) => ({
    ...course,
    completedCoursesCount: course._count.completedCourses,
  }));
}

export async function getAgradeRate(courseId) {
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

export async function getFailureRatePerCourseAction() {
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
export async function getTop3CurrentCourseAction() {
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
export async function getStudentsNotCompleteCourse() {
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

export async function countInstructorsWithOneOrNoCourses() {
  const instructors = await prisma.instructor.findMany({
    select: {
      _count: {
        select: { courses: true },
      },
    },
  });

  return instructors.filter((i) => i._count.courses <= 1).length;
}
export async function getTotalCoursesTaught() {
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

export async function getCourseCountAction() {
  return await prisma.course.aggregate({
    _count: { id: true },
  });
}
