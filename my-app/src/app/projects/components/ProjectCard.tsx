'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: string;
}

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Completed' | 'In Progress' | 'Open Source';
  githubUrl: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const complexityColors = {
  'Beginner': 'text-brand-green',
  'Intermediate': 'text-brand-orange',
  'Advanced': 'text-brand-pink'
};

const statusColors = {
  'Completed': 'bg-brand-green/20 text-brand-green',
  'In Progress': 'bg-brand-orange/20 text-brand-orange',
  'Open Source': 'bg-brand-purple/20 text-brand-purple'
};

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-subtle hover:border-brand-cyan transition-all duration-300 hover:shadow-brand hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary border border-subtle">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-cyan transition-colors duration-250">
            {project.title}
          </h3>
          <span className={`text-sm font-semibold ${complexityColors[project.complexity]}`}>
            {project.complexity}
          </span>
        </div>

        <p className="text-sm text-brand-light-cyan font-medium mb-3">
          {project.tagline}
        </p>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded border border-subtle"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded border border-subtle">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onViewDetails}
            className="flex-1 px-4 py-2 bg-brand-cyan text-brand-cyan-foreground font-semibold rounded-md hover:bg-brand-light-cyan transition-colors duration-250 text-sm"
          >
            View Details
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-card border border-subtle rounded-md hover:border-brand-cyan hover:bg-muted/50 transition-all duration-250 flex items-center justify-center"
            aria-label="View on GitHub"
          >
            <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-5 h-5 text-text-secondary" />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card border border-subtle rounded-md hover:border-brand-green hover:bg-muted/50 transition-all duration-250"
              aria-label="View live demo"
            >
              <Icon name="ArrowTopRightOnSquareIcon" size={20} className="text-text-secondary" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}