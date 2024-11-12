import { Education } from "@/components/education";
import MainLayout from "../layouts/mainLayout";



export default function MyEducation() {
  const content = (

    <Education />
  )
  return <MainLayout  title="My Career" divContent={content}></MainLayout>
}