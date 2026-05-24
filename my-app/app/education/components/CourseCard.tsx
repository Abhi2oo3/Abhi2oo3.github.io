'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="bg-card border border-subtle rounded-xl p-6 transition-all duration-300 relative overflow-hidden"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(255,165,0,0.2)]"></div>
      </div>
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex-1">
          <motion.h3 
            className="text-lg font-semibold text-text-primary mb-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-1">
            <Icon name="AcademicCapIcon" size={16} />
            <span>{platform}</span>
          </div>
          <p className="text-sm text-text-muted">Instructor: {instructor}</p>
        </div>
        {projectTitle && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-250"
            aria-label={isExpanded ? 'Collapse project details' : 'Expand project details'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon
              name="ChevronDownIcon"
              size={20}
              className={`text-text-secondary transition-transform duration-250 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </motion.button>
        )}
      </div>

      <div className="flex items-center gap-4 text-sm mb-4 relative z-10">
        <div className="flex items-center gap-1 text-text-muted">
          <Icon name="ClockIcon" size={16} />
          <span>{duration}</span>
        </div>
        <motion.div 
          className="flex items-center gap-1 text-brand-green"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon name="CheckCircleIcon" size={16} />
          <span>{completionDate}</span>
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {topics.map((topic, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {topic}
          </motion.span>
        ))}
      </div>

      {isExpanded && projectTitle && (
        <motion.div 
          className="pt-4 border-t border-subtle animate-slide-up relative z-10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Icon name="CodeBracketIcon" size={18} className="text-brand-cyan" />
            <h4 className="text-md font-semibold text-text-primary">{projectTitle}</h4>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{projectDescription}</p>
        </motion.div>
      )}
    </motion.div>
  );
}