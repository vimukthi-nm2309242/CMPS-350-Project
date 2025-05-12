"use server";

import statsRepo from "../repo/stats-repo";

export async function getTop3CompletedAction() {
  return await statsRepo.getTop3CompletedCourses();
}

export async function getAgradeRAteAction(cID) {
  return await statsRepo.getAgradeRate(cID);
}

export async function getFailureRatePerCourseAction() {
  return await statsRepo.getFailureRatePerCourse();
}

export async function getTop3CurrentCourseACtion() {
  return await statsRepo.getTop3CurrentCourse();
}

export async function getStudentsNotCompleteCourseAction() {
  return await statsRepo.getStudentsNotCompleteCourse();
}
export async function countInstructorsWithOneOrNoCoursesAction() {
  return await statsRepo.countInstructorsWithOneOrNoCourses();
}
export async function getTotalCoursesTaughtAction() {
  return await statsRepo.getTotalCoursesTaught();
}
