import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AnimatedBackground from './components/AnimatedBackground';
import HeroSection from './components/HeroSection';
//import StatsSection from './components/StatsSection';
//import FeaturedProjects from './components/FeaturedProjects';
//import SkillsPreview from './components/SkillsPreview';
//import ExperienceTimeline from './components/ExperienceTimeline';
import GitHubActivity from './components/GitHubActivity';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Abhishek Portfolio Pro - Full-Stack Developer & AI/ML Engineer',
  description: 'Professional portfolio showcasing innovative software engineering projects, AI/ML expertise, and full-stack development skills. Explore my journey in building impactful solutions.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      
      <main className="pt-16 relative z-10">
        <HeroSection />
        <TestimonialsCarousel />
        <GitHubActivity />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}