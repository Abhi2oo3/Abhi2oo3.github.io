import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the component to avoid SSR issues with Three.js
const ProjectsInteractive = dynamic(() => import('./components/ProjectsInteractive'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse space-y-8">
          <div className="h-12 bg-card rounded w-1/3 mx-auto"></div>
          <div className="h-6 bg-card rounded w-2/3 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-card rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
});

export const metadata: Metadata = {
  title: 'Projects - Abhishek Portfolio Pro',
  description: 'Explore my diverse portfolio of innovative projects spanning AI/ML, full-stack development, and social impact solutions. From women\'s safety systems to cricket apps, discover how I solve real-world problems through code.',
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-card rounded w-1/3 mx-auto"></div>
            <div className="h-6 bg-card rounded w-2/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-card rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <ProjectsInteractive />
    </Suspense>
  );
}