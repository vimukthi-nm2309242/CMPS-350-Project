// app/statistics/page.tsx
// import { getTop3CompletedAction } from "./actions/server-actions";
import { top3CompletedAction, getTop3CurrentCourseAction } from "./actions";

export default async function StatisticsPage() {
  const topCourses = await top3CompletedAction();
  const topCurrent = await getTop3CurrentCourseAction();

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Top 3 Completed Courses</h1>
        <ul className="space-y-2">
          {topCourses.map((course) => (
            <li key={course.code}>
              <span className="font-medium">{course.name} </span>
              <span className="text-blue-600 font-semibold">
                Completed: {course._count.completedCourses} times
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Top 3 Current Courses</h1>
        <ul className="space-y-2">
          {topCurrent.map((course) => (
            <li key={course.code}>
              <span className="font-medium">{course.name} </span>
              <span className="text-blue-600 font-semibold">
                Completed: {course._count.currentCourses} times
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
