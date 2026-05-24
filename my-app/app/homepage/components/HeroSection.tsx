'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { motion, easeOut } from 'framer-motion';
import HeroBackground from '@/components/three/HeroBackground';
import { profile, codeSnippets } from '@/data/profile';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Mouse move tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


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

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section ref={heroRef} className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* 3D Background */}
      <HeroBackground mousePosition={mousePosition} />
      
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
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <span className="text-brand-cyan font-mono text-sm font-semibold px-3 py-1 bg-brand-cyan/10 rounded-full border border-brand-cyan/20 shadow-sm">
                  Production Systems & Automation
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-text-primary">Hi, I'm </span>
                <span className="bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-pink bg-clip-text text-transparent">
                  Abhishek Dixit
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl sm:text-3xl text-brand-light-cyan font-semibold"
                variants={itemVariants}
              >
                Software Engineer • Backend Systems & ERP Architect
              </motion.p>
              
              <motion.p 
                className="text-lg text-text-secondary max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                Architecting high-performance backend pipelines, customized Odoo ERP infrastructures, and multi-channel workflow automations. Focused on engineering production reliability, secure APIs, and operational scalability.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/projects"
                  className="group px-6 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-lg hover:bg-brand-pink/90 transition-all duration-350 flex items-center space-x-2 border border-brand-pink/20 hover:shadow-brand"
                >
                  <span>View Production Systems</span>
                  <Icon name="ArrowRightIcon" size={20} className="group-hover:translate-x-1 transition-transform duration-250" />
                </Link>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="/assets/Abhishek_Dixit_Resume.pdf"
                  download
                  className="px-6 py-3 glass bg-card/50 text-text-primary font-semibold rounded-lg border border-brand-cyan/20 hover:border-brand-cyan hover:bg-muted transition-all duration-350 flex items-center space-x-2"
                >
                  <Icon name="ArrowDownTrayIcon" size={20} />
                  <span>Download Tech Resume</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="flex items-center space-x-6 pt-4" variants={itemVariants}>
              <motion.a
                href="https://github.com/Abhi2oo3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-cyan transition-all duration-350 group float-animation"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6" />
                <span className="font-medium">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/abhishek-dixit03/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-light-cyan transition-all duration-350 group float-animation"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <img src="/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Code editor mockup with animations */}
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative glass-card rounded-2xl border border-brand-cyan/20 p-6 shadow-brand-strong hover-lift overflow-hidden glow-border">
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-30 animate-shimmer bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent"></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-warning animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                {isHydrated && (
                  <motion.span 
                    className="text-xs text-brand-cyan font-mono"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    key={currentCodeSnippet}
                  >
                    {codeSnippets[currentCodeSnippet].language}
                  </motion.span>
                )}
              </div>
              
              <div className="font-mono text-sm relative z-10">
                {isHydrated ? (
                  <motion.pre 
                    className="text-brand-green whitespace-pre-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    key={currentCodeSnippet}
                  >
                    {codeSnippets[currentCodeSnippet].code}
                  </motion.pre>
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
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-2xl animate-float float-animation-slow"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-cyan/20 rounded-full blur-2xl animate-float-slow float-animation"></div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2 cursor-pointer hover:scale-110 transition-transform duration-350">
          <Icon name="ChevronDownIcon" size={32} className="text-brand-cyan animate-pulse" />
          <span className="text-xs text-text-muted font-mono">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;