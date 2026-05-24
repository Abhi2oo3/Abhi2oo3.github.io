import { useState } from 'react';
import SkillLogo from '@/components/three/SkillLogo';

interface Skill {
  name: string;
  level: number;
  description: string;
  projects: string[];
  yearsOfExperience: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  color: string;
  icon: string;
}

const SkillCategory = ({ title, skills, color, icon }: SkillCategoryProps) => {
  // Map skill names to available logo paths
  const skillLogos: Record<string, string> = {
    "Python": "/assets/images/pw.jpg",
    "C/C++": "/assets/images/pw.jpg",
    "Java": "/assets/images/pw.jpg",
    "SQL": "/assets/images/pw.jpg",
    "React.js": "/assets/images/pw.jpg",
    "Flask": "/assets/images/pw.jpg",
    "FastAPI": "/assets/images/pw.jpg",
    "Django": "/assets/images/pw.jpg",
    "REST APIs": "/assets/images/pw.jpg",
    "TensorFlow": "/assets/images/pw.jpg",
    "OpenCV": "/assets/images/pw.jpg",
    "Scikit-learn": "/assets/images/pw.jpg",
    "Pandas": "/assets/images/pw.jpg",
    "NumPy": "/assets/images/pw.jpg",
    "MySQL": "/assets/images/pw.jpg",
    "PostgreSQL": "/assets/images/pw.jpg",
    "Neo4j": "/assets/images/pw.jpg",
    "AWS": "/assets/images/AWS.png",
    "Git & GitHub": "/assets/images/github-octocat-svgrepo-com (2).svg"
  };

  return (
    <div className="bg-card border border-subtle rounded-xl p-6 hover:shadow-brand transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {/* 3D Skill Logo */}
                {skillLogos[skill.name] ? (
                  <div className="w-6 h-6 flex-shrink-0">
                    <SkillLogo 
                      logoPath={skillLogos[skill.name]} 
                      size={24}
                      rotationSpeed={1.5}
                    />
                  </div>
                ) : (
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${color}`}></div>
                )}
                <span className="text-sm font-medium text-text-primary group-hover:text-brand-cyan transition-colors duration-250">
                  {skill.name}
                </span>
              </div>
              <span className="text-xs text-text-muted">
                {skill.yearsOfExperience}+ {skill.yearsOfExperience === 1 ? 'year' : 'years'}
              </span>
            </div>
            
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full transition-all duration-500 group-hover:shadow-brand`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
            
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
              <p className="text-xs text-text-secondary mb-1">{skill.description}</p>
              <div className="flex flex-wrap gap-1">
                {skill.projects.slice(0, 2).map((project, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-muted/50 text-text-muted rounded"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;