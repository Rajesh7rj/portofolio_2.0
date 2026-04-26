import React from 'react';
import { blogPosts } from '@/data/posts';
import { FiArrowUpRight, FiClock, FiTag } from 'react-icons/fi';

const tagColors: Record<string, string> = {
  Performance: '#f59e0b',
  Architecture: '#818cf8',
  Components: '#22d3ee',
  'Next.js': '#f9fafb',
  TypeScript: '#3b82f6',
  Leadership: '#a78bfa',
};

const BlogSection = () => {
  return (
    <div id="blog" className="py-24">
      <p className="section-label">&gt; Writing</p>
      <h2 className="section-title">Blog & Articles</h2>
      <div className="section-divider" />
      <p className="mb-10 max-w-lg text-sm" style={{ color: '#6b7280' }}>
        Thoughts on frontend architecture, performance, and engineering culture — published on Medium.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark-card group flex flex-col gap-4 p-6"
            style={{ textDecoration: 'none' }}
          >
            {/* Tag + Date */}
            <div className="flex items-center justify-between">
              <span
                className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: 'rgba(255, 255, 255,0.06)',
                  border: '1px solid rgba(255, 255, 255,0.15)',
                  color: tagColors[post.tag] || '#ffffff',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                <FiTag size={10} /> {post.tag}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>
                <FiClock size={10} /> {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-base font-semibold leading-snug transition-colors duration-150"
              style={{ color: '#f9fafb' }}
            >
              {post.title}
            </h3>

            {/* Summary */}
            <p className="flex-1 text-sm leading-relaxed line-clamp-3" style={{ color: '#6b7280' }}>
              {post.summary}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <span className="text-xs" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>
                {post.publishedAt}
              </span>
              <span
                className="flex items-center gap-1 text-xs font-medium transition-colors duration-150 group-hover:text-green-400"
                style={{ color: '#ffffff', fontFamily: 'JetBrains Mono, monospace' }}
              >
                Read on Medium <FiArrowUpRight size={12} />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://medium.com/@rajesh-janyani"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View All Articles →
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
