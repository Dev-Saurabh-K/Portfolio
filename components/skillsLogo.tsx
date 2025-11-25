import React from "react";

interface SkillsLogoProps {
  title: string | number;
  className?: string;
}

const SkillsLogo: React.FC<SkillsLogoProps> = ({ title, className }) => {
  return (
    <div
      className={`bg-blue-600 flex justify-end items-end text-xl font-bold ${className}`}
    >
      {title}
    </div>
  );
};

export default SkillsLogo;
