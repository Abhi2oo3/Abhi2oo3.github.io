'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' }
  ];

  const resources = [
    { label: 'Experience', href: '/experience' },
    { label: 'Education', href: '/education' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <footer className={`bg-card border-t border-brand-cyan/10 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/homepage" className="inline-block group">
              <code className="text-2xl font-bold font-mono text-brand-cyan group-hover:text-brand-light-cyan transition-colors duration-250">
                {'<AD/>'}
              </code>
            </Link>
            <p className="text-sm text-text-secondary">
              Full-Stack Developer & AI/ML Engineer passionate about building innovative solutions that make a difference.
            </p>
            <div className="flex items-center space-x-3">
              <a
                  href="https://github.com/Abhi2oo3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-brand-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1"
                  aria-label="GitHub Profile"
                >
                  <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6" />
                </a>
              <a
                  href="https://www.linkedin.com/in/abhishek-dixit03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-brand-light-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1"
                  aria-label="LinkedIn Profile"
                >
                  <img src="/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
              <a
                href="mailto:abhishekdixit0322@gmail.com"
                  className="p-2 text-text-secondary hover:text-brand-light-cyan transition-colors duration-250 hover:bg-card/50 rounded-md flex items-center space-x-1"
                aria-label="Email"
              >
                  <img src="/assets/images/mail-reception-svgrepo-com (1).svg" alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-text-primary font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-cyan transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-cyan transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:abhishekdixit0322@gmail.com"
                className="flex items-center space-x-2 text-sm text-text-secondary hover:text-brand-cyan transition-colors duration-250"
              >
                <Icon name="EnvelopeIcon" size={16} />
                <span>abhishekdixit0322@gmail.com</span>
              </a>
              <a
                href="tel:+91-8953717589"
                className="flex items-center space-x-2 text-sm text-text-secondary hover:text-brand-cyan transition-colors duration-250"
              >
                <Icon name="PhoneIcon" size={16} />
                <span>+91 8953717589</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="MapPinIcon" size={16} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cyan/10 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted text-center md:text-left">
              {isHydrated ? (
                <>© {currentYear} Abhishek Portfolio. All rights reserved.</>
              ) : (
                <>© 2025 Abhishek Portfolio. All rights reserved.</>
              )}
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;