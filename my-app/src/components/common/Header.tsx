'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { navigationItems } from '@/data/experience';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Removed moreMenuItems as we're adding Skills and Education to main navigation

  // Removed isMoreMenuOpen state as dropdown is removed

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-subtle ${className}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/homepage" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan/20 blur-lg group-hover:bg-brand-cyan/30 transition-all duration-300"></div>
              <code className="relative text-xl font-bold font-mono text-brand-cyan group-hover:text-brand-light-cyan transition-colors duration-250">
                {'<AD/>'}
              </code>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-card/50 rounded-md transition-all duration-250 relative group glow-border"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-250"></span>
              </Link>
            ))}

            {/* More dropdown removed - Skills and Education moved to main navigation */}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/Abhi2oo3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-brand-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1 float-animation"
              aria-label="GitHub Profile"
            >
              <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-dixit03/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-brand-light-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1 float-animation"
              aria-label="LinkedIn Profile"
            >
              <img src="/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-semibold rounded-lg hover:from-brand-cyan/90 hover:to-brand-purple/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform flex items-center space-x-2 glow-border"
            >
              <Icon name="PaperAirplaneIcon" size={18} />
              <span>Contact Me</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-250 float-animation"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-subtle animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-card/50 rounded-md transition-all duration-250 glow-border"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-3 px-4 pt-4 border-t border-subtle">
                <a
                  href="https://github.com/Abhi2oo3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-brand-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1 float-animation"
                  aria-label="GitHub Profile"
                >
                  <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-dixit03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-brand-light-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1 float-animation"
                  aria-label="LinkedIn Profile"
                >
                  <img src="/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-semibold rounded-lg hover:from-brand-cyan/90 hover:to-brand-purple/90 transition-all duration-300 text-center flex items-center justify-center space-x-2 glow-border"
                >
                  <Icon name="PaperAirplaneIcon" size={18} />
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;