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
  'const raj = new SeniorDev();',
  'git commit -m "shipping quality"',
  '// I build, I mentor, I ship.',
  'while(alive) { code(); learn(); }',
  '> rm -rf bad_code && write_clean()',
  'type Role = "React" | "Next.js" | "Lead"',
  '/* 3+ yrs · 40+ modules · 0 regrets */',
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
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,136,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Radial fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,255,136,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Status badge */}
        <div
          className="mb-5 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          style={{
            backgroundColor: 'rgba(0,255,136,0.07)',
            border: '1px solid rgba(0,255,136,0.18)',
            color: '#00ff88',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: '#00ff88', boxShadow: '0 0 6px #00ff88', animation: 'glowPulse 2s ease-in-out infinite' }}
          />
          Available for opportunities
        </div>

        {/* Avatar */}
        <div
          className="relative mb-5 overflow-hidden rounded-full"
          style={{
            width: 130,
            height: 130,
            border: '2px solid rgba(0,255,136,0.4)',
            boxShadow: '0 0 28px rgba(0,255,136,0.15)',
          }}
        >
          <Image src="/images/avatar/prof-pic.png" layout="fill" objectFit="cover" alt="Rajesh Janyani" priority />
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
            backgroundColor: '#111',
            border: '1px solid #2a2a2a',
            fontFamily: 'JetBrains Mono, monospace',
            minWidth: 320,
          }}
        >
          <span style={{ color: '#00ff88', marginRight: '0.5rem', userSelect: 'none' }}>$</span>
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
              onMouseEnter={e => { e.currentTarget.style.color = '#00ff88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
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
                backgroundColor: 'rgba(0,255,136,0.06)',
                color: '#f9fafb',
                border: '1px solid #2a2a2a',
                fontFamily: 'JetBrains Mono, monospace',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.12)'; e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.06)'; e.currentTarget.style.borderColor = '#2a2a2a'; }}
            >
              <FiDownload size={13} /> Download CV
            </button>
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-8 rounded-xl px-8 py-5"
          style={{ backgroundColor: '#111', border: '1px solid #2a2a2a' }}
        >
          {[
            { value: `${works.length}+`, label: 'Projects Delivered' },
            { value: '3+', label: 'Years Experience' },
            { value: 'EOTY', label: 'Employee of the Year' },
            { value: '4+', label: 'Devs Mentored' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}>{value}</div>
              <div className="mt-0.5 text-xs" style={{ color: '#6b7280' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <p className="text-xs" style={{ color: '#3a3a3a', fontFamily: 'JetBrains Mono, monospace' }}>scroll_down</p>
        <div className="relative flex h-7 w-4 justify-center rounded-full" style={{ border: '1px solid #333' }}>
          <div className="animate-scroll absolute h-1 w-1 rounded-full" style={{ backgroundColor: '#00ff88', top: '5px' }} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;