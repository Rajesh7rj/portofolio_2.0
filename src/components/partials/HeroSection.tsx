import Image from 'next/image';
import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiDownload } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { personalInfo } from '@/data/personal-info';
import { works } from '@/data/works';
import { devTagline } from '@/data/skills';

// Code-style taglines — short, characterful, developer-identity strings
const CODE_STRINGS = [
  'git commit -m "design systems that scale"',
  '// Building scalable systems with clean architecture.',
  'while(alive) { solveProblems(); shipImpact(); }',
  '> optimize(performance).ensure(reliability);',
  'type Focus = "Architecture" | "Performance" | "Scalability"',
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="hero relative flex flex-col items-center justify-center px-6 text-center"
      style={{ minHeight: '100svh', paddingTop: '80px' }}
    >
      {/* Global CSS background active */}

      <div className="relative z-10 flex flex-col items-center">
        {/* Status badge */}
        <div
          className="mb-5 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255,0.18)',
            color: '#ffffffff',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: '#ffffffff', boxShadow: '0 0 6px #ffffff', animation: 'glowPulse 2s ease-in-out infinite' }}
          />
          status === "open_to_work"
        </div>

        {/* Avatar */}
        <div
          className="relative mb-5 overflow-hidden rounded-full"
          style={{
            width: 130,
            height: 130,
            border: '2px solid rgba(255, 255, 255,0.4)',
            boxShadow: '0 0 28px rgba(255, 255, 255,0.15)',
          }}
        >
          <Image src="/images/avatar/prof-pic-2.png" layout="fill" objectFit="cover" alt="Rajesh Janyani" priority />
        </div>

        {/* Name */}
        <h1 className="mb-1 text-4xl font-bold tracking-tight md:text-5xl" style={{ color: '#f9fafb' }}>
          {personalInfo.name}
        </h1>

        {/* Tagline */}
        <p className="mb-5 text-sm" style={{ color: '#6b7280' }}>{devTagline}</p>

        {/* Code-style typing animation */}
        <div
          className="mb-6 flex items-center gap-0 rounded-lg px-4 py-2.5 text-sm"
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontFamily: 'JetBrains Mono, monospace',
            minWidth: 320,
          }}
        >
          <span style={{ color: '#ffffff', marginRight: '0.5rem', userSelect: 'none' }}>$</span>
          <ReactTyped
            strings={CODE_STRINGS}
            typeSpeed={55}
            backSpeed={30}
            backDelay={2200}
            loop
            style={{ color: '#e5e7eb' }}
          />
        </div>

        {/* Social links */}
        <div className="mb-7 flex items-center gap-5">
          {[
            { href: 'https://www.linkedin.com/in/rajesh-janyani', icon: <FiLinkedin size={19} />, label: 'LinkedIn' },
            { href: 'https://github.com/Rajesh7rj', icon: <FiGithub size={19} />, label: 'GitHub' },
            { href: 'https://medium.com/@rajesh-janyani', icon: <FaMedium size={19} />, label: 'Medium' },
            { href: 'mailto:rajeshjanyani7@gmail.com', icon: <FiMail size={19} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={label}
              style={{ color: '#9ca3af', transition: 'color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => scrollTo('#projects')} className="btn-primary">
            View My Work
          </button>
          <a href="/Resume-Rajesh-Janyani.pdf" download>
            <button
              className="flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255, 255, 255,0.06)',
                color: '#f9fafb',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255,0.06)'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
            >
              <FiDownload size={13} /> Download CV
            </button>
          </a>
        </div>

        {/* Stats — 2×2 on mobile, 4-col row on sm+ */}
        {(() => {
          const DEV_START = new Date(2022, 0, 1);
          const now = new Date();
          let yrs = now.getFullYear() - DEV_START.getFullYear();
          let mos = now.getMonth() - DEV_START.getMonth();
          if (mos < 0) { yrs -= 1; mos += 12; }
          const expLabel = `${yrs}y ${mos}m`;

          const stats = [
            { value: `12+`, label: 'Projects Delivered' },
            { value: expLabel, label: 'Dev Experience' },
            { value: '10+', label: 'Devs Mentored' },
            { value: '4+ yrs', label: 'Teaching Exp.' },
          ];

          return (
            <div
              className="mt-12 grid w-full max-w-lg grid-cols-2 overflow-hidden rounded-xl sm:flex sm:max-w-none sm:w-auto"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
            >
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center px-5 py-4 sm:px-7"
                  style={{
                    // borderLeft:   (i === 1 || i === 3) ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    // borderTop:    i >= 2               ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    /* sm+ resets to horizontal dividers only */
                  }}
                >
                  <span
                    className="text-xl font-bold tracking-tight sm:text-2xl"
                    style={{ color: '#f9fafb', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {value}
                  </span>
                  <span className="mt-0.5 text-center text-[10px] leading-tight sm:text-[11px]" style={{ color: '#6b7280' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          );
        })()}
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <p className="text-xs" style={{ color: '#3a3a3a', fontFamily: 'JetBrains Mono, monospace' }}>scroll_down</p>
        <div className="relative flex h-7 w-4 justify-center rounded-full" style={{ border: '1px solid #333' }}>
          <div className="animate-scroll absolute h-1 w-1 rounded-full" style={{ backgroundColor: '#ffffff', top: '5px' }} />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;