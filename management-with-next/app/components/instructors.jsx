"use server";
import { getTotalCoursesTaught, getInstructorCount } from "../actions";

export async function Instructors() {
  const coursestaught = await getTotalCoursesTaught();
  const instructors = await getInstructorCount();
  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold text-gray-800">
          {instructors._count.id} instructors working
        </h1>
      </div>
      <div>
      </div>
    </>
  );
}
