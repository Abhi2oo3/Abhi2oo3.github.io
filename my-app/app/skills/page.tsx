import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';
import Footer from '../homepage/components/Footer';
import TechGrid from '@/components/three/TechGrid';

export const metadata: Metadata = {
  title: 'Skills & Expertise - Abhishek Portfolio Pro',
  description: 'Explore my technical expertise spanning AI/ML, full-stack development, and cloud technologies with interactive skill visualizations, certifications, and continuous learning roadmap.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated tech grid background */}
      <TechGrid />
      
      <Header />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-brand-cyan/10 text-brand-cyan text-sm font-medium rounded-full border border-brand-cyan/20">
                  Technical Expertise
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink">Expertise</span>
              </h1>
              
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                A showcase of my core skills across Python development, full-stack web technologies, machine learning, databases, and cloud fundamentals — refined through internships, real-world projects, and continuous learning.
              </p>

            </div>

            <SkillsInteractive />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}