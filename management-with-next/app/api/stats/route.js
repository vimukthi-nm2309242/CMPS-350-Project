import statsRepo from "@/app/repo/stats-repo";

const statsrepo = new statsRepo();

export async function GET(req) {
  const data = await statsrepo.getTop3CompletedCourses()

  // const data = await statsrepo.getStudentsPerCourseCategory();
  return Response.json(data);
}
