import SkillsLogo from "./skillsLogo";
import { Card } from "./ui/card";

const Projects = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Image to Doc",
      href: "https://github.com/Dev-Saurabh-K/image-to-doc",
      description:
        "A tool that converts images into downloadable documents using AI-powered text extraction and formatting.",
    },
    {
      title: "Planner v2",
      href: "https://github.com/Dev-Saurabh-K/Planner-v2",
      description:
        "A planning and productivity application designed to manage schedules, tasks, and daily workflows efficiently.",
    },
    {
      title: "ServerED",
      href: "https://github.com/Dev-Saurabh-K/serverED",
      description:
        "A backend server project showcasing APIs, authentication flow, and modular server-side structure.",
    },
    {
      title: "Greeting Card Generator",
      href: "https://github.com/Dev-Saurabh-K/Greeting-card-generator",
      description:
        "An app that generates customized greeting cards with dynamic styling and personalized messages.",
    },
  ];

  return (
    <>
      <div className="pl-20">
        <SkillsLogo title="My Projects" />
      </div>
      <div>
        {components.map((component) => (
          <div key={component.href} className="h-[400px] w-[400px]">
            <a href={component.href} >
              <div>{component.title}</div>
              <div>{component.description}</div>
            </a>
            </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
