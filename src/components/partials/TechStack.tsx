import React from 'react';
import { FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMaterialui, SiSass, SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';
import Tooltip from '@mui/material/Tooltip';

const TechStack = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
      <Tooltip title="TypeScript" placement="top">
        <span>
          <SiTypescript size={50} className="cursor-pointer text-blue-500" />
        </span>
      </Tooltip>
      <Tooltip title="JavaScript" placement="top">
        <span>
          <SiJavascript size={50} className="cursor-pointer text-amber-500" />
        </span>
      </Tooltip>
      <Tooltip title="ReactJS" placement="top">
        <span>
          <FaReact size={50} className="cursor-pointer text-blue-400" />
        </span>
      </Tooltip>
      <Tooltip title="NextJS" placement="top">
        <span>
          <SiNextdotjs size={50} className="cursor-pointer"/>
        </span>
      </Tooltip>
      <Tooltip title="Material UI" placement="top">
        <span>
          <SiMaterialui size={50} className="cursor-pointer text-blue-400" />
        </span>
      </Tooltip>
      <Tooltip title="Git" placement="top">
        <span>
          <FaGitAlt size={60} className="cursor-pointer"/>
        </span>
      </Tooltip>
      <Tooltip title="Sass" placement="top">
        <span>
          <SiSass size={50} className="cursor-pointer text-pink-400" />
        </span>
      </Tooltip>
      <Tooltip title="Tailwind CSS" placement="top">
        <span>
          <SiTailwindcss size={60} className="cursor-pointer text-pink-500" />
        </span>
      </Tooltip>
      <Tooltip title="Node JS" placement="top">
        <span>
          <FaNode size={60} className="cursor-pointer text-green-400" />
        </span>
      </Tooltip>
    </div>
  );
};

export default TechStack;
