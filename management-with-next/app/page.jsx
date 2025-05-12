// app/statistics/page.tsx
// import { getTop3CompletedAction } from "./actions/server-actions";
import { Courses } from "./components/courses";
import { Instructors } from "./components/instructors";
import { Student } from "./components/students";
export default async function Home() {
  return (
    <div className="pb-4">
      {/* <h1 className="text-2xl:">Statistics from student registration system</h1> */}
      <Courses />
      {/* <Instructors /> */}
      <Student />
    </div>
  );
}
