import React from 'react';
import { personalInfo } from '@/data/personal-info';
import { works } from '@/data/works';
import { FiCheckCircle } from 'react-icons/fi';
import { FaTrophy, FaCode } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';

const highlights = [
  'Led Agile sprints, driving consistent and high-velocity product delivery',
  'Mentored developers, improving code quality, development standards, and team productivity',
  'Reduced API redundancy by 30%, improving system efficiency and maintainability',
  'Decreased production bugs by 45% through proactive debugging, reviews, and quality practices',
  'Designed and built reusable component systems, accelerating development speed by 25%',
  'Led TypeScript adoption across projects, reducing runtime errors by 40%',
  'Designed and developed REST and GraphQL APIs powering multiple production modules',
  'Implemented efficient data handling and integration patterns between frontend and backend systems',
  'Delivered 60+ production modules across HRMS, CMS, eCommerce, and admin platforms',
];

/** Returns experience string like "3 yrs 4 mos" from a start date */
function getExperience(startDate: Date): string {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const yrPart = years > 0 ? `${years} yr${years !== 1 ? 's' : ''}` : '';
  const moPart = months > 0 ? `${months} mo${months !== 1 ? 's' : ''}` : '';
  return [yrPart, moPart].filter(Boolean).join(' ') || '< 1 mo';
}

// Dev career start: January 2022
const DEV_START = new Date(2022, 0, 1);

const AboutSection = () => {
  const aboutMe = personalInfo.generateAboutMe();
  const expLabel = getExperience(DEV_START);

  const stats = [
    { icon: <FaCode size={20} />, value: `${works.length}+`, label: 'Projects Delivered' },
    { icon: <HiBriefcase size={20} />, value: expLabel, label: 'Dev Experience' },
    { icon: <FaTrophy size={20} />, value: 'EOTY', label: 'Employee of the Year' },
  ];

  return (
    <div id="about" className="py-20">
      {/* Section Header */}
      <div>
        <p className="section-label">01. About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider" />
      </div>

      {/* Two-column on md+, stacked on mobile */}
      <div className="mt-10 grid grid-cols-1">

        {/* Left: Bio + Highlights */}
        <div className="flex flex-col gap-8">
          <p className="text-base leading-relaxed" style={{ color: '#9ca3af' }}>
            {aboutMe}
          </p>

          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#f9fafb', fontFamily: 'JetBrains Mono, monospace' }}
            >
              Highlights &amp; Impact
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#9ca3af' }}>
                  <FiCheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: '#ffffff' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;