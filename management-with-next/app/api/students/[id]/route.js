import studentRepo from "@/app/repo/student-repo";

const studentrepo = new studentRepo();

export async function DELETE(req, params) {
  const { student } = params;

  try {
    const result = await studentrepo.deleteStudent(student);

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
  const { student } = params;
  const studentData = req.json();

  try {
    const result = await studentrepo.updateCard(studentData, student);
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
