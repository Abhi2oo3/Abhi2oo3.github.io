'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  type: 'education' | 'work' | 'project' | 'certification';
}

interface JourneyTimelineProps {
  events: TimelineEvent[];
}

export default function JourneyTimeline({ events }: JourneyTimelineProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-brand-cyan to-brand-light-cyan';
      case 'work':
        return 'from-brand-green to-brand-cyan';
      case 'project':
        return 'from-brand-purple to-brand-pink';
      case 'certification':
        return 'from-brand-orange to-brand-green';
      default:
        return 'from-brand-cyan to-brand-purple';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return 'AcademicCapIcon';
      case 'work':
        return 'BriefcaseIcon';
      case 'project':
        return 'CodeBracketIcon';
      case 'certification':
        return 'TrophyIcon';
      default:
        return 'StarIcon';
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-text-secondary">
            Key milestones that shaped my career and expertise
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-green hidden md:block"></div>
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="relative pl-0 md:pl-20"
              >
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-card border-2 border-brand-cyan/50 flex items-center justify-center hidden md:flex">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getTypeColor(event.type)} flex items-center justify-center`}>
                    <Icon name={getTypeIcon(event.type) as any} size={24} className="text-white" />
                  </div>
                </div>
                
                <div
                  className={`bg-card border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedId === event.id ? 'border-brand-cyan/50 shadow-brand' : 'border-subtle hover:border-brand-cyan/30'
                  }`}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 rounded-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-1 rounded">
                            {event.year}
                          </span>
                          <div className="md:hidden">
                            <Icon name={getTypeIcon(event.type) as any} size={20} className="text-brand-cyan" />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-text-primary mb-1">
                          {event.title}
                        </h3>
                        
                        <p className="text-sm text-brand-light-cyan font-medium">
                          {event.organization}
                        </p>
                      </div>
                      
                      <Icon
                        name="ChevronDownIcon"
                        size={24}
                        className={`text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                          expandedId === event.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {expandedId === event.id && (
                    <div className="px-6 pb-6 space-y-4 animate-slide-up">
                      <p className="text-text-secondary leading-relaxed">
                        {event.description}
                      </p>
                      
                      {event.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {event.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="CheckCircleIcon" size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-text-secondary">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}