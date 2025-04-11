import path from 'path';
import { promises as fs } from 'fs';

const coursesPath = path.join(process.cwd(), 'jsons/courses.json');
const usersPath = path.join(process.cwd(), 'jsons/users.json');

// Course functions
export async function getCourses() {
  const fileContent = await fs.readFile(coursesPath, 'utf8');
  return JSON.parse(fileContent);
}

export async function getCourse(courseId) {
  const courses = await getCourses();
  const course = courses.find((c) => c.id === courseId);
  if (course) {
    return course;
  } else {
    throw new Error('Course not found');
  }
}

export async function updateCourse(course) {
  let courses = await getCourses();
  
  const foundIndex = courses.findIndex((c) => c.id === course.id);
  
  if (foundIndex >= 0) {
    Object.assign(courses[foundIndex], course);
    await fs.writeFile(coursesPath, JSON.stringify(courses, null, 2));
    return courses[foundIndex];
  } else {
    throw new Error('Course not found for update');
  }
}

// User functions
export async function getUsers() {
  const fileContent = await fs.readFile(usersPath, 'utf8');
  return JSON.parse(fileContent);
}

export async function getUser(username) {
  const users = await getUsers();
  const user = users.find((u) => u.username === username);
  if (user) {
    return user;
  } else {
    throw new Error('User not found');
  }
}

export async function updateUser(user) {
  let users = await getUsers();
  
  const foundIndex = users.findIndex((u) => u.username === user.username);
  
  if (foundIndex >= 0) {
    Object.assign(users[foundIndex], user);
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
    return users[foundIndex];
  } else {
    throw new Error('User not found for update');
  }
}

// Registration function
export async function registerCourse(username, courseId) {
  try {
    // Get user and course
    const user = await getUser(username);
    const course = await getCourse(courseId);
    
    // Create arrays if they don't exist
    if (!user.registeredCourses) {
      user.registeredCourses = [];
    }
    
    if (!course.registeredStudents) {
      course.registeredStudents = [];
    }
    
    // Check if user is already registered
    const alreadyRegistered = user.registeredCourses.some(
      (c) => c.courseID === courseId
    );
    
    if (alreadyRegistered) {
      throw new Error('User already registered for this course');
    }
    
    // Add course to user's registered courses
    user.registeredCourses.push({
      courseID: course.id,
      courseName: course.name,
      status: "pending"
    });
    
    // Add user to course's registered students
    course.registeredStudents.push(username);
    
    // Decrease available seats
    course.availableSeats--;
    
    // Update both files
    await updateUser(user);
    await updateCourse(course);
    
    return { success: true, message: 'Registration successful' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}