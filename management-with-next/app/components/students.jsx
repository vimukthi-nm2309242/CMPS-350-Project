"use server";

import { getStudentCount } from "../actions";

export async function Student(){
    const students = await getStudentCount();
    return(
      <div>
        <h1 className="text-3xl font-extrabold text-gray-800">
          {students._count.id} students exist
        </h1>
      </div>
    );
}