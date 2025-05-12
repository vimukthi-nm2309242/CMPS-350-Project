import adminRepo from "@/app/repo/admin-repo";

const adminrepo = new adminRepo();

export async function GET(req) {
  const admin = await adminrepo.getAllAdmins();

  return Response.json(admin, { status: 200 });
}
