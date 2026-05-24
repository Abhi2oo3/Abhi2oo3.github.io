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
                {'<AP />'}
              </code>
            </Link>
            <p className="text-sm text-text-secondary">
              Full-Stack Developer & AI/ML Engineer passionate about building innovative solutions that make a difference.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-muted rounded-lg transition-colors duration-250"
                aria-label="GitHub"
              >
                <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-5 h-5 text-text-secondary hover:text-brand-cyan" />
              </a>
              <a
                href="https://linkedin.com/in/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background hover:bg-muted rounded-lg transition-colors duration-250"
                aria-label="LinkedIn"
              >
                <Icon name="UserCircleIcon" size={20} className="text-text-secondary hover:text-brand-light-cyan" />
              </a>
              <a
                href="mailto:abhishek@example.com"
                className="p-2 bg-background hover:bg-muted rounded-lg transition-colors duration-250"
                aria-label="Email"
              >
                <Icon name="EnvelopeIcon" size={20} className="text-text-secondary hover:text-brand-orange" />
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
                href="mailto:abhishek@example.com"
                className="flex items-center space-x-2 text-sm text-text-secondary hover:text-brand-cyan transition-colors duration-250"
              >
                <Icon name="EnvelopeIcon" size={16} />
                <span>abhishek@example.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-sm text-text-secondary hover:text-brand-cyan transition-colors duration-250"
              >
                <Icon name="PhoneIcon" size={16} />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="MapPinIcon" size={16} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cyan/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted text-center md:text-left">
              {isHydrated ? (
                <>© {currentYear} Abhishek Portfolio. All rights reserved.</>
              ) : (
                <>© 2025 Abhishek Portfolio. All rights reserved.</>
              )}
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-text-muted hover:text-brand-cyan transition-colors duration-250"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-text-muted hover:text-brand-cyan transition-colors duration-250"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;