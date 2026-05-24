import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface SkillsPreviewProps {
  className?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

const SkillsPreview = ({ className = '' }: SkillsPreviewProps) => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: 'CodeBracketIcon',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'brand-cyan'
    },
    {
      title: 'Backend Development',
      icon: 'ServerIcon',
      skills: ['Node.js', 'Python', 'Django', 'REST APIs'],
      color: 'brand-green'
    },
    {
      title: 'AI/ML Engineering',
      icon: 'CpuChipIcon',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'],
      color: 'brand-purple'
    },
    {
      title: 'Cloud & DevOps',
      icon: 'CloudIcon',
      skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
      color: 'brand-orange'
    }
  ];

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
            Technical <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive skill set spanning modern web technologies, AI/ML, and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-brand-cyan/10 hover:border-brand-cyan/30 transition-all duration-250 hover:shadow-brand space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                  <Icon name={category.icon as any} size={24} className={`text-${category.color}`} />
                </div>
                <h3 className="text-lg font-bold text-text-primary">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="CheckCircleIcon" size={16} className="text-brand-green flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/skills"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-lg hover:bg-brand-pink/90 transition-all duration-250 hover:shadow-brand"
          >
            <span>Explore All Skills</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;