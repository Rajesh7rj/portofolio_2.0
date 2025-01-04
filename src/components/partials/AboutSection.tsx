import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { HiBriefcase } from 'react-icons/hi';
import { FaClipboardCheck } from 'react-icons/fa';
import { personalInfo } from '@/data/personal-info';
import TechStack from './TechStack';
/* eslint-disable quotes, indent */

const AboutSection = () => {
  const aboutMe = personalInfo.generateAboutMe();
  return (
    <>
      <SectionTitle>About Me</SectionTitle>
      <div className="grid grid-cols-1 gap-6 py-6 "> 
        {/* Bio */}
        <div className="">
          <p className="text-justify">
          {aboutMe}
          </p>
          {/* <Button className="mt-5">Download CV</Button> */}
        </div>
      </div>
      {/* tech stack */}
      <div className="mt-20">
      <SectionTitle>Tech Stack</SectionTitle>
      <TechStack />
      </div>
      {/* Overview */}
      <div className="mt-12 flex flex-wrap justity-center item-center gap-10">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FaClipboardCheck size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{personalInfo?.totalProjectsDone}</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiBriefcase size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{personalInfo?.totalExperience}</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;

/* eslint-disable quotes, indent */