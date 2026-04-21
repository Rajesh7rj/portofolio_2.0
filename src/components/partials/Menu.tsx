import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { personalInfo } from '@/data/personal-info';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        {/* Logo */}
        <Link href="/">
          <a className="font-mono text-xl font-bold tracking-tight" style={{ color: '#f9fafb' }}>
            <span style={{ color: '#888' }}>&lt;</span>
            <span style={{ color: '#00ff88' }}>Rajesh Janyani</span>
            <span style={{ color: '#888' }}> /&gt;</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{ color: '#9ca3af', fontFamily: 'inherit' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00ff88')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/Resume-Rajesh-Janyani.pdf"
            download
            className="btn-primary ml-4"
            style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="ml-auto flex items-center md:hidden"
          style={{ color: '#9ca3af' }}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{ backgroundColor: '#111', borderColor: '#2a2a2a' }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="py-3 text-left text-base font-medium transition-colors duration-150"
                style={{ color: '#9ca3af', fontFamily: 'inherit', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', marginRight: '0.5rem' }}>
                  &gt;
                </span>
                {link.label}
              </button>
            ))}
            <a
              href="/Resume-Rajesh-Janyani.pdf"
              download
              className="btn-primary mt-2"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Menu;