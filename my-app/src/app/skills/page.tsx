import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Skills & Expertise - Abhishek Portfolio Pro',
  description: 'Explore my technical expertise spanning AI/ML, full-stack development, and cloud technologies with interactive skill visualizations, certifications, and continuous learning roadmap.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
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
                A comprehensive showcase of my technical capabilities, from AI/ML and full-stack development 
                to cloud technologies and DevOps. Continuously evolving through hands-on projects and dedicated learning.
              </p>
            </div>

            <SkillsInteractive />
          </div>
        </div>
      </main>

      <footer className="border-t border-subtle py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-text-muted">
            <p>&copy; {new Date().getFullYear()} Abhishek Portfolio Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}