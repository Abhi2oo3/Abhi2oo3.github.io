'use client';

import Icon from '@/components/ui/AppIcon';

interface ProjectFilterProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTech: string;
  selectedComplexity: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTechChange: (tech: string) => void;
  onComplexityChange: (complexity: string) => void;
  onSearchChange: (query: string) => void;
}

const complexityLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function ProjectFilter({
  categories,
  technologies,
  selectedCategory,
  selectedTech,
  selectedComplexity,
  searchQuery,
  onCategoryChange,
  onTechChange,
  onComplexityChange,
  onSearchChange
}: ProjectFilterProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-card text-text-primary border border-subtle rounded-lg focus:outline-none focus:border-brand-cyan transition-colors duration-250"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text-secondary mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-card text-text-primary border border-subtle rounded-lg focus:outline-none focus:border-brand-cyan transition-colors duration-250 cursor-pointer"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-secondary mb-2">
            Technology
          </label>
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="w-full px-4 py-3 bg-card text-text-primary border border-subtle rounded-lg focus:outline-none focus:border-brand-cyan transition-colors duration-250 cursor-pointer"
          >
            <option value="All">All Technologies</option>
            {technologies.map(tech => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-secondary mb-2">
            Complexity
          </label>
          <select
            value={selectedComplexity}
            onChange={(e) => onComplexityChange(e.target.value)}
            className="w-full px-4 py-3 bg-card text-text-primary border border-subtle rounded-lg focus:outline-none focus:border-brand-cyan transition-colors duration-250 cursor-pointer"
          >
            {complexityLevels.map(level => (
              <option key={level} value={level}>
                {level === 'All' ? 'All Levels' : level}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <p className="text-text-muted">
          {selectedCategory === 'All' && selectedTech === 'All' && selectedComplexity === 'All' && searchQuery === '' ?'Showing all projects' :'Filters applied'}
        </p>
        {(selectedCategory !== 'All' || selectedTech !== 'All' || selectedComplexity !== 'All' || searchQuery !== '') && (
          <button
            onClick={() => {
              onCategoryChange('All');
              onTechChange('All');
              onComplexityChange('All');
              onSearchChange('');
            }}
            className="text-brand-cyan hover:text-brand-light-cyan transition-colors duration-250 font-semibold"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}