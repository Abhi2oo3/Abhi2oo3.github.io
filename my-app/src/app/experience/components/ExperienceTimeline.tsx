'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Achievement {
  metric: string;
  description: string;
  icon: string;
}

interface Experience {
  id: number;
  company: string;
  logo: string;
  logoAlt: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: Achievement[];
  technologies: string[];
  highlights: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-card border border-subtle rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-muted rounded-lg animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-6 bg-muted rounded w-1/3 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-pink hidden md:block"></div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative group"
          >
            <div className="absolute left-8 top-8 w-4 h-4 bg-brand-cyan rounded-full border-4 border-background hidden md:block group-hover:scale-125 transition-transform duration-250"></div>

            <div className="md:ml-20 bg-card border border-subtle rounded-xl overflow-hidden hover:border-brand-cyan/50 transition-all duration-250 hover:shadow-brand">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <AppImage
                      src={exp.logo}
                      alt={exp.logoAlt}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-brand-cyan font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-xs font-medium rounded-full whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Icon name="CalendarIcon" size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="MapPinIcon" size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="bg-muted/50 rounded-lg p-4 border border-subtle hover:border-brand-green/50 transition-colors duration-250"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name={achievement.icon as any} size={20} className="text-brand-green" />
                        <span className="text-2xl font-bold text-brand-green">
                          {achievement.metric}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => toggleCard(exp.id)}
                  className="flex items-center gap-2 text-brand-cyan hover:text-brand-light-cyan transition-colors duration-250 text-sm font-medium"
                >
                  <span>{expandedCard === exp.id ? 'Show Less' : 'Show More Details'}</span>
                  <Icon
                    name="ChevronDownIcon"
                    size={16}
                    className={`transition-transform duration-250 ${expandedCard === exp.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedCard === exp.id && (
                  <div className="mt-4 pt-4 border-t border-subtle space-y-4 animate-slide-up">
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Icon name="SparklesIcon" size={16} className="text-brand-orange" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                            <Icon name="CheckCircleIcon" size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Icon name="CodeBracketIcon" size={16} className="text-brand-purple" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full border border-subtle hover:border-brand-cyan/50 transition-colors duration-250"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;