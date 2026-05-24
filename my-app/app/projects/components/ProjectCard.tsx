'use client';

import { useState, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';
import ProjectScene from '@/components/three/ProjectScene';

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
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div 
      ref={cardRef}
      className="group bg-card rounded-lg overflow-hidden border border-subtle hover:border-brand-cyan transition-all duration-300 hover:shadow-brand relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Cyberpunk glow effect */}
      <div className={`absolute inset-0 rounded-lg pointer-events-none transition-all duration-300 ${
        isHovered ? 'shadow-[0_0_20px_rgba(0,255,255,0.5)]' : 'shadow-none'
      }`}></div>
      
      <div className="relative h-48 overflow-hidden">
        {/* 3D Laptop Model */}
        <div className="w-full h-full">
          <ProjectScene screenshotUrl={project.image} isHovered={isHovered} />
        </div>
        
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
          <motion.h3 
            className="text-xl font-bold text-text-primary group-hover:text-brand-cyan transition-colors duration-250"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
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
            <motion.span
              key={index}
              className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded border border-subtle"
              whileHover={{ scale: 1.05 }}
            >
              {tech.name}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted/50 text-text-secondary text-xs rounded border border-subtle">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <motion.button
            onClick={onViewDetails}
            className="flex-1 px-4 py-2 bg-brand-cyan text-brand-cyan-foreground font-semibold rounded-md hover:bg-brand-light-cyan transition-colors duration-250 text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-card border border-subtle rounded-md hover:border-brand-cyan hover:bg-muted/50 transition-all duration-250"
            aria-label="View on GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="CodeBracketIcon" size={20} className="text-text-secondary" />
          </motion.a>
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card border border-subtle rounded-md hover:border-brand-green hover:bg-muted/50 transition-all duration-250"
              aria-label="View live demo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon name="ArrowTopRightOnSquareIcon" size={20} className="text-text-secondary" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}