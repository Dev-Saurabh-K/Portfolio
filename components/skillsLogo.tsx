import React from 'react'

interface SkillsLogoProps {
  title: string | number ;
}

const SkillsLogo: React.FC<SkillsLogoProps>= ({title}) => {

  
  return (
    <div className='bg-blue-600 size-[100px] flex justify-end items-end text-3xl font-bold '>
        {title}
    </div>
  )
}

export default SkillsLogo