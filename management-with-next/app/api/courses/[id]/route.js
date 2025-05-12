import courseRepo from "@/app/repo/course-repo";

const courserepo = new courseRepo();

export async function DELETE(req, params) {
  const { course } = params;

  try {
    const result = await courserepo.deleteCourse(course);

    if (!result.error) {
      return Response.json(result, {
        message: result.error.message,
        status: result.error.message,
      });
    }
    return Response.json({
      message: result.error.message,
      status: result.error.status,
    });
  } catch (e) {
    return Response.json({ message: "Cannot complete action", status: 500 });
  }
}

export async function PATCH(req, params) {
  const { course } = params;
  const courseData = req.json();

  try {
    const result = await courserepo.updateCourse(courseData, course);
    if (!result.error) {
      return Response.json(result, { message: "Card updated successfully" });
    }
    return Response.json({
      message: result.error.message,
      status: result.error.status,
    });
  } catch (e) {
    return Response.json({ message: "Cannot complete action", status: 500 });
  }
}
