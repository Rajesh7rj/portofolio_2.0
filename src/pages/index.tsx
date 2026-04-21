import type { NextPage } from 'next';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from '@/components/partials/HeroSection';
import AboutSection from '@/components/partials/AboutSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import TechStack from '@/components/partials/TechStack';
import TestimonialSection from '@/components/partials/TestimonialSection';
import ContactSection from '@/components/partials/ContactSection';
import BlogSection from '@/components/partials/BlogSection';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Home: NextPage = () => {
  useScrollReveal();

  return (
    <AppLayout>
      {/* Hero */}
      <HeroSection />

      <div className="container">
        {/* About */}
        <div className="reveal"><AboutSection /></div>

        {/* Experience & Education */}
        <div className="reveal"><ExperienceSection /></div>

        {/* Projects */}
        <div className="reveal"><RecentWorkSection /></div>

        {/* Skills */}
        <div className="reveal"><TechStack /></div>

        {/* Testimonials */}
        <div className="reveal"><TestimonialSection /></div>

        {/* Blog / Articles */}
        <div className="reveal"><BlogSection /></div>

        {/* Contact */}
        <div className="reveal"><ContactSection /></div>
      </div>
    </AppLayout>
  );
};

export default Home;

