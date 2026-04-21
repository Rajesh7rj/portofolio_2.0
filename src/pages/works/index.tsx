import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';

const WorksPage = () => {
  return (
    <AppLayout title="Projects">
      {/* Page Header */}
      <div
        className="border-b py-16 text-center"
        style={{ backgroundColor: '#0d0d0d', borderColor: '#1e1e1e' }}
      >
        <p className="section-label">All Projects</p>
        <h1 className="section-title">Things I&apos;ve Built</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm" style={{ color: '#6b7280' }}>
          A collection of real-world applications — HRMS platforms, e-commerce systems, multilingual websites, and SaaS tools.
        </p>
      </div>

      {/* Grid */}
      <div className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works
            .filter((item) => Object.keys(item).length > 0)
            .map((item) => (
              <Link key={item.id} href={`/works/${item.id}`}>
                <a className="dark-card group block overflow-hidden">
                  {/* Thumbnail */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: 190, backgroundColor: '#1a1a1a' }}
                  >
                    {item.thumbnailUrl ? (
                      <Image
                        src={item.thumbnailUrl}
                        layout="fill"
                        objectFit="cover"
                        alt={item.title}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span style={{ color: '#2a2a2a', fontFamily: 'JetBrains Mono, monospace', fontSize: '3rem' }}>{'<>'}</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: 'rgba(10,10,10,0.85)',
                          border: '1px solid rgba(0,255,136,0.3)',
                          color: '#00ff88',
                          fontFamily: 'JetBrains Mono, monospace',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                    {item.previewUrl && (
                      <a
                        href={item.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        style={{
                          backgroundColor: 'rgba(0,255,136,0.15)',
                          border: '1px solid rgba(0,255,136,0.4)',
                          color: '#00ff88',
                        }}
                      >
                        <FiExternalLink size={11} /> Live
                      </a>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h2 className="font-bold leading-tight" style={{ color: '#f9fafb' }}>
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed line-clamp-2" style={{ color: '#6b7280' }}>
                      {item.description?.trim()}
                    </p>
                    {item.techUsed && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.techUsed.slice(0, 3).map((tech, i) => {
                          const name = tech.split(' —')[0].split(' –')[0].split(':')[0].trim();
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
                              {name}
                            </span>
                          );
                        })}
                        {item.techUsed.length > 3 && (
                          <span className="rounded px-2 py-0.5 text-xs" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>
                            +{item.techUsed.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    <p className="mt-4 text-xs font-medium" style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}>
                      View Details →
                    </p>
                  </div>
                </a>
              </Link>
            ))}
        </div>

        {/* Back Home */}
        <div className="mt-16 flex justify-center">
          <Link href="/">
            <a className="btn-primary flex items-center gap-2">
              <FiArrowLeft size={14} /> Back to Home
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default WorksPage;
