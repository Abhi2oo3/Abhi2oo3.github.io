'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';
import Footer from '../../homepage/components/Footer';
import { projects, allTechnologies, categories, Project } from '@/data/projects';

const mockProjects = projects;


export default function ProjectsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-card border-b border-subtle"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="h-8 bg-card rounded w-64 mb-4"></div>
          <div className="h-4 bg-card rounded w-96 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-96 bg-card rounded-lg"></div>
            )}
          </div>
        </div>
      </div>);

  }

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'All' || project.technologies.some((t) => t.name === selectedTech);
    const matchesComplexity = selectedComplexity === 'All' || project.complexity === selectedComplexity;
    const matchesSearch = searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTech && matchesComplexity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-subtle">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                Project <span className="text-brand-cyan">Showcase</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Explore my diverse portfolio of innovative projects spanning AI/ML, full-stack development, and social impact solutions. Each project tells a story of problem-solving, technical excellence, and measurable impact.
              </p>
            </div>

            <ProjectFilter
              categories={categories}
              technologies={allTechnologies}
              selectedCategory={selectedCategory}
              selectedTech={selectedTech}
              selectedComplexity={selectedComplexity}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onTechChange={setSelectedTech}
              onComplexityChange={setSelectedComplexity}
              onSearchChange={setSearchQuery} />

          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            {filteredProjects.length === 0 ?
            <div className="text-center py-16">
                <p className="text-xl text-text-muted">No projects found matching your filters.</p>
                <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTech('All');
                  setSelectedComplexity('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-3 bg-brand-cyan text-brand-cyan-foreground font-semibold rounded-md hover:bg-brand-light-cyan transition-colors duration-250">

                  Reset Filters
                </button>
              </div> :

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) =>
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={() => setSelectedProject(project)} />

              )}
              </div>
            }
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Let's Build Something <span className="text-brand-green">Amazing</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Have a project idea or looking for collaboration? I'm always excited to work on innovative solutions that create real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-card text-text-primary font-semibold rounded-md hover:bg-muted transition-all duration-250 border border-subtle hover:border-brand-cyan">

                View GitHub Profile
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-md hover:bg-brand-pink/90 transition-all duration-250 hover:shadow-brand">

                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {selectedProject &&
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

      }
    </div>);

}