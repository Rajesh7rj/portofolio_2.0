import React from 'react';
import { techStack, skills } from '@/data/skills';
import { FiCheckCircle } from 'react-icons/fi';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, 
  SiMaterialui, SiNodedotjs, SiGraphql, SiGit, SiGitlab, SiVercel, SiPostman,
  SiSass
} from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {
  'JavaScript': <SiJavascript size={36} color="#f7df1e" />,
  'TypeScript': <SiTypescript size={36} color="#3178c6" />,
  'React': <SiReact size={36} color="#61dafb" />,
  'Next.js': <SiNextdotjs size={36} color="#f9fafb" />,
  'Redux': <SiRedux size={36} color="#764abc" />,
  'Tailwind CSS': <SiTailwindcss size={36} color="#38bdf8" />,
  'Material UI': <SiMaterialui size={36} color="#007fff" />,
  'Sass': <SiSass size={36} color="#cc6699" />,
  'Node.js': <SiNodedotjs size={36} color="#68a063" />,
  'GraphQL': <SiGraphql size={36} color="#e10098" />,
  'Git': <SiGit size={36} color="#f05032" />,
  'GitLab': <SiGitlab size={36} color="#fc6d26" />,
  'Vercel': <SiVercel size={36} color="#ffffff" />,
  'Postman': <SiPostman size={36} color="#ff6c37" />,
};

const TechStack = () => {
  return (
    <div id="skills" className="py-24">
      <p className="section-label">04. Tech Stack</p>
      <h2 className="section-title">Skills & Tools</h2>
      <div className="section-divider" />

      <div className="mt-6 space-y-10">
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>
            // Core
          </h3>
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-4 md:grid-cols-5">
            {techStack.core.map((item) => (
              <div key={item} className="skill-icon-wrapper">
                {iconMap[item] || <span style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem' }}>{'</>'}</span>}
                <span className="text-xs font-medium" style={{ color: '#9ca3af', fontFamily: 'JetBrains Mono, monospace' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>
            // State & Styling
          </h3>
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-4 md:grid-cols-5">
            {techStack.stateAndStyling.map((item) => (
              <div key={item} className="skill-icon-wrapper">
                {iconMap[item] || <span style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem' }}>{'</>'}</span>}
                <span className="text-xs font-medium" style={{ color: '#9ca3af', fontFamily: 'JetBrains Mono, monospace' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>
            // Tools & Infra
          </h3>
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-4 md:grid-cols-5">
            {techStack.toolsAndInfra.map((item) => (
              <div key={item} className="skill-icon-wrapper">
                {iconMap[item] || <span style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem' }}>{'</>'}</span>}
                <span className="text-xs font-medium" style={{ color: '#9ca3af', fontFamily: 'JetBrains Mono, monospace' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Skills Row */}
      <div className="mt-14 pt-8 border-t" style={{ borderColor: '#2a2a2a' }}>
        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest" style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}>
          // Engineering Practices & Soft Skills
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-2">
              <FiCheckCircle size={14} style={{ color: '#00ff88', opacity: 0.8 }} />
              <span className="text-sm" style={{ color: '#9ca3af' }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
