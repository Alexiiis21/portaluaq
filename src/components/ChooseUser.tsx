import React from 'react'
import { CircleUserRound, User, School, GraduationCap } from 'lucide-react';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';

type iconComponents = {
    CircleUserRound: React.ForwardRefExoticComponent<LucideProps>,
    School: React.ForwardRefExoticComponent<LucideProps>,
    GraduationCap: React.ForwardRefExoticComponent<LucideProps>,
    [key: string]: React.ForwardRefExoticComponent<LucideProps>
};

const iconComponents: iconComponents = {
    CircleUserRound: CircleUserRound,
    School: School,
    GraduationCap: GraduationCap
};

type ChooseUserProps = {
    icon: keyof iconComponents;
    title: string;
    content: string;
    iconSIze: number;
    path: string;
};


const ChooseUser: React.FC<ChooseUserProps> = ({icon, title, content, iconSIze, path}) => {
    const Icon = iconComponents[icon];
  return (
    <Link href={path} className='h-[] w-[400px] flex items-center justify-start'>
        <div className="h-[200px] flex flex-col items-center p-4 border 
        border-none rounded-lg shadow-md bg-white hover:bg-[#3a2bff] cursor-pointer
        hover:text-white">
      <div className=''>
        <Icon size={iconSIze} />
      </div>
      <h2 className="text-2xl line font-bold mt-4">{title}</h2>
      <p className= "mt-4 text-center">{content}</p>
    </div>
    </Link>
  )
}

export default ChooseUser

