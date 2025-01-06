import React from 'react';
import { FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMaterialui, SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';

const HeroBackground = () => {
  return (
    <>
      <SiTypescript size={50} className="absolute  top-60 left-10 hidden text-blue-500 sm:inline-block md:left-24" />
      <FaNode size={60} className="animate-bell  absolute top-28 right-2/3 hidden text-green-400 sm:inline-block" />
      <SiMaterialui size={50} className="absolute  top-120 right-40 hidden animate-bounce text-blue-400 sm:inline-block" />
      <FaGitAlt
        size={60}
        className="animate-move  absolute bottom-10 right-20 hidden sm:inline-block md:right-48"
      />
      <SiTailwindcss size={50} className="absolute  top-36 right-10 hidden text-pink-500 sm:inline-block md:right-24" />
      <SiNextdotjs
        size={50}
        className="animate-move-rotate  absolute top-1/3 right-1/4 hidden sm:inline-block"
      />
      <SiSass size={50} className="absolute bottom-48  left-2/3 hidden animate-pulse text-pink-400  sm:inline-block" />
      <SiJavascript
        size={50}
        className="absolute bottom-20  left-16 hidden animate-bounce text-amber-500 sm:inline-block md:left-40"
      />
      <FaReact size={50} className="absolute top-1/2 left-1/4 hidden animate-spin text-blue-400 sm:inline-block" />
    </>
  );
};

export default HeroBackground;
