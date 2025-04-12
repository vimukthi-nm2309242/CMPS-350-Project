import courseRepo from "@/app/repo/course-repo";

export async function GET(req){
    const courses = await courseRepo.getCourses()
    return Response.json(courses, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });
}

export async function POST(req){
    const course = await req.json()
    const newCourse = await courseRepo.addCourse(course)
    return Response.json(newCourse, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });
}

