
import { SkillBarsComponent } from "@/components/ui/skillbar";

import MainLayout from "../layouts/mainLayout";



export default function MyPage() {

    const frontendSkills = [
        { name: 'HTML', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'React/Next.js', level: 70 },
        { name: 'TypeScript', level: 70 },
        { name: 'CSS/ShadCn/Tailwind/Motion Framer', level: 60 },

    ]

    const backendSkills = [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'GraphQL', level: 50 },
        { name: 'MongoDB', level: 50 },
        { name: 'SQL', level: 70 },
    ]

    const webscrapingSkills = [
        { name: 'Scrapy', level: 50 },
        { name: 'BeautifulSoup', level: 50 },
        { name: 'Puppeteer', level: 60 },
        { name: 'Playwright', level: 50 },
    ]
    const wordpressSkills = [
        { name: 'Plugin development', level: 50 },
        { name: 'Theme development', level: 50 },

    ]

    const content = (
        < div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" >

            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Proficiencies</h2>
                        <SkillBarsComponent
                            skills={frontendSkills}
                            title="Frontend Development"
                            description="My expertise in creating responsive, interactive, and user-friendly web interfaces using modern technologies and frameworks."
                        />
                        <SkillBarsComponent
                            skills={backendSkills}
                            title="Backend Development"
                            description="My proficiency in server-side programming, API development, and database management to build robust and scalable web applications."
                        />
                        <SkillBarsComponent
                            skills={webscrapingSkills}
                            title="Webscraping "
                            description="My expertise in extracting data from web pages using various libraries and frameworks."
                        />

                        <SkillBarsComponent
                            skills={wordpressSkills}
                            title="Wordpress Development"
                            description="My skills in developing custom plugins and themes to enhance the functionality and appearance of WordPress sites."
                        />
                    </div>
                </div>
            </div>
        </div >
    )
    return (
        <MainLayout title={"Skills"} darkBg={true} divContent={content}></MainLayout>

    )


}


/*

  return <>

  <section id="skills" className="mb-16">
  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
  <div className="flex flex-wrap gap-2">
    <Badge>JavaScript</Badge>
    <Badge>React</Badge>
    <Badge>Node.js</Badge>
    <Badge>Python</Badge>
    <Badge>SQL</Badge>
    <Badge>Git</Badge>
  </div>
 </section>
   </>

*/