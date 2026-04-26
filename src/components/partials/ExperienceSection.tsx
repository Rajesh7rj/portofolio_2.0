import { educations } from '@/data/educations';
import { experiences } from '@/data/experiences';
import React from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const ExperienceSection = () => {
  return (
    <div id="experience" className="py-24">
      {/* Experience */}
      <div>
        <p className="section-label">02. Experience</p>
        <h2 className="section-title">Where I&apos;ve Worked</h2>
        <div className="section-divider" />

        <div className="mt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#f9fafb' }}>
                      {exp.jobTitle}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2">
                      <FiBriefcase size={13} style={{ color: '#ffffff' }} />
                      <span className="text-sm font-medium" style={{ color: '#ffffff' }}>{exp.company}</span>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255,0.06)',
                      border: '1px solid rgba(255, 255, 255,0.2)',
                      color: '#9ca3af',
                      fontFamily: 'JetBrains Mono, monospace',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <p className="section-label">// Education</p>
        <h2 className="section-title">Academic Background</h2>
        <div className="section-divider" />

        <div className="mt-8">
          {educations.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold" style={{ color: '#f9fafb' }}>
                      {edu.degree}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2">
                      <FiBookOpen size={13} style={{ color: '#ffffff' }} />
                      <span className="text-sm" style={{ color: '#ffffff' }}>{edu.school}</span>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255,0.06)',
                      border: '1px solid rgba(255, 255, 255,0.2)',
                      color: '#9ca3af',
                      fontFamily: 'JetBrains Mono, monospace',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <p className="mt-3 text-sm" style={{ color: '#9ca3af' }}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;