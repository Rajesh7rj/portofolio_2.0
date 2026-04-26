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
    title: 'Soft Skills That Help Developers Become Leaders in Tech',
    summary: 'The leap from coder to leader isn’t about syntax or Git commits. It’s about people. Here are the soft skills that transformed how I work, lead, and grow.',
    tag: 'Leadership',
    publishedAt: 'June 2025',
    readTime: '3 min read',
    mediumUrl: 'https://rajesh-janyani.medium.com/soft-skills-that-help-developers-become-leaders-in-tech-bcecc25be1b3',
  },
  {
    id: 2,
    title: 'How TypeScript Strengthens JavaScript: The Jai-Veeru of Web Development',
    summary: 'JavaScript has been the backbone of web development for decades. However, as web applications grow in complexity, managing JavaScript code becomes increasingly challenging. This is where TypeScript comes in—like a reliable partner working together to make web development stronger, safer, and more efficient',
    tag: 'TypeScript',
    publishedAt: 'March 2025',
    readTime: '3 min read',
    mediumUrl: 'https://rajesh-janyani.medium.com/how-typescript-strengthens-javascript-the-jai-veeru-of-web-development-e87a7a773bc3',
  },
  {
    id: 3,
    title: 'Next-Gen JavaScript: OOP Fundamentals Every Beginner Should Know in 2025',
    summary: 'Object-Oriented Programming (OOP) is a solid approach that models real-world elements to help developers in structuring and organising their code. In this blog, will explain OOP concepts in simple terms and explain how JavaScript uses them.',
    tag: 'Javascript OOP',
    publishedAt: 'Jan 2025',
    readTime: '4 min read',
    mediumUrl: 'https://rajesh-janyani.medium.com/next-gen-javascript-oop-fundamentals-every-beginner-should-know-in-2025-7dea8fdd3849',
  },
];
