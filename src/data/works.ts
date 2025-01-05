import { Work } from '@/types';
/* eslint-disable quotes, indent */

export const works: Work[] = [
  {
    id: 1,
    title: 'Tuto.ph (Admin Panel)',
    category: 'HRMS',
    thumbnailUrl: '/images/projects/tubo-1.png',
    description: `
    Tubo.ph is a user-friendly HRMS platform designed for manpower agencies to simplify employee management and timekeeping. It replaces outdated biometric systems with a modern app available on iOS and Android, offering features like attendance tracking, payroll management, and role-based access.

With Tubo, companies can manage multiple agencies, assign roles, schedule shifts, and track employee activities in real-time. The platform also includes an e-wallet for seamless transactions like salary payments, bill payments, and top-ups.`,
    publishedAt: '',
    images: ['/images/projects/tubo-1.png'],
    previewUrl: '',
    techUsed: [
      "Next.js 14.2: Leveraging its latest features such as app routing, static site generation, and image optimization for exceptional speed and SEO.",
      "TypeScript: Ensuring type safety, maintainable code, and robust application development.",
      "Zustand: Providing a simple, scalable, and lightweight state management solution for efficient application performance.",
      "Radix UI: Offering accessible and unstyled components for creating high-quality, customizable user interfaces.",
      "Tailwind CSS: Utilizing a utility-first approach to design, enabling fast and responsive UI development.",
      "Authsignal: Integrating advanced authentication solutions to ensure secure and seamless user login experiences.",
      "GitLab: Providing a powerful platform for version control, CI/CD pipelines, and collaborative development workflows."
    ],    
    featureList: [
      "Designed and built for Manpower Agencies",
      "Manage all employees under a company or agency",
      "Add, edit, or remove employees",
      "Assign roles and responsibilities to users",
      "Register and manage device enrollment for check-in/check-out",
      "Set attendance schedules for individual employees",
      "Allocate leave and manage employee leave requests",
      "Track lateness, absences, and overtime",
      "Consolidate time logs across various clients",
      "Multiple user roles: Super Admin, Admin, HR, Employee, External User",
      "E-Wallet roles: Maker, Checker, Approver, Wallet Admin",
      "Role-based dashboard views and permissions",
      "Top-up wallets and manage balances",
      "Pay bills, buy loads, pay salaries, and government dues",
      "Maker role to create requests",
      "Checker role to verify requests",
      "Approver role to approve transactions",
      "Transaction history and approved request logs",
      "Notifications for payment status",
      "Dedicated payroll section for managing employee salaries",
      "Automatic notification of payment statuses to employees",
      "Streamlined salary disbursement through the e-wallet",
      "Centralized dashboard with common info and analytics",
      "Total counts of approved, created, and checked requests",
      "Notifications for payments, employee activities, and updates",
      "Support for registering companies and agencies under a company",
      "Create, manage, and assign agencies under registered companies",
      "Assign departments and locations to companies",
      "Create custom schedule templates",
      "Assign schedules to employees individually",
      "Manage and adjust schedules based on company needs",
      "Secure transaction management",
      "Role-based access for critical operations",
      "Detailed logs for compliance and audit purposes"
    ]
  },
  {
    id: 2,
    title: 'Kohereza International (www.kohereza.com)',
    category: 'Website',
    thumbnailUrl: '/images/projects/kohereza.png',
    description: `
    Kohereza International, founded in 2019 in Surat, Gujarat, is an import-export leader specializing in premium products like Construction Chemicals, Jewelry, Organic Grains, and Indian Handcrafted Items.

    \n\nWe built their multilingual website using Next.js 14.2 with features like dynamic language support, static site generation, SEO, and responsive design, delivering a fast, user-friendly experience showcasing Kohereza's commitment to quality and global outreach.
    `,
    publishedAt: '',
    images: ["/images/projects/kohereza.png"],
    previewUrl: '',
    techUsed:[
      "Next.js 14.2: Leveraging its latest features such as app routing, static site generation, and image optimization for exceptional speed and SEO.",
      "TypeScript: Ensuring type safety, maintainable code, and robust application development.",
      "Material UI: For creating a modern, responsive, and visually appealing user interface.",
      "i18n (Internationalization): Enabling multilingual support for 10 languages to serve a global audience.",
      "EmailJS: Facilitating seamless and user-friendly form submissions for the 'Contact Us' page."
    ],
    featureList:[
      "Multilingual Support: Dynamic content in 10 languages, auto-detected or user-selectable.",
      "Static Site Generation (SSG): Ensures fast loading and high performance.",
      "SEO Optimization: Improves search rankings and organic visibility.",
      "Image Optimization: Faster load times with enhanced visual quality.",
      "Responsive Design: Seamless experience across all devices.",
      "App Routing: Simplified navigation with optimized routes.",
      "Contact Us: Functional form powered by EmailJS.",
      "Modern UI/UX: Clean design with Material UI for intuitive browsing.",
      "Company Pages: Sections like 'About Us,' 'Contact us,' and 'Testimonials.'"
    ]
    
  },
];

/* eslint-disable quotes, indent */