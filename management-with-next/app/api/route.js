import userRepo from "../repo/user-repo";

const userrepo = new userRepo();

export async function GET(req) {
  const users = await userrepo.getAllUsers();

  return Response.json(users, { status: 200 });
}