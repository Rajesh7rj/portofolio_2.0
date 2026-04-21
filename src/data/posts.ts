// ─── Blog Posts ──────────────────────────────────────────────────────────────
// Each entry links directly to Medium (or any external blog URL).
// To add a new post, just add a new object here.

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  tag: string;
  publishedAt: string;
  readTime: string;
  mediumUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How I Reduced API Redundancy by 30% Using React Query',
    summary: 'A practical walkthrough of migrating from manual fetch logic to React Query — eliminating duplicate calls, improving caching, and making the codebase far more maintainable.',
    tag: 'Performance',
    publishedAt: 'Mar 2025',
    readTime: '5 min read',
    mediumUrl: 'https://medium.com/@rajesh-janyani',
  },
  {
    id: 2,
    title: 'Why I Always Reach for Zustand Over Redux (and When I Don\'t)',
    summary: 'Redux Toolkit is powerful but brings weight. Zustand is minimal but has limits. Here\'s my decision framework after using both in production HRMS and eCommerce systems.',
    tag: 'Architecture',
    publishedAt: 'Jan 2025',
    readTime: '6 min read',
    mediumUrl: 'https://medium.com/@rajesh-janyani',
  },
  {
    id: 3,
    title: 'Building a Reusable Component Library That Your Team Will Actually Use',
    summary: 'Lessons from building component systems used across 40+ modules. How to design for discoverability, document properly, and avoid the trap of over-abstraction.',
    tag: 'Components',
    publishedAt: 'Nov 2024',
    readTime: '7 min read',
    mediumUrl: 'https://medium.com/@rajesh-janyani',
  },
  {
    id: 4,
    title: 'Next.js 14 App Router — What Actually Changed for Production Apps',
    summary: 'Moving past the hype: real differences you\'ll encounter migrating a large codebase to the App Router. Server Components, caching gotchas, and layout patterns that work.',
    tag: 'Next.js',
    publishedAt: 'Sep 2024',
    readTime: '8 min read',
    mediumUrl: 'https://medium.com/@rajesh-janyani',
  },
  {
    id: 5,
    title: 'TypeScript Migration Without Losing Your Mind',
    summary: 'A battle-tested, incremental approach to migrating a large React.js codebase to TypeScript — without stopping feature development or breaking everything at once.',
    tag: 'TypeScript',
    publishedAt: 'Jul 2024',
    readTime: '6 min read',
    mediumUrl: 'https://medium.com/@rajesh-janyani',
  },
  {
    id: 6,
    title: 'Mentoring Junior Developers: The Habits That Actually Help',
    summary: 'What I learned from mentoring 4+ developers on architecture, code reviews, and career growth. Practical habits that build trust, accelerate learning, and actually stick.',
    tag: 'Leadership',
    publishedAt: 'May 2024',
    readTime: '5 min read',
    mediumUrl: 'https://medium.com/@rajesh-janyani',
  },
];
