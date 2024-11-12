import MainLayout from "../layouts/mainLayout";
import { ProjectGrid } from "@/components/ui/projectGrid";


export default function MyPage() {
  const content = (
    <><div className="w-full items-center flex flex-col">
      <p className="text-md  text-slate-200 mb-8 md:text-xl text-center">Currently just a placeholder(nohing to see here yet):</p>
    </div>
      <ProjectGrid /></>
  )
  return <MainLayout title="Projects" darkBg={true} divContent={content}></MainLayout>
}


/*


        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">

            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>A brief description of Project 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Technologies used: React, Node.js, MongoDB</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>A brief description of Project 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Technologies used: Python, Django, PostgreSQL</p>
              </CardContent>
            </Card>
          </div>
        </section>
 */