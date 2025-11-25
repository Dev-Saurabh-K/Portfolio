import SkillsLogo from "./skillsLogo";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Projects = () => {
  const components: {
    title: string;
    href: string;
    live: string;
    description: string;
    img: string;
    color: string;
  }[] = [
    {
      title: "Image to Doc",
      href: "https://github.com/Dev-Saurabh-K/image-to-doc",
      live: "https://dev-saurabh-k.github.io/image-to-doc",
      img: "/planner.png",
      color: "border-blue-500",
      description:
        "A tool that converts images into downloadable documents using AI-powered text extraction and formatting.",
    },
    {
      title: "Planner v2",
      href: "https://github.com/Dev-Saurabh-K/Planner-v2",
      live: "https://planner-v2-dsk.vercel.app/",
      img: "/planner.png",
      color: "border-pink-300",
      description:
        "A planning and productivity application designed to manage schedules, tasks, and daily workflows efficiently.",
    },
    {
      title: "ServerED",
      href: "https://github.com/Dev-Saurabh-K/serverED",
      live: "#servered",
      img: "/planner.png",
      color: "border-slate-500",
      description:
        "A backend server project showcasing APIs, authentication flow, and modular server-side structure.",
    },
    {
      title: "Greeting Card Generator",
      href: "https://github.com/Dev-Saurabh-K/Greeting-card-generator",
      live: "#greeting",
      img: "/planner.png",
      color: "border-orange-500",
      description:
        "An app that generates customized greeting cards with dynamic styling and personalized messages.",
    },
  ];

  return (
    <>
      <div className="pl-40">
        <SkillsLogo title="My Projects" />
      </div>
      <Card className="lg-px-20 sm:px-3 rounded-2xl bg-primary">
        {components.map((component) => (
          <Card
            key={component.href}
            className={`h-[400px] rounded-2xl flex flex-row items-center justify-around sm:mx-3 flex-wrap mb-10 border-8 ${component.color}`}
          >
            <img
              src={component.img}
              alt=""
              className="h-32 w-[90%] md:h-[220px] md:[330px] lg:h-[220px] lg:w-[330px] border-2 border-primary rounded-2xl"
            />
            <div className="flex flex-col gap-3 m-3">
              <div className="text-blue-500 text-3xl">{component.title}</div>
              <div>{component.description}</div>
              <div className="flex flex-row gap-3 flex-wrap justify-center">
                <a href={component.live}>
                <Button className="cursor-pointer w-[150px] bg-blue-600 text-white hover:bg-blue-400">Live Site</Button>
              </a>
              <a href={component.href}>
                <Button className="cursor-pointer w-[150px] bg-accent text-white hover:bg-card">
                  Github Repo
                </Button>
              </a>
              {/* <img src="/down.svg" alt="" className="size-10"/> */}
              </div>
            </div>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default Projects;
