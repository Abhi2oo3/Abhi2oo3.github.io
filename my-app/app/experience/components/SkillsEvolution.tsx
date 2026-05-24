'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SkillProgress {
  skill: string;
  level: number;
  yearStarted: string;
  category: string;
}

interface SkillsEvolutionProps {
  skills: SkillProgress[];
}

const SkillsEvolution = ({ skills }: SkillsEvolutionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card border border-subtle rounded-xl p-6">
        <div className="h-6 bg-muted rounded w-1/3 animate-pulse mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-muted rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-card border border-subtle rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="ChartBarIcon" size={24} className="text-brand-cyan" />
        <h3 className="text-xl font-semibold text-text-primary">Skills Evolution Timeline</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
              selectedCategory === category
                ? 'bg-brand-cyan text-brand-cyan-foreground'
                : 'bg-muted text-text-secondary hover:bg-muted/70'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-text-primary">{skill.skill}</span>
                <span className="text-xs text-text-muted">({skill.yearStarted})</span>
              </div>
              <span className="text-sm font-semibold text-brand-cyan">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-500 group-hover:from-brand-purple group-hover:to-brand-pink"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsEvolution;