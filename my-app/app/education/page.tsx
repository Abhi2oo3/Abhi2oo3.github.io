import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import EducationInteractive from './components/EducationInteractive';
import Footer from '../homepage/components/Footer';
import CodeParticlesBackground from '@/components/three/CodeParticles';

export const metadata: Metadata = {
  title: 'Education & Certifications - Abhishek Portfolio Pro',
  description:
    'Explore my academic background in Computer Science Engineering, industry-recognized certifications, and continuous learning accomplishments across AI, ML, cloud computing, and software engineering.',
};


export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16 relative">
        {/* Cyber-Grid animated background */}
        <CodeParticlesBackground />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Education &{' '}
                <span className="bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange bg-clip-text text-transparent">
                  Growth Path
                </span>
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                A strong academic foundation in Computer Science Engineering supported by
                industry-recognized certifications and hands-on technical training.
                My learning journey blends engineering fundamentals with practical exposure
                in AI, machine learning, cloud computing, and full-stack development.
              </p>

            </div>

            <EducationInteractive />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}