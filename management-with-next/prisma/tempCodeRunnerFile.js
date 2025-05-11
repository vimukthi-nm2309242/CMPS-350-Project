import { PrismaClient } from "@prisma/client";
import fs from "fs-extra";
import path from "path";

const prisma = new PrismaClient();

// Read the JSON files
const coursesData = await fs.readJSON(
  path.join(process.cwd(), "app/data/courses.json")
);
const usersData = await fs.readJSON(
  path.join(process.cwd(), "app/data/users.json")
);
async function seed() {
  console.log(`Start seeding...`);

  // First, create all users and map usernames to IDs for instructors
  const instructorsMap = {};
  const studentsMap = {};

  for (const userData of usersData) {
    const userDataForPrisma = {
      // Create a data object
      username: userData.username,
      password: userData.password,
      type: userData.type,
    };

    if (userData.id !== undefined && userData.id !== null) {
      userDataForPrisma.id = userData.id;
    }

    console.log("User created");

    let user;

    try {
      user = await prisma.user.create({
        data: userDataForPrisma,
      });

      // switch cases to create student based off of the type
      switch (userData.type) {
        case "student":
          // Create student
          const student = await prisma.student.create({
            data: {
              userId: user.id,
            },
          });
          studentsMap[user.username] = student.id;
          break;

        case "instructor":
          // Create instructor
          const instructor = await prisma.instructor.create({
            data: {
              userId: user.id,
            },
          });
          instructorsMap[user.username] = instructor.id;
          break;

        case "admin":
          // Create admin
          await prisma.admin.create({
            data: {
              userId: user.id,
            },
          });
          break;
      }
    } catch (e) {
      console.log(`Error creating user ${userData.username}:`, e);
    }
  }

  // Create all courses with full details from JSON
  const coursesMap = {};

  for (const courseData of coursesData) {
    // Find instructor ID if available
    const instructorId = instructorsMap[courseData.instructor] || null;

    try{
      
    }
    const course = await prisma.course.create({
      data: {
        id: courseData.id,
        courseID: courseData.id,
        courseName: courseData.name,
        code: courseData.code,
        category: courseData.category,
        description: courseData.description,
        instructor: courseData.instructor,
        instructorId: instructorId,
        openForRegistration: courseData.openForRegistration,
        status: courseData.status,
        availableSeats: courseData.availableSeats,
        prerequisites: courseData.prerequisites || [], //since i put type json its much easier now
      },
    });

    coursesMap[course.courseID] = course.id;
    console.log(`Created course: ${course.courseName} (${course.courseID})`);
  }

  // Create the student course relationships
  for (const userData of usersData) {
    if (userData.type === "student") {
      const studentId = studentsMap[userData.username];

      if (!studentId) {
        console.log(
          `Student ${userData.username} not found, skipping course assignments`
        ); //preventing errors incase anything happens
        continue;
      }

      // Process completed courses
      if (userData.completedCourses && userData.completedCourses.length > 0) {
        for (const completedCourse of userData.completedCourses) {
          if (coursesMap[completedCourse.courseID]) {
            await prisma.completedCourse.create({
              data: {
                studentId: studentId,
                courseId: coursesMap[completedCourse.courseID],
                grade: completedCourse.grade,
              },
            });
            console.log(
              `Added completed course ${completedCourse.courseID} for ${userData.username}`
            );
          } else {
            console.log(
              `Course ${completedCourse.courseID} not found, skipping`
            );
          }
        }
      }

      //current courses
      if (userData.currentCourses && userData.currentCourses.length > 0) {
        for (const currentCourse of userData.currentCourses) {
          if (coursesMap[currentCourse.courseID]) {
            await prisma.currentCourse.create({
              data: {
                studentId: studentId,
                courseId: coursesMap[currentCourse.courseID],
                grade: currentCourse.grade !== "-" ? currentCourse.grade : null,
              },
            });
            console.log(
              `Added current course ${currentCourse.courseID} for ${userData.username}`
            );
          } else {
            console.log(`Course ${currentCourse.courseID} not found, skipping`);
          }
        }
      }

      //registered courses
      if (userData.registeredCourses && userData.registeredCourses.length > 0) {
        for (const registeredCourse of userData.registeredCourses) {
          if (coursesMap[registeredCourse.courseID]) {
            await prisma.registeredCourse.create({
              data: {
                studentId: studentId,
                courseId: coursesMap[registeredCourse.courseID],
              },
            });
            console.log(
              `Added registered course ${registeredCourse.courseID} for ${userData.username}`
            );
          } else {
            console.log(
              `Course ${registeredCourse.courseID} not found, skipping`
            );
          }
        }
      }
    }
  }

  console.log(`Seeding finished.`);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
