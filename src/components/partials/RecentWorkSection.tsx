import React from 'react';
import { works } from '@/data/works';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const RecentWorkSection = () => {
  // Show only up to 6 projects on the home page
  const displayedWorks = works.slice(0, 6);

  return (
    <div id="projects" className="py-24">
      <p className="section-label">&gt; Projects</p>
      <h2 className="section-title">Things I&apos;ve Built</h2>
      <div className="section-divider" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedWorks.map((work) => (
          <Link key={work.id} href={`/works/${work.id}`} passHref>
            <a
              className="dark-card group block overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
              style={{ cursor: 'pointer' }}
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden"
                style={{ height: 180, backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                {work.thumbnailUrl ? (
                  <Image
                    src={work.thumbnailUrl}
                    layout="fill"
                    objectFit="cover"
                    alt={work.title}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span style={{ color: '#2a2a2a', fontFamily: 'JetBrains Mono, monospace', fontSize: '3rem' }}>{'<>'}</span>
                  </div>
                )}
                {/* Overlay tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: 'rgba(10,10,10,0.8)',
                      border: '1px solid rgba(255, 255, 255,0.3)',
                      color: '#ffffff',
                      fontFamily: 'JetBrains Mono, monospace',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    {work.category}
                  </span>
                </div>
                {/* Live link overlay - Use button instead of <a> to avoid nested anchor tags within <Link> */}
                {work.previewUrl && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(work.previewUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100 relative z-20 hover:bg-white/20"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255,0.15)',
                      border: '1px solid rgba(255, 255, 255,0.4)',
                      color: '#ffffff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <FiExternalLink size={12} /> Live
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold leading-tight transition-colors duration-200 group-hover:text-white" style={{ color: '#f9fafb' }}>
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed line-clamp-3" style={{ color: '#6b7280' }}>
                  {work.description?.trim()}
                </p>

                {/* Tech badges */}
                {work.techUsed && work.techUsed.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {work.techUsed.slice(0, 4).map((tech, i) => {
                      const techName = tech.split(' —')[0].split(' –')[0].split(':')[0].trim();
                      return (
                        <span
                          key={i}
                          className="rounded px-2 py-0.5 text-xs transition-colors duration-200 group-hover:border-white/20 group-hover:text-gray-300"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: '#9ca3af',
                            fontFamily: 'JetBrains Mono, monospace',
                          }}
                        >
                          {techName}
                        </span>
                      );
                    })}
                    {work.techUsed.length > 4 && (
                      <span
                        className="rounded px-2 py-0.5 text-xs"
                        style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        +{work.techUsed.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="mt-14 flex justify-center">
        <Link href="/works" passHref>
          <a
            className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            See All Projects
            <FiArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RecentWorkSection;
