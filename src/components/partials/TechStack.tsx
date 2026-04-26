import React from 'react';
import { techStack, skills } from '@/data/skills';
import { FiCheckCircle, FiLayout, FiCpu, FiServer, FiTerminal, FiZap, FiCode } from 'react-icons/fi';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, 
  SiMaterialui, SiNodedotjs, SiGraphql, SiGit, SiGitlab, SiVercel, SiPostman,
  SiSass, SiExpress, SiNetlify, SiOpenai 
} from 'react-icons/si';

// Optional icon mapping — if no icon is mapped, it falls back to a code bracket `</>`
const iconMap: Record<string, React.ReactNode> = {
  'JavaScript': <SiJavascript size={16} color="#f7df1e" />,
  'TypeScript': <SiTypescript size={16} color="#3178c6" />,
  'React': <SiReact size={16} color="#61dafb" />,
  'Next.js': <SiNextdotjs size={16} color="#f9fafb" />,
  'Tailwind CSS': <SiTailwindcss size={16} color="#38bdf8" />,
  'Redux': <SiRedux size={16} color="#764abc" />,
  'Node.js': <SiNodedotjs size={16} color="#68a063" />,
  'Express': <SiExpress size={16} color="#ffffff" />,
  'GraphQL': <SiGraphql size={16} color="#e10098" />,
  'Git': <SiGit size={16} color="#f05032" />,
  'Vercel': <SiVercel size={16} color="#ffffff" />,
  'Netlify': <SiNetlify size={16} color="#00d1b2" />,
  'AI-assisted workflows using ChatGPT and Claude': <SiOpenai size={16} color="#10a37f" />,
};

type TechCategory = {
  key: keyof typeof techStack;
  label: string;
  icon: React.ReactNode;
  className: string;
};

// Bento Box perfect grid math:
// md (2 cols): 2, 1+1, 2, 1+1
// lg (3 cols): 2+1, 1+2, 1+2
const categories: TechCategory[] = [
  { key: 'frontend', label: 'Frontend Engineering', icon: <FiLayout size={18} />, className: 'md:col-span-2 lg:col-span-2' },
  { key: 'architecture', label: 'Architecture & State', icon: <FiCpu size={18} />, className: 'md:col-span-1 lg:col-span-1' },
  { key: 'backend', label: 'Backend & APIs', icon: <FiServer size={18} />, className: 'md:col-span-1 lg:col-span-1' },
  { key: 'devops', label: 'DevOps & Delivery', icon: <FiTerminal size={18} />, className: 'md:col-span-2 lg:col-span-2' },
  { key: 'modern', label: 'Modern Development', icon: <FiZap size={18} />, className: 'md:col-span-1 lg:col-span-1' },
];

const TechStack = () => {
  return (
    <div id="skills" className="py-24">
      <p className="section-label">04. Tech Stack</p>
      <h2 className="section-title">Skills & Tools</h2>
      <div className="section-divider" />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Dynamic Tech Stack Categories */}
        {categories.map(({ key, label, icon, className }) => (
          <div
            key={key}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${className}`}
            style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 24px -8px rgba(0,0,0,0.5)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.3)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(255,255,255,0.05), inset 0 0 20px rgba(255,255,255,0.02)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.02)';
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px -8px rgba(0,0,0,0.5)';
            }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white opacity-0 blur-[50px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-15" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white inset-0 group-hover:text-black" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff' }}>
                  {icon}
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  {label}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {techStack[key].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 ring-white/10 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px) scale(1.02)';
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                    }}
                  >
                    {iconMap[item] || <FiCode size={14} style={{ color: 'rgba(255,255,255,0.8)' }} />}
                    <span className="text-xs font-medium" style={{ color: '#e5e7eb' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Engineering Practices (Static Card at the end) */}
        <div
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 md:col-span-1 lg:col-span-2"
          style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 4px 24px -8px rgba(0,0,0,0.5)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.3)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(255,255,255,0.05), inset 0 0 20px rgba(255,255,255,0.02)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.02)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px -8px rgba(0,0,0,0.5)';
          }}
        >
          {/* Hover Glow Effect */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white opacity-0 blur-[50px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-15" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff' }}>
                <FiCheckCircle size={18} />
              </span>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                Engineering Practices
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-start gap-3 transition-colors duration-300 group-hover:text-white">
                  <FiCheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: 'rgba(255,255,255,0.8)' }} />
                  <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
