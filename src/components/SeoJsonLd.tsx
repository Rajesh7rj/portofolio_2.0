import Head from 'next/head';

export default function SeoJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajesh Janyani',
    jobTitle: 'Senior Frontend & Software Developer & Full stack',
    url: 'https://rajeshjanyani.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/rajesh-janyani',
      'https://github.com/Rajesh7rj',
    ],
    "logo":"https://rajeshjanyani.vercel.app/favicon.ico",
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Architecture', 'Full stack', 'Team Lead'],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
