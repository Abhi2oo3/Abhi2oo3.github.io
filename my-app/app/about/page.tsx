import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CoreValuesSection from './components/CoreValuesSection';
//import JourneyTimeline from './components/JourneyTimeline';
import ImpactMetrics from './components/ImpactMetrics';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import CallToAction from './components/CallToAction';
import Footer from '../homepage/components/Footer';
import { profile } from '@/data/profile';
import { coreValues, impactMetrics, technicalPhilosophies } from '@/data/skills';
import { journeyEvents } from '@/data/experience';

export const metadata: Metadata = {
  title: 'About - Abhishek Portfolio Pro',
  description: 'Learn about Abhishek, an innovative problem-solver specializing in AI/ML and full-stack development, dedicated to solving business and societal challenges through technology.'
};



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection profile={profile} />
        <CoreValuesSection values={coreValues} />
        <ImpactMetrics metrics={impactMetrics} />
        <TechnicalPhilosophy philosophies={technicalPhilosophies} />
        <CallToAction />
      </main>
      <Footer />
    </div>);

}