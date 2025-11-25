
import { NavigationMenuDemo } from "@/components/navigation";
import ProfileCard from "@/components/profileCard";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SkillsLogo from "@/components/skillsLogo";

const page = () => {
  return (
    <div className="bg-background text-foreground w-full px-3 flex flex-col gap-5">
      <div className="w-full my-3 ">
        <NavigationMenuDemo />
      </div>
      <div className=" flex justify-center h-fit lg:h-[950px] mb-[50px]">
        <ProfileCard/>
      </div>
      <div className="flex lg:pl-20 ">
        <SkillsLogo title="Skills"/>
      </div>
      <div className="flex justify-center flex-wrap h-fit gap-5">
        <Skills/>
      </div>
      {/* <div className="flex justify-center flex-wrap h-fit gap-5 flex-col">
        <Projects/>
      </div> */}
    </div>
  );
};

export default page;
