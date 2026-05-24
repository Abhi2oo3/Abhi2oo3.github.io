'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Konami code: up, up, down, down, left, right, left, right, b, a
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    setIsHydrated(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === konamiCode[konamiIndex]) {
        setKonamiIndex((prev) => {
          const newIndex = prev + 1;
          if (newIndex === konamiCode.length) {
            setShowEasterEgg(true);
            setTimeout(() => setShowEasterEgg(false), 5000);
            return 0;
          }
          return newIndex;
        });
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex]);

  const codeSnippets = [
    { language: 'Python', code: 'def solve_problem():\n    return innovation + impact' },
    { language: 'JavaScript', code: 'const buildFuture = () => {\n  return code + creativity;\n};' },
    { language: 'TypeScript', code: 'interface Developer {\n  skills: string[];\n  passion: boolean;\n}' }
  ];

  useEffect(() => {
    if (!isHydrated) return;
    
    const interval = setInterval(() => {
      setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHydrated]);

  return (
    <section ref={heroRef} className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50 gradient-animate"></div>
      
      {/* Floating orbs with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Easter egg - Matrix rain effect */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
            <div className="text-center animate-scale-in">
              <h2 className="text-6xl font-bold text-brand-green mb-4 text-neon animate-pulse">
                🎉 KONAMI CODE ACTIVATED! 🎉
              </h2>
              <p className="text-2xl text-brand-cyan animate-bounce">
                You found the secret! Welcome to the Matrix...
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content with scroll animations */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block scroll-fade-in">
                <span className="text-brand-cyan font-mono text-sm font-semibold px-3 py-1 bg-brand-cyan/10 rounded-full border border-brand-cyan/20 animate-pulse-glow">
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight scroll-slide-left">
                <span className="text-text-primary">Hi, I'm </span>
                <span className="bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink bg-clip-text text-transparent gradient-animate">
                  Abhishek Dixit
                </span>
              </h1>
              
              <p className="text-2xl sm:text-3xl text-brand-light-cyan font-semibold scroll-slide-left stagger-1">
                Full-Stack Developer & AI/ML Engineer
              </p>
              
              <p className="text-lg text-text-secondary max-w-2xl leading-relaxed scroll-fade-in stagger-2">
                Transforming complex challenges into elegant solutions through innovative code. Specializing in AI/ML, cloud technologies, and full-stack development with a passion for creating meaningful impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 scroll-fade-in stagger-3">
              <Link
                href="/projects"
                className="group px-6 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-lg hover:bg-brand-pink/90 transition-all duration-350 hover-lift flex items-center space-x-2"
              >
                <span>View My Work</span>
                <Icon name="ArrowRightIcon" size={20} className="group-hover:translate-x-1 transition-transform duration-250" />
              </Link>
              
              <a
                href="/assets/resume.pdf"
                download
                className="px-6 py-3 glass text-text-primary font-semibold rounded-lg border border-brand-cyan/30 hover:border-brand-cyan hover-glow transition-all duration-350 flex items-center space-x-2"
              >
                <Icon name="ArrowDownTrayIcon" size={20} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-4 scroll-fade-in stagger-4">
              <a
                href="https://github.com/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-cyan transition-all duration-350 group"
              >
                <Icon name="CodeBracketIcon" size={24} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-350" />
                <span className="font-medium">GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-light-cyan transition-all duration-350 group"
              >
                <Icon name="UserCircleIcon" size={24} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-350" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right column - Code editor mockup with animations */}
          <div className="relative scroll-slide-right">
            <div className="relative glass rounded-2xl border border-brand-cyan/20 p-6 shadow-brand-strong hover-lift overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-30 animate-shimmer bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent"></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-warning animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                {isHydrated && (
                  <span className="text-xs text-brand-cyan font-mono animate-slide-in-right">{codeSnippets[currentCodeSnippet].language}</span>
                )}
              </div>
              
              <div className="font-mono text-sm relative z-10">
                {isHydrated ? (
                  <pre className="text-brand-green whitespace-pre-wrap animate-fade-in">
                    {codeSnippets[currentCodeSnippet].code}
                  </pre>
                ) : (
                  <pre className="text-brand-green whitespace-pre-wrap">
                    {codeSnippets[0].code}
                  </pre>
                )}
              </div>
              
              <div className="mt-4 flex items-center space-x-2 relative z-10">
                <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse"></div>
                <span className="text-xs text-text-muted font-mono">Building innovative solutions...</span>
                <span className="inline-block w-2 h-4 bg-brand-cyan animate-cursor-blink ml-1"></span>
              </div>
            </div>

            {/* Animated glow orbs around code editor */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-cyan/20 rounded-full blur-2xl animate-float-slow"></div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform duration-350">
          <Icon name="ChevronDownIcon" size={32} className="text-brand-cyan animate-pulse" />
          <span className="text-xs text-text-muted font-mono">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;