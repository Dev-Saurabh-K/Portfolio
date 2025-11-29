import { title } from "process";
import { Card } from "./ui/card";
import { Progress } from "@/components/ui/progress";

type Skill = {
    name: string;
    logo: string;
    percentage: number;
    title: string;
    theme: string;
    border: string;
  };

const Skills = async () => {
  const response1 = await fetch(
    "http://localhost:3000/api/data/frontendskills",
    {
      cache: "no-store",
    }
  );
  const frontendSkills: Skill[] = await response1.json();

  const response2 = await fetch(
    "http://localhost:3000/api/data/backendSkills",
    {
      cache: "no-store",
    }
  );
  const backendSkills: Skill[] = await response2.json();

  const response3 = await fetch(
    "http://localhost:3000/api/data/CLISkills",
    {
      cache: "no-store",
    }
  );
  const CLISkills: Skill[] = await response3.json();

  const response4 = await fetch(
    "http://localhost:3000/api/data/AISkills",
    {
      cache: "no-store",
    }
  );
  const AISkills: Skill[] = await response4.json();
  

  return (
    <>
      {/* fontend-skills */}
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div className="font-mono">
          <h1 className="font-mono text-[18px] font-semibold tracking-tight">
            <span className="text-sky-400">const</span>{" "}
            <span className="text-green-400">frontendTechStack</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-300">"Frontend Tech Stack"</span>
            <span className="text-white">;</span>
          </h1>
        </div>
        {frontendSkills.map((skill) => (
          <Card
            key={skill.logo}
            className={`w-full flex flex-row rounded-2xl border ${skill.border}`}
          >
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row gap-2">
                <div className="font-bold">{skill.name}</div>
                <div
                  className={`${skill.theme} lg:text-sm text-[10px] text-end`}
                >
                  {skill.title}
                </div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          </Card>
        ))}
      </Card>
      {/* backend */}
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div className="font-mono">
          <h1 className="font-mono text-[18px] font-semibold tracking-tight">
            <span className="text-sky-400">const</span>{" "}
            <span className="text-green-400">backendTechStack</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-300">"Backend Tech Stack"</span>
            <span className="text-white">;</span>
          </h1>
        </div>

        {backendSkills.map((skill) => (
          <Card
            key={skill.logo}
            className={`w-full flex flex-row rounded-2xl ${skill.border}`}
          >
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row">
                <div>{skill.name}</div>
                <div
                  className={`${skill.theme} lg:text-sm text-[10px] text-end`}
                >
                  {skill.title}
                </div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          </Card>
        ))}
      </Card>
      {/* cli */}
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div className="font-mono">
          <h1 className="font-mono text-[18px] font-semibold tracking-tight">
            <span className="text-sky-400">const</span>{" "}
            <span className="text-green-400">cliTechStack</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-300">"CLI Tech Stack"</span>
            <span className="text-white">;</span>
          </h1>
        </div>

        {CLISkills.map((skill) => (
          <Card
            key={skill.logo}
            className={`w-full flex flex-row rounded-2xl ${skill.border}`}
          >
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row">
                <div>{skill.name}</div>
                <div
                  className={`${skill.theme} lg:text-sm text-[10px] text-end`}
                >
                  {skill.title}
                </div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          </Card>
        ))}
      </Card>
      {/* ai tools */}
      <Card className="flex justify-center flex-wrap lg:w-5/12 px-10 rounded-2xl w-full h-fit">
        <div className="font-mono">
          <h1 className="font-mono text-[18px] font-semibold tracking-tight">
            <span className="text-sky-400">const</span>{" "}
            <span className="text-green-400">aiToolsTechStack</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-300">"AI Tools Tech Stack"</span>
            <span className="text-white">;</span>
          </h1>
        </div>
        {AISkills.map((skill) => (
          <Card
            key={skill.logo}
            className={`w-full flex flex-row rounded-2xl ${skill.border}`}
          >
            <img src={skill.logo} alt="" className="size-14" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between flex-row">
                <div>{skill.name}</div>
                <div
                  className={`${skill.theme} lg:text-sm text-[10px] text-end`}
                >
                  {skill.title}
                </div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default Skills;
