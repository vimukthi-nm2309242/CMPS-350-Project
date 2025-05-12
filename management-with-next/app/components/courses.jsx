"use server";

// import React from "react";
// import { top3CompletedAction, getTop3CurrentCourseAction } from "./actions";

import {
  top3CompletedAction,
  getTop3CurrentCourseAction,
  getStudentsNotCompleteCourse,
  getCourseCountAction,
} from "../actions";

export async function Courses() {
  const topCourses = await top3CompletedAction();
  const topCurrent = await getTop3CurrentCourseAction();
  const noCourses = await getStudentsNotCompleteCourse();
  const courseCount = await getCourseCountAction();

  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold text-gray-800">
          {courseCount._count.id} Courses Available
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Top 3 Completed Courses
          </h2>
          <ul className="space-y-3">
            {topCourses.map((course) => (
              <li key={course.code} className="border-b pb-2 last:border-b-0">
                <span className="font-medium text-gray-700">
                  {course.name} –{" "}
                </span>
                <span className="text-blue-600 font-semibold">
                  {course._count.completedCourses} students completed
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Top 3 Current Courses
          </h2>
          <ul className="space-y-3">
            {topCurrent.map((course) => (
              <li key={course.code} className="border-b pb-2 last:border-b-0">
                <span className="font-medium text-gray-700">
                  {course.name} –{" "}
                </span>
                <span className="text-blue-600 font-semibold">
                  {course._count.currentCourses} students enrolled
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 shadow hover:shadow-md transition flex items-center justify-center text-center">
          <span className="text-gray-800 font-medium text-lg">
            {noCourses} students have not completed any courses
          </span>
        </div>
      </div>
    </>
  );
}
