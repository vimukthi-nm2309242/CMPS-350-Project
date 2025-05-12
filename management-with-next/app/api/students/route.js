import studentRepo from "@/app/repo/student-repo";

const studentrepo = new studentRepo();

export async function GET(req) {
  const students = await studentrepo.getAllStudents();

  return Response.json(students, { status: 200 });
}
