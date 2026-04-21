import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title, description }) => {
  const appName = 'Rajesh Janyani';
  const pageTitle = title ? `${title} | ${appName}` : `${appName} — Senior Frontend Developer`;
  const metaDescription = description || 'Senior Frontend Developer specializing in React.js and Next.js. Building scalable, high-performance web applications. Based in Vadodara, India.';
  const siteUrl = 'https://rajeshjanyani.com';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rajesh Janyani" />
        <meta name="keywords" content="Rajesh Janyani, Frontend Developer, React Developer, Next.js Developer, JavaScript, TypeScript, Gujarat, India" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${siteUrl}/images/avatar/prof-pic.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${siteUrl}/images/avatar/prof-pic.png`} />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#0a0a0a' }}>
        <ScrollToTop
          smooth
          className="scroll-to-top fixed bottom-16 right-8 z-50 cursor-pointer rounded-lg p-3 transition-all duration-200"
          component={
            <div className="flex justify-center" style={{ color: '#0a0a0a' }}>
              <FiArrowUp size={16} />
            </div>
          }
        />
        <Menu />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
