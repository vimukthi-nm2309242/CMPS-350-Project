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
    // First check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { username: userData.username },
      include: {
        student: true,
        instructor: true,
        admin: true
      }
    });

    let user;

    if (existingUser) {
      console.log(`User ${userData.username} already exists, skipping creation`);
      user = existingUser;
      
      // Map existing user roles
      if (existingUser.student) {
        studentsMap[userData.username] = existingUser.student.id;
<<<<<<< Updated upstream
        //if the student already exists we map that student into the studentsmap of that index/username and then give it its id
      }
      if (existingUser.instructor) {
        instructorsMap[userData.username] = existingUser.instructor.id;
        //same for instructor
      }
    } else {
      // User doesn't exist, create a new one
      //Store in the user relation
=======
      }
      if (existingUser.instructor) {
        instructorsMap[userData.username] = existingUser.instructor.id;
      }
    } else {
      // User doesn't exist, create a new one
>>>>>>> Stashed changes
      const userDataForPrisma = {
        username: userData.username,
        password: userData.password,
        type: userData.type,
      };

<<<<<<< Updated upstream
      //include the id 
      if (userData.id !== undefined && userData.id !== null) {
        userDataForPrisma.id = userData.id;   //useData from the loop
      }

      //creates the user from the data we have taken before above
=======
      if (userData.id !== undefined && userData.id !== null) {
        userDataForPrisma.id = userData.id;
      }

>>>>>>> Stashed changes
      try {
        user = await prisma.user.create({
          data: userDataForPrisma,
        });
        
        console.log(`User created: ${user.username}`);

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
<<<<<<< Updated upstream
            //username of the student user is their student id
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        console.log(`⁠Error creating user ${userData.username}:`, e);
=======
        console.log(`Error creating user ${userData.username}:`, e);
>>>>>>> Stashed changes
        // Skip this user and continue with the next one
        continue;
      }
    }
  }

  // Create all courses with full details from JSON
  const coursesMap = {};

  for (const courseData of coursesData) {
    // Find instructor ID if available
<<<<<<< Updated upstream
    //by checking the name of instructor from the course info
=======
>>>>>>> Stashed changes
    const instructorId = instructorsMap[courseData.instructor] || null;

    try {
      // Check if the course already exists
      const existingCourse = await prisma.course.findUnique({
        where: { id: courseData.id }
      });

      let course;
      if (existingCourse) {
        console.log(`Course ${courseData.id} already exists, updating`);
        course = await prisma.course.update({
          where: { id: courseData.id },
          data: {
            code: courseData.code,
            name: courseData.name,
            category: courseData.category,
            description: courseData.description,
            instructor: courseData.instructor,
            instructorId: instructorId,
            openForRegistration: courseData.openForRegistration,
            status: courseData.status,
            availableSeats: courseData.availableSeats,
            prerequisites: courseData.prerequisites || [],
          },
        });
<<<<<<< Updated upstream
        console.log(`⁠Updated course: ${course.name} (${course.id})`);
      } else {
        //create brand new course if it doesnt exist
=======
        console.log(`Updated course: ${course.name} (${course.id})`);
      } else {
>>>>>>> Stashed changes
        course = await prisma.course.create({
          data: {
            id: courseData.id,
            code: courseData.code,
            name: courseData.name,
            category: courseData.category,
            description: courseData.description,
            instructor: courseData.instructor,
            instructorId: instructorId,
            openForRegistration: courseData.openForRegistration,
            status: courseData.status,
            availableSeats: courseData.availableSeats,
            prerequisites: courseData.prerequisites || [],
          },
        });
<<<<<<< Updated upstream
        console.log(`⁠Created course: ${course.name} (${course.id})`);
=======
        console.log(`Created course: ${course.name} (${course.id})`);
>>>>>>> Stashed changes
      }

      coursesMap[course.id] = course.id;
    } catch (e) {
      console.error(`Error creating course ${courseData.id}:`, e);
    }
  }

  // Create the student course relationships
  for (const userData of usersData) {
    if (userData.type === "student") {
      const studentId = studentsMap[userData.username];

      if (!studentId) {
        console.log(
<<<<<<< Updated upstream
        `⁠Student ${userData.username} not found, skipping course assignments`);
=======
          `Student ${userData.username} not found, skipping course assignments`
        );
>>>>>>> Stashed changes
        continue;
      }

      // Process completed courses
      if (userData.completedCourses && userData.completedCourses.length > 0) {
        for (const completedCourse of userData.completedCourses) {
          const courseId = completedCourse.courseID; // Use the direct courseID from JSON
          if (courseId) {
            try {
<<<<<<< Updated upstream
              // We check if the student course relationship exists or not
=======
              // Check if this relationship already exists
>>>>>>> Stashed changes
              const existingRelation = await prisma.completedCourse.findFirst({
                where: {
                  studentId: studentId,
                  courseId: courseId
                }
              });
              
              if (existingRelation) {
                console.log(
<<<<<<< Updated upstream
                  `⁠Completed course relation for ${courseId} and student ${userData.username} already exists, updating`
                );
                // If it does then we update that info for the student
=======
                  `Completed course relation for ${courseId} and student ${userData.username} already exists, updating`
                );
>>>>>>> Stashed changes
                await prisma.completedCourse.update({
                  where: { id: existingRelation.id },
                  data: { grade: completedCourse.grade }
                });
              } else {
                await prisma.completedCourse.create({
                  data: {
                    studentId: studentId,
                    courseId: courseId,
                    grade: completedCourse.grade,
                  },
                });
                console.log(
<<<<<<< Updated upstream
                 `Added completed course ${courseId} for ${userData.username}`);
              }
            } catch (e) {
              console.error(
                `⁠Error managing completed course ${courseId} for ${userData.username}:`,
=======
                  `Added completed course ${courseId} for ${userData.username}`
                );
              }
            } catch (e) {
              console.error(
                `Error managing completed course ${courseId} for ${userData.username}:`,
>>>>>>> Stashed changes
                e
              );
            }
          } else {
            console.log(
<<<<<<< Updated upstream
             `Course ${completedCourse.courseID} not found, skipping`
=======
              `Course ${completedCourse.courseID} not found, skipping`
>>>>>>> Stashed changes
            );
          }
        }
      }

      // Current courses
      if (userData.currentCourses && userData.currentCourses.length > 0) {
        for (const currentCourse of userData.currentCourses) {
          const courseId = currentCourse.courseID; // Use the direct courseID from JSON
          if (courseId) {
            try {
              // Check if this relationship already exists
              const existingRelation = await prisma.currentCourse.findFirst({
                where: {
                  studentId: studentId,
                  courseId: courseId
                }
              });
              
              if (existingRelation) {
                console.log(
<<<<<<< Updated upstream
                 `Current course relation for ${courseId} and student ${userData.username} already exists, updating⁠`
=======
                  `Current course relation for ${courseId} and student ${userData.username} already exists, updating`
>>>>>>> Stashed changes
                );
                await prisma.currentCourse.update({
                  where: { id: existingRelation.id },
                  data: { grade: currentCourse.grade !== "-" ? currentCourse.grade : null }
                });
              } else {
                await prisma.currentCourse.create({
                  data: {
                    studentId: studentId,
                    courseId: courseId,
                    grade: currentCourse.grade !== "-" ? currentCourse.grade : null,
                  },
                });
                console.log(
<<<<<<< Updated upstream
                `Added current course ${courseId} for ${userData.username}`
=======
                  `Added current course ${courseId} for ${userData.username}`
>>>>>>> Stashed changes
                );
              }
            } catch (e) {
              console.error(
                `Error managing current course ${courseId} for ${userData.username}:`,
                e
              );
            }
          } else {
            console.log(`Course ${currentCourse.courseID} not found, skipping`);
          }
        }
      }

      // Registered courses
      if (userData.registeredCourses && userData.registeredCourses.length > 0) {
        for (const registeredCourse of userData.registeredCourses) {
          const courseId = registeredCourse.courseID; // Use the direct courseID from JSON
          if (courseId) {
            try {
              // Check if this relationship already exists
              const existingRelation = await prisma.registeredCourse.findFirst({
                where: {
                  studentId: studentId,
                  courseId: courseId
                }
              });
              
              if (existingRelation) {
                console.log(
                  `Registered course relation for ${courseId} and student ${userData.username} already exists, skipping`
                );
              } else {
                await prisma.registeredCourse.create({
                  data: {
                    studentId: studentId,
                    courseId: courseId,
                  },
                });
                console.log(
                  `Added registered course ${courseId} for ${userData.username}`
                );
              }
            } catch (e) {
              console.error(
                `Error managing registered course ${courseId} for ${userData.username}:`,
                e
              );
            }
          } else {
            console.log(
<<<<<<< Updated upstream
              `⁠Course ${registeredCourse.courseID} not found, skipping`
=======
              `Course ${registeredCourse.courseID} not found, skipping`
>>>>>>> Stashed changes
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