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
              <span className="text-sm font-medium text-text-primary group-hover:text-brand-cyan transition-colors duration-250">
                {skill.name}
              </span>
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