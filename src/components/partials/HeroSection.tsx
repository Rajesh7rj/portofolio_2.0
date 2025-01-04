import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaMedium, FaStackOverflow } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';
/* eslint-disable quotes, indent */
const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Rajesh Janyani</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          <span className="text-[22px] text-blue-500 font-[700]">{"<div>"}</span>
          <span className="my-[5px] flex !justify-center !item-center">
          I'm a {' '}<>
          <Typed
            className="text-primary-400"
            strings={['Frontend Developer', 'React JS Developer', 'Next JS Developer']}
            typeSpeed={90}
            backSpeed={50}
            loop />
            </>
          </span>
          {" "}
          <span className="text-[22px] text-blue-500 font-[700]">{"</div>"}</span>
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.linkedin.com/in/rajesh-janyani">
            <a className="text-gray-500 transition-colors duration-150 hover:text-primary-500" target="_blank">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://www.frontendmentor.io/profile/Rajesh7rj">
            <a className="text-gray-500 transition-colors duration-150 hover:text-primary-500" target="_blank">
              <SiFrontendmentor size={25} />
            </a>
          </Link>
          {/* <Link href="https://medium.com/">
          <a className="text-gray-500 transition-colors duration-150 hover:text-primary-500" target="_blank">
            <FaMedium size={25} />
          </a>
        </Link> */}
        <Link href="https://github.com/Rajesh7rj">
          <a className="text-gray-500 transition-colors duration-150 hover:text-primary-500" target="_blank">
            <FiGithub size={25} />
          </a>
        </Link>
      </div>
      {/* <Link href="/contact">
        <a> */}
          <Button className="mt-5 px-8">Download CV</Button>
        {/* </a>
      </Link> */}
    </div>
    <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
/* eslint-disable quotes, indent */