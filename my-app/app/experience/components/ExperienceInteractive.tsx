'use client';

import ExperienceTimeline from './ExperienceTimeline';
import SkillsEvolution from './SkillsEvolution';
import PeerRecommendations from './PeerRecommendations';
import DownloadSection from './DownloadSection';

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

interface SkillProgress {
  skill: string;
  level: number;
  yearStarted: string;
  category: string;
}

interface Recommendation {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  recommendation: string;
  relationship: string;
}

interface DownloadItem {
  title: string;
  description: string;
  icon: string;
  fileSize: string;
  format: string;
}

interface ExperienceInteractiveProps {
  experiences: Experience[];
  skills: SkillProgress[];
  recommendations: Recommendation[];
  downloads: DownloadItem[];
}

const ExperienceInteractive = ({ 
  experiences, 
  skills, 
  recommendations, 
  downloads 
}: ExperienceInteractiveProps) => {
  return (
    <div className="space-y-8">
      <ExperienceTimeline experiences={experiences} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SkillsEvolution skills={skills} />
        <PeerRecommendations recommendations={recommendations} />
      </div>

      <DownloadSection downloads={downloads} />
    </div>
  );
};

export default ExperienceInteractive;