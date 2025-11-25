import { title } from "process";
import { Card } from "./ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const frontendSkills = [
    {
      name: "HTML",
      logo: "/html-light.svg",
      percentage: 96,
      title: "Markup language for structuring pages",
      theme: "text-orange-500",
    },
    {
      name: "CSS",
      logo: "/css-light.svg",
      percentage: 93,
      title: "Styling language for designing web pages",
      theme: "text-blue-500",
    },
    {
      name: "JavaScript",
      logo: "/javascript.svg",
      percentage: 80,
      title: "Programming language for web interactivity",
      theme: "text-yellow-400",
    },
    {
      name: "Tailwind CSS",
      logo: "/tailwind.svg",
      percentage: 85,
      title: "Utility-first CSS framework for fast UI development",
      theme: "text-sky-400",
    },
    {
      name: "React JS",
      logo: "/reactjs.svg",
      percentage: 75,
      title: "JavaScript library for building UI components",
      theme: "text-cyan-400",
    },
    {
      name: "NEXT JS",
      logo: "/nextjs-light.svg",
      percentage: 65,
      title: "React framework for full-stack and server-rendered apps",
      theme: "text-white-800",
    },
  ];
  const backendSkills = [
    {
      name: "Node JS",
      logo: "/nodejs.svg",
      percentage: 70,
      title: "JavaScript runtime built on Chrome's V8 engine",
      theme: "text-green-500",
    },
    {
      name: "Express JS",
      logo: "/Express.svg",
      percentage: 65,
      title: "Minimal and flexible Node.js web application framework",
      theme: "text-gray-300",
    },
    {
      name: "TypeScript",
      logo: "/typescript.svg",
      percentage: 40,
      title: "Typed superset of JavaScript for scalable development",
      theme: "text-blue-600",
    },
    {
      name: "Socket.io",
      logo: "/socket.svg",
      percentage: 65,
      title: "Protocol for real-time, two-way communication",
      theme: "text-purple-400",
    },
    {
      name: "JSON Web Token (JWT)",
      logo: "/jwt.svg",
      percentage: 70,
      title: "Secure token-based authentication standard",
      theme: "text-yellow-500",
    },
    {
      name: "MongoDB",
      logo: "/mongodb.svg",
      percentage: 73,
      title: "Highly Flexible no-sql database using mongoose ODM",
      theme: "text-green-400",
    },
  ];

 const CLISkills = [
    {
      name: "Git",
      logo: "/git.svg",
      percentage: 65,
      title: "CLI tool for version control",
      theme: "text-orange-400",
    },
    {
      name: "Linux",
      logo: "/linux.svg",
      percentage: 66,
      title: "Open-source operating system for development & servers",
      theme: "text-yellow-400",
    },
    {
      name: "Bash",
      logo: "/bash.svg",
      percentage: 40,
      title: "Command-line shell for automation and scripting",
      theme: "text-green-300",
    },
    {
      name: "Docker",
      logo: "/docker.svg",
      percentage: 32,
      title: "Containerization platform for packaging applications",
      theme: "text-blue-400",
    },
  ];

  const AISkills = [
  {
    name: "LangChain",
    logo: "/langchain.svg",
    percentage: 40,
    title: "Framework for building LLM-powered applications",
    theme: "text-green-400",
  },
  {
    name: "Web Scraping",
    logo: "/scraping.svg",
    percentage: 42,
    title: "Extracting structured information from websites",
    theme: "text-yellow-400",
  },
  {
    name: "OpenAI",
    logo: "/openai.svg",
    percentage: 50,
    title: "API for generative AI models and assistants",
    theme: "text-purple-400",
  },
  {
    name: "Gemini SDK",
    logo: "/gemini.svg",
    percentage: 50,
    title: "Google’s SDK for building AI applications with Gemini models",
    theme: "text-blue-400",
  },
];


  return (
    <>
      {/* fontend-skills */}
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div>Frontend Tech Stack</div>
        {frontendSkills.map((skill) => (
          <Card key={skill.logo} className={`w-full flex flex-row rounded-2xl`}>
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row gap-2">
                <div className="font-bold">{skill.name}</div>
                <div className={`${skill.theme}`}>{skill.title}</div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          </Card>
        ))}
      </Card>
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div>Backendend Tech Stack</div>
        {backendSkills.map((skill) => (
          <Card key={skill.logo} className={`w-full flex flex-row rounded-2xl`}>
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row">
                <div>{skill.name}</div>
                <div className={`${skill.theme}`}>{skill.title}</div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          </Card>
        ))}
      </Card>
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div>CLI Tech Stack</div>
        {CLISkills.map((skill) => (
          <Card key={skill.logo} className={`w-full flex flex-row rounded-2xl`}>
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row">
                <div>{skill.name}</div>
                <div className={`${skill.theme}`}>{skill.title}</div>
              </div>
              <Progress value={skill.percentage}/>
            </div>
          </Card>
        ))}
      </Card>
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div>AI tools Tech Stack</div>
        {AISkills.map((skill) => (
          <Card key={skill.logo} className={`w-full flex flex-row rounded-2xl`}>
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row">
                <div>{skill.name}</div>
                <div className={`${skill.theme}`}>{skill.title}</div>
              </div>
              <Progress value={skill.percentage}/>
            </div>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default Skills;
