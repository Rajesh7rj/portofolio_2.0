import React from 'react';
import { personalInfo } from '@/data/personal-info';
import { works } from '@/data/works';
import { FiCheckCircle } from 'react-icons/fi';
import { FaTrophy, FaCode } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';

const highlights = [
  'Led 7+ Agile sprints driving fast-paced product delivery',
  'Mentored 4+ developers, improving team productivity and code standards',
  'Reduced API redundancy by 30%, boosting backend efficiency',
  'Decreased production bugs by 45% through proactive debugging',
  'Built reusable component libraries — 25% faster development speed',
  'Migrated projects to TypeScript, cutting runtime errors by 40%',
  'Delivered 40+ modules across HRMS, CMS, eCommerce, and admin platforms',
];

const stats = [
  { icon: <FaCode size={22} />, value: `${works.length}`, label: 'Projects Delivered' },
  { icon: <HiBriefcase size={22} />, value: '3+', label: 'Years Dev Experience' },
  { icon: <FaTrophy size={22} />, value: 'EOTY', label: 'Employee of the Year' },
];

const AboutSection = () => {
  const aboutMe = personalInfo.generateAboutMe();

  return (
    <div id="about" className="py-24">
      <div>
        {/* Section Header */}
        <p className="section-label">01. About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />
      </div>

      <div className="mt-4 grid gap-12 lg:grid-cols-2">
        {/* Left: Bio + Highlights */}
        <div>
          <p className="text-base leading-relaxed" style={{ color: '#9ca3af' }}>
            {aboutMe}
          </p>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: '#f9fafb', fontFamily: 'JetBrains Mono, monospace' }}>
              Highlights & Impact
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#9ca3af' }}>
                  <FiCheckCircle
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: '#00ff88' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Stats + Personal Info */}
        <div className="flex flex-col gap-6">
          {/* Stat Cards */}
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="dark-card flex items-center gap-5 px-6 py-5"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(0,255,136,0.08)', color: '#00ff88' }}
              >
                {icon}
              </div>
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: '#f9fafb', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {value}
                </div>
                <div className="mt-0.5 text-sm" style={{ color: '#6b7280' }}>{label}</div>
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div
            className="rounded-xl px-6 py-5"
            style={{ backgroundColor: '#111', border: '1px solid #2a2a2a' }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}>
              Quick Info
            </h3>
            <div className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
              <div className="flex gap-2">
                <span style={{ color: '#555', minWidth: '80px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>location</span>
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="flex gap-2">
                <span style={{ color: '#555', minWidth: '80px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>email</span>
                <a href="mailto:rajeshjanyani7@gmail.com" style={{ color: '#00ff88' }}>rajeshjanyani7@gmail.com</a>
              </div>
              <div className="flex gap-2">
                <span style={{ color: '#555', minWidth: '80px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>stack</span>
                <span>React.js · Next.js · TypeScript</span>
              </div>
              <div className="flex gap-2">
                <span style={{ color: '#555', minWidth: '80px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>status</span>
                <span style={{ color: '#00ff88' }}>● Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;