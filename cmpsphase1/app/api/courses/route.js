import courseRepo from "@/app/repo/course-repo";

export async function GET(req){
    const courses = await courseRepo.getCourses()
    return Response.json(courses, {status: 200})
}