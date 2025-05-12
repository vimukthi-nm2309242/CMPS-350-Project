// app/statistics/page.tsx
// import { getTop3CompletedAction } from "./actions/server-actions";
import { Courses } from "./components/courses";
export default async function Home() {
  return(
    <div>
      <h1 className="text-2xl:">Statistics from student registration system</h1>
      <Courses />
    </div>
  )
}
