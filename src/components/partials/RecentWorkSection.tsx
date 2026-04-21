import React from 'react';
import { works } from '@/data/works';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const RecentWorkSection = () => {
  return (
    <div id="projects" className="py-24">
      <p className="section-label">03. Projects</p>
      <h2 className="section-title">Things I&apos;ve Built</h2>
      <div className="section-divider" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <div
            key={work.id}
            className="dark-card group overflow-hidden"
            style={{ cursor: 'default' }}
          >
            {/* Thumbnail */}
            <div
              className="relative overflow-hidden"
              style={{ height: 180, backgroundColor: '#1a1a1a' }}
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
                    border: '1px solid rgba(0,255,136,0.3)',
                    color: '#00ff88',
                    fontFamily: 'JetBrains Mono, monospace',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {work.category}
                </span>
              </div>
              {/* Live link overlay */}
              {work.previewUrl && (
                <a
                  href={work.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    backgroundColor: 'rgba(0,255,136,0.15)',
                    border: '1px solid rgba(0,255,136,0.4)',
                    color: '#00ff88',
                  }}
                >
                  <FiExternalLink size={12} /> Live
                </a>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="font-bold leading-tight" style={{ color: '#f9fafb' }}>
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
                        className="rounded px-2 py-0.5 text-xs"
                        style={{
                          backgroundColor: '#1a1a1a',
                          border: '1px solid #2a2a2a',
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkSection;
