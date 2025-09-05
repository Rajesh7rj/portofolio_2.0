import { ThemeProvider } from '@/hooks/use-theme';
import '@/styles/app.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo'
import SeoJsonLd from '../components/SeoJsonLd'; 

const siteUrl = 'https://rajeshjanyani.vercel.app';
const siteTitle = 'Rajesh Janyani | Senior Software Developer';
const siteDescription =
  'Senior Software Developer specializing in React.js, Next.js, and TypeScript with 4+ years of experience delivering scalable SaaS, eCommerce, and HRMS solutions. Proven expertise in performance optimization, SEO-driven development, and building responsive, high-quality web applications with modern UI frameworks like Tailwind CSS and Material UI.';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo
        title={siteTitle}
        description={siteDescription}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          site_name: 'Rajesh Janyani',
          title: siteTitle,
          description: siteDescription,
          images: [
            {
              url: `${siteUrl}/avatar/prof-pic.png`, // put this in public/
              width: 1200,
              height: 630,
              alt: 'Rajesh Janyani Portfolio',
            },
          ],
        }}
        twitter={{
          handle: '@RjJanyani',
          site: 'https://x.com/RjJanyani',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Rajesh Janyani, Frontend Developer, React, Next.js, TypeScript, Portfolio, Node, Backend, Full Stack, Team Lead, Agile, Sprint Lead',
          },
          { name: 'robots', content: 'index,follow' },
        ]}
      />
      <SeoJsonLd />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
