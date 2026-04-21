import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1e1e1e' }}>
      <div className="container mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <p className="font-mono text-sm" style={{ color: '#9ca3af' }}>
            <span style={{ color: '#00ff88' }}>Rajesh Janyani</span> — Senior Frontend Developer
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {[
              { href: 'https://www.linkedin.com/in/rajesh-janyani', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
              { href: 'https://github.com/Rajesh7rj', icon: <FiGithub size={18} />, label: 'GitHub' },
              { href: 'https://medium.com/@rajesh-janyani', icon: <FaMedium size={18} />, label: 'Medium' },
              { href: 'mailto:rajeshjanyani7@gmail.com', icon: <FiMail size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={label}
                style={{ color: '#6b7280', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00ff88')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: '#555' }}>
            © {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
