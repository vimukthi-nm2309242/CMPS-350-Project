import userRepo from "@/app/repo/user-repo";

export async function GET(req){
    const users = await userRepo.getUsers();
    return Response.json(users, {status:200});
}
