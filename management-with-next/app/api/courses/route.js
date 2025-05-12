import courseRepo from "@/app/repo/course-repo";

const courserepo = new courseRepo();

export async function GET(req) {
  const courses = await courserepo.getAllCourses();

  return Response.json(courses, { status: 200 });
}