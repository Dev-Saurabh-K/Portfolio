
import { NavigationMenuDemo } from "@/components/navigation";
import ProfileCard from "@/components/profileCard";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SkillsLogo from "@/components/skillsLogo";
import ContactMe from "@/components/contact";

const page = () => {
  return (
    <div className="bg-background text-foreground w-full px-3 flex flex-col gap-5">
      <div className="w-full my-3 ">
        <NavigationMenuDemo />
      </div>
      <div className=" flex justify-center h-fit lg:h-[950px] mb-[50px]">
        <ProfileCard/>
      </div>
      <div className="flex lg:pl-52 ">
        <SkillsLogo title="Skills"/>
      </div>
      <div className="flex justify-center flex-wrap h-fit gap-5 mb-10">
        <Skills/>
      </div>
      <div className="flex justify-center flex-wrap h-fit lg:px-20 gap-5 flex-col">
        <Projects/>
      </div>
      <div className="flex justify-center flex-wrap items-center">

        <ContactMe/>
      </div>
    </div>
  );
};

export default page;
