import courseRepo from "@/app/repo/course-repo";

export async function DELETE(req, {params}) {
    const response = await courseRepo.deleteCourse(params.id)
    return Response.json(response, {status: 200})
    
}