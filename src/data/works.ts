import { Work } from '@/types';
/* eslint-disable quotes, indent */

export const works: Work[] = [
  {
    id: 1,
    title: 'Tuto.ph (Admin Panel)',
    category: 'HRMS',
    thumbnailUrl: '/images/projects/tubo-1.png',
    description: `
    Tubo.ph is a user-friendly HRMS platform designed for manpower agencies to simplify employee management and timekeeping. 
    It replaces outdated biometric systems with a modern app available on iOS and Android, offering features like attendance 
    tracking, payroll management, and role-based access.

    With Tubo, companies can manage multiple agencies, assign roles, schedule shifts, and track employee activities in real-time. 
    The platform also includes an e-wallet for seamless transactions like salary payments, bill payments, and top-ups.`,
    publishedAt: '',
    images: ['/images/projects/tubo-1.png'],
    previewUrl: '',
    techUsed: [
      "Next.js 14.2: Leveraging its latest features such as app routing, and image optimization for exceptional speed and SEO.",
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
    title: 'Stonewels and Admin panel (CMS)',
    category: 'E-Com Website & CMS panel',
    thumbnailUrl: '/images/projects/stonewels.png',
    description: `
    Developed a sleek e-commerce website for Stonewels using Next.js (TypeScript), showcasing a variety of jewelry 
    products like Rings, Earrings, Necklaces, and Custom Jewelry. The site includes features such as a wishlist, 
    custom design requests, a blog for jewelry tips, a ring size guide, and a contact form. Additionally, an Admin Panel 
    (similar to a CMS) was created for easy content and products management of products, customer inquiries, custom requests, 
    and blog content, ensuring a smooth and engaging user experience.
    `,
    publishedAt: '',
    images: ["/images/projects/stonewels.png", "/images/projects/stonewels-admin-lp.png"],
    previewUrl: '',
    techUsed: [
      "Next.js 14.2: Leveraging its latest features such as app routing, and image optimization for exceptional speed and SEO.",
      "TypeScript: Ensuring type safety, maintainable code, and robust application development.",
      "Material UI: For creating a modern, responsive, and visually appealing user interface.",
      "EmailJS: Facilitating seamless and user-friendly form submissions for the 'Contact Us' page.",
      "Redux Toolkit: A powerful and efficient solution for managing and centralizing application state.",
      "React Slick: A responsive carousel component for creating sleek and interactive sliders."
    ],    
      featureList: [
        "E-commerce website developed using Next.js (TypeScript) for Stonewels.",
        "Showcases a variety of jewelry products including Rings, Earrings, Necklaces, and Custom Jewelry.",
        "Wishlist feature for users to save favorite products.",
        "Custom design requests for personalized jewelry.",
        "Integrated blog section for jewelry tips and insights.",
        "Ring size guide to help users find their perfect fit.",
        "Contact form for customer inquiries and communication.",
        "Admin Panel (CMS) for managing content, products, customer inquiries, custom requests, and blog posts.",
        "Focus on delivering a smooth and engaging user experience."
      ],
  },
  {
    id: 3,
    title: 'Immencer Admin Panel (HRMS)',
    category: 'HRMS',
    thumbnailUrl: '/images/projects/immencer.png',
    description: `
   Developed Immencer, an employee management system with admin and employee panels. The admin panel
    handles HR tasks like employee management, asset allocation, attendance tracking, leave management, and policy 
    dissemination. The employee panel provides access to personal details, attendance records, leave requests, and training resources. Used React.js, 
    TypeScript, and Material-UI for a seamless, responsive UI/UX. Integrated APIs for efficient data exchange and ensured
     project success by meeting deadlines and maintaining code quality. `,
    publishedAt: '',
    images: ["/images/projects/immencer.png"],
    previewUrl: '',
    techUsed: [
      "React 18.2: Leveraging the latest features and improvements for building dynamic, high-performance user interfaces.",
      "TypeScript: Ensuring type safety, maintainable code, and robust application development.",
      "Material UI: For creating a modern, responsive, and visually appealing user interface.",
      "Redux Toolkit: A powerful and efficient solution for managing and centralizing application state.",
      "React Slick: A responsive carousel component for creating sleek and interactive sliders.",
      "React Text Editor Library: For integrating rich text editing functionality into applications.",
      "React-Graffiti: A library for incorporating graffiti-like drawing features in React applications.",
      "Date-fns: A modern JavaScript date utility library for parsing, formatting, and manipulating dates.",
      "Moment: A library for parsing, validating, manipulating, and displaying dates and times."
    ],
    featureList: [
      "Developed Immencer, an employee management system with dedicated admin and employee panels.",
      "Admin panel includes features for employee management, asset allocation, attendance tracking, leave management, and policy dissemination.",
      "Employee panel provides access to personal details, attendance records, leave requests, and training resources.",
      "Used React.js, TypeScript, and Material-UI to create a seamless, responsive UI/UX.",
      "Integrated APIs for efficient data exchange between the admin and employee panels.",
      "Ensured project success by meeting deadlines and maintaining code quality."
    ],
  },
  {
    id: 4,
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
  {
    id: 5,
    title: 'Azle - Omnichannel plateform',
    category: 'Omnichannel plateform',
    thumbnailUrl: '/images/projects/azle.png',
    description: `
    Azle revolutionizes customer support by integrating multiple channels into one platform, enhancing responsiveness 
    and workflow efficiency. Its intuitive admin panel, customization options, data-driven insights, and focus on security 
    and scalability boost customer satisfaction. Contributed by developing an Internal Chat Module, implementing Scroll Pagination,
     and integrating a Customer Merge Module. Used Redux for global state management, enhanced UI with form validation, 
     and fixed bugs to improve user experience and platform functionality.
   `,
    publishedAt: '',
    images: ["/images/projects/azle.png"],
    previewUrl: '',
    techUsed: [
      "React 18.2: Leveraging the latest features and improvements for building dynamic, high-performance user interfaces.",
      "TypeScript: Ensuring type safety, maintainable code, and robust application development.",
      "Material UI: For creating a modern, responsive, and visually appealing user interface.",
      "Redux Toolkit: A powerful and efficient solution for managing and centralizing application state.",
      "React Slick: A responsive carousel component for creating sleek and interactive sliders.",
      "React Text Editor Library: For integrating rich text editing functionality into applications.",
      "React-Graffiti: A library for incorporating graffiti-like drawing features in React applications.",
      "Date-fns: A modern JavaScript date utility library for parsing, formatting, and manipulating dates.",
      "Moment: A library for parsing, validating, manipulating, and displaying dates and times."
    ],
    featureList: [
      "Developed Azle, a platform that revolutionizes customer support by integrating multiple channels into one system, enhancing responsiveness and workflow efficiency.",
      "Intuitive admin panel with customization options for improving user and team experience.",
      "Data-driven insights to boost customer satisfaction and streamline processes.",
      "Focused on security and scalability to ensure a robust platform.",
      "Contributed to the development of an Internal Chat Module for better team communication.",
      "Implemented Scroll Pagination for a smoother user experience.",
      "Integrated a Customer Merge Module for better data management.",
      "Used Redux for global state management to maintain consistent app state.",
      "Enhanced UI with form validation for more reliable user interactions.",
    ],    
  },
  {
    id: 6,
    title: 'Solid Black Chemicals',
    category: 'Company Website',
    thumbnailUrl: '/images/projects/sbc.png',
    description: `
    Developed a website for Solid Black Chemicals, an ISO 9001:2015 certified company based in Surat, Gujarat, 
    specializing in manufacturing and supplying construction chemicals. The website features a comprehensive product listing, 
    categorized for easy navigation, with detailed descriptions of products like concrete admixtures, waterproof coatings, tile 
    adhesives, and more. Key features include multilingual support, SEO optimization, responsive design, and a career page for 
    job inquiries. Built with modern UI/UX using Material UI and optimized for speed, the site ensures a seamless browsing 
    experience across all devices.
    `,
    publishedAt: '',
    images: ["/images/projects/sbc.png"],
    previewUrl: '',
    techUsed:[
      "Next.js 14.2: Leveraging its latest features such as app routing, static site generation, and image optimization for exceptional speed and SEO.",
      "TypeScript: Ensuring type safety, maintainable code, and robust application development.",
      "Material UI: For creating a modern, responsive, and visually appealing user interface.",
      "EmailJS: Facilitating seamless and user-friendly form submissions for the 'Contact Us' page."
    ],
    featureList: [
      "Static Site Generation (SSG): Ensures fast loading and high performance.",
      "SEO Optimization: Improves search rankings and organic visibility.",
      "Image Optimization: Faster load times with enhanced visual quality.",
      "Responsive Design: Seamless experience across all devices.",
      "App Routing: Simplified navigation with optimized routes.",
      "Contact Us: Functional form powered by EmailJS.",
      "Modern UI/UX: Clean design with Material UI for intuitive browsing.",
      "Company Pages: Sections like 'About Us,' 'Contact us,' and 'Testimonials.'",
      "Product Listing: Display a comprehensive range of products with detailed descriptions.",
      "Product Categories: Organized sections to easily browse and filter products by type, features, or popularity."
    ]
  },
];

/* eslint-disable quotes, indent */