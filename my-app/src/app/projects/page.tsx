import type { Metadata } from 'next';
import ProjectsInteractive from './components/ProjectsInteractive';

export const metadata: Metadata = {
  title: 'Projects - Abhishek Portfolio Pro',
  description: 'Explore my diverse portfolio of innovative projects spanning AI/ML, full-stack development, and social impact solutions. From women\'s safety systems to cricket apps, discover how I solve real-world problems through code.',
};

export default function ProjectsPage() {
  return <ProjectsInteractive />;
}