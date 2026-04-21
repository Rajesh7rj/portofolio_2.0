import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

type Props = {
  work: Work & {
    description: string;
    images: string[];
    publishedAt: string;
    previewUrl: string;
  };
};

const WorkDetail: React.FunctionComponent<Props> = ({ work }) => {
  return (
    <AppLayout title={work.title}>
      <div className="container py-16">
        {/* Back link */}
        <Link href="/works">
          <a
            className="mb-10 inline-flex items-center gap-2 text-sm transition-colors duration-150"
            style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00ff88')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
          >
            <FiArrowLeft size={14} /> Back to Projects
          </a>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: 'rgba(0,255,136,0.08)',
              border: '1px solid rgba(0,255,136,0.25)',
              color: '#00ff88',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            {work.category}
          </span>
          <h1 className="text-3xl font-bold md:text-4xl" style={{ color: '#f9fafb' }}>
            {work.title}
          </h1>
          {work.previewUrl && (
            <a
              href={work.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm"
              style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}
            >
              <FiExternalLink size={14} /> View Live Site
            </a>
          )}
        </div>

        {/* Images */}
        {work.images && work.images.length > 0 && (
          <div className="mb-12 space-y-4">
            {work.images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl"
                style={{ border: '1px solid #2a2a2a' }}
              >
                <Image
                  src={image}
                  height={720}
                  width={1280}
                  layout="responsive"
                  alt={`${work.title} screenshot ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: Description + Features */}
          <div className="space-y-10 lg:col-span-2">
            {/* Description */}
            <div>
              <h2
                className="mb-1 text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}
              >
                // Overview
              </h2>
              <div className="section-divider" />
              <p className="leading-relaxed" style={{ color: '#9ca3af' }}>
                {work.description?.trim()}
              </p>
            </div>

            {/* Key Features */}
            {work.featureList && work.featureList.length > 0 && (
              <div>
                <h2
                  className="mb-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  // Key Features
                </h2>
                <div className="section-divider" />
                <ul className="space-y-2">
                  {work.featureList.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm" style={{ color: '#9ca3af' }}>
                      <FiCheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: '#00ff88' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Tech Stack */}
          <div>
            {work.techUsed && work.techUsed.length > 0 && (
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: '#111', border: '1px solid #2a2a2a', position: 'sticky', top: '90px' }}
              >
                <h2
                  className="mb-1 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#00ff88', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  // Tech Stack
                </h2>
                <div className="section-divider" />
                <ul className="space-y-3">
                  {work.techUsed.map((tech, index) => {
                    const parts = tech.split(' —');
                    const name = parts[0].trim();
                    const desc = parts[1]?.trim();
                    return (
                      <li key={index}>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: '#f9fafb', fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {name}
                        </span>
                        {desc && (
                          <p className="mt-0.5 text-xs" style={{ color: '#6b7280' }}>{desc}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-20 rounded-xl p-10 text-center"
          style={{ backgroundColor: '#111', border: '1px solid rgba(0,255,136,0.15)' }}
        >
          <h2 className="text-2xl font-bold" style={{ color: '#f9fafb' }}>
            Interested in working together?
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#6b7280' }}>
            I&apos;m open to new opportunities. Let&apos;s build something great.
          </p>
          <Link href="/#contact">
            <a className="btn-primary mt-6 inline-flex">
              Get in touch →
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works
    .filter((w) => w.id !== undefined)
    .map((w) => ({ params: { id: String(w.id) } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const work = works.find((w) => w.id === Number(id));
  if (!work) return { notFound: true };
  return { props: { work } };
};

export default WorkDetail;
