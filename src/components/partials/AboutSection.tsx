'use client'
import SectionTitle from '@/components/shared/SectionTitle';
import { HiBriefcase } from 'react-icons/hi';
import { FaClipboardCheck } from 'react-icons/fa';
import { personalInfo } from '@/data/personal-info';
import TechStack from './TechStack';
import { FaTrophy } from "react-icons/fa";
import { teachingExp, totalExperience } from '@/utilis/utilis';
import { works } from '../../data/works';
import { Theme, useTheme } from '@/hooks/use-theme';
/* eslint-disable quotes, indent */

const AboutSection = () => {
  const aboutMe = personalInfo.generateAboutMe();
  const { theme, toggleTheme } = useTheme();
  const highlights = [
  'Led 7+ successful Agile sprints, driving fast-paced project delivery',
  'Mentored and coached 4+ developers, enhancing team productivity and code quality',
  'Guided 3+ junior developers on scalable architecture and modern frameworks',
  'Reduced API redundancy by 30%, improving backend efficiency',
  'Decreased production bugs by 45% through proactive debugging and testing',
  'Developed reusable component libraries, boosting development speed by 25%',
  'Migrated projects to TypeScript, cutting runtime errors by 40%',
  'Delivered 40+ modules across HRMS, CMS, eCommerce, and admin platforms',
];

  const skills = [
    'HRMS',
    'CMS',
    "E-commerce",
    'ERP',
    'Team Leadership',
    'Problem Solving',
    'Critical Thinking',
    'Agile Methodologies',
    'Sprint Planning & Execution',
    'Clean Code Practices',
    'Performance Optimization',
    'UI/UX Collaboration',
    'Code Review & Mentorship',
    'Cross-Functional Communication',  
  ];
  return (
    <>
      <SectionTitle>About Me</SectionTitle>
      <div className="grid grid-cols-1 gap-6 py-6 "> 
        {/* Bio */}
        <div className="">
          <p className="text-justify">
          {aboutMe}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Highlights & Impact</h2>
            <ul className="list-disc list-inside space-y-2 text-start">
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Top Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`${ theme === Theme.LIGHT ? "bg-gray-500" : "bg-white"} ${ theme === Theme.LIGHT ? "text-white" : "text-gray-800"} px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

 
        </div>
      </div>
      {/* Overview */}
      <div className="mt-4 flex flex-wrap justity-center item-center gap-10">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FaClipboardCheck size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{works.length} +</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiBriefcase size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{totalExperience()}</h2>
            <p className="mt-1">Years of experience in Development</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FaTrophy size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{personalInfo?.employeeOfTheYear}</h2>
            <p className="mt-1">Immence Enterprise Pvt Ltd</p>
          </div>
        </div>
         <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiBriefcase size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{teachingExp}</h2>
            <p className="mt-1">Years of experience in Teaching</p>
          </div>
        </div>
      </div>
        {/* tech stack */}
        <div className="mt-24">
      <SectionTitle>Tech Stack</SectionTitle>
      <TechStack />
      </div>
    </>
  );
};

export default AboutSection;



/* eslint-disable quotes, indent */