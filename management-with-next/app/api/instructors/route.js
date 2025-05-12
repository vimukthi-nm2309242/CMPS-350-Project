import instructorRepo from "@/app/repo/instructor-repo";

const instructorrepo = new instructorRepo();

export async function GET(req) {
  const instructors = await instructorrepo.getAllInstructors()

  return Response.json(instructors, { status: 200 });
}
