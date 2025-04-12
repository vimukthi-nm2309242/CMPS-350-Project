import courseRepo from "@/app/repo/course-repo";

export async function DELETE(req, {params}) {
    const response = await courseRepo.deleteCourse(params.id)
    return Response.json(response, {status: 200})
    
}

export async function PUT(req, {params}) {
    const updatedCourse = await req.json()
    const response = await courseRepo.updateCourse(params.id, updatedCourse)
    return Response.json(response, {status: 200})
    
}