'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CourseCardProps {
  title: string;
  platform: string;
  instructor: string;
  duration: string;
  completionDate: string;
  topics: string[];
  projectTitle?: string;
  projectDescription?: string;
}

export default function CourseCard({
  title,
  platform,
  instructor,
  duration,
  completionDate,
  topics,
  projectTitle,
  projectDescription,
}: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-subtle rounded-xl p-6 hover:shadow-brand transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-1">
            <Icon name="AcademicCapIcon" size={16} />
            <span>{platform}</span>
          </div>
          <p className="text-sm text-text-muted">Instructor: {instructor}</p>
        </div>
        {projectTitle && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-250"
            aria-label={isExpanded ? 'Collapse project details' : 'Expand project details'}
          >
            <Icon
              name="ChevronDownIcon"
              size={20}
              className={`text-text-secondary transition-transform duration-250 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-1 text-text-muted">
          <Icon name="ClockIcon" size={16} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-brand-green">
          <Icon name="CheckCircleIcon" size={16} />
          <span>{completionDate}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>

      {isExpanded && projectTitle && (
        <div className="pt-4 border-t border-subtle animate-slide-up">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="CodeBracketIcon" size={18} className="text-brand-cyan" />
            <h4 className="text-md font-semibold text-text-primary">{projectTitle}</h4>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{projectDescription}</p>
        </div>
      )}
    </div>
  );
}