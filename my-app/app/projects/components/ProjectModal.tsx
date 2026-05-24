'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: string;
}

interface Impact {
  metric: string;
  value: string;
}

interface CodeSnippet {
  language: string;
  code: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  tagline: string;
  longDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  impact: Impact[];
  features: string[];
  challenges: string[];
  learnings: string[];
  demoUrl?: string;
  githubUrl: string;
  codeSnippet?: CodeSnippet;
  status: 'Completed' | 'In Progress' | 'Open Source';
  duration: string;
  role: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const techByCategory = project.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-lg border border-subtle shadow-brand overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-muted transition-colors duration-250"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} className="text-text-primary" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative h-64 sm:h-80">
            <AppImage
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary border border-subtle">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full text-xs font-semibold">
                  {project.complexity}
                </span>
                <span className="px-3 py-1 bg-brand-green/20 text-brand-green rounded-full text-xs font-semibold">
                  {project.status}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-brand-light-cyan font-medium">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-card border border-subtle rounded-md hover:border-brand-cyan hover:bg-muted/50 transition-all duration-250 font-semibold"
              >
                <Icon name="CodeBracketIcon" size={20} />
                View on GitHub
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-brand-green-foreground rounded-md hover:bg-brand-green/90 transition-all duration-250 font-semibold"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={20} />
                  Live Demo
                </a>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Project Overview</h3>
              <p className="text-text-secondary leading-relaxed">
                {project.longDescription}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-subtle">
                  <p className="text-sm text-text-muted mb-1">Duration</p>
                  <p className="text-text-primary font-semibold">{project.duration}</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-subtle">
                  <p className="text-sm text-text-muted mb-1">Role</p>
                  <p className="text-text-primary font-semibold">{project.role}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Impact Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.impact.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 rounded-lg border border-brand-cyan/20"
                  >
                    <p className="text-2xl font-bold text-brand-cyan mb-1">{item.value}</p>
                    <p className="text-sm text-text-secondary">{item.metric}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Technology Stack</h3>
              <div className="space-y-4">
                {Object.entries(techByCategory).map(([category, techs]) => (
                  <div key={category}>
                    <p className="text-sm font-semibold text-brand-light-cyan mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-muted/50 text-text-primary text-sm rounded border border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.codeSnippet && (
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Code Snippet</h3>
                <p className="text-text-secondary mb-4">{project.codeSnippet.description}</p>
                <div className="bg-background rounded-lg border border-subtle overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-subtle">
                    <span className="text-sm font-mono text-brand-cyan">{project.codeSnippet.language}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(project.codeSnippet!.code)}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-250"
                    >
                      Copy
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm font-mono text-text-secondary">
                      {project.codeSnippet.code}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Technical Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border border-subtle">
                    <Icon name="ExclamationTriangleIcon" size={20} className="text-brand-orange mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Key Learnings</h3>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-brand-purple/10 rounded-lg border border-brand-purple/20">
                    <Icon name="LightBulbIcon" size={20} className="text-brand-purple mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}