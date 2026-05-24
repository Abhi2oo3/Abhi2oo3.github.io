import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ExperienceTimelineProps {
  className?: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo: string;
}

const ExperienceTimeline = ({ className = '' }: ExperienceTimelineProps) => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Blackcoffer',
      role: 'Full-Stack Developer',
      period: '2023 - Present',
      description: 'Leading development of enterprise-level web applications with focus on performance optimization and scalable architecture.',
      achievements: [
        'Reduced application load time by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers'
      ],
      logo: 'BC'
    },
    {
      id: 2,
      company: 'UMA Robotics',
      role: 'AI/ML Engineer',
      period: '2022 - 2023',
      description: 'Developed machine learning models for robotics applications with emphasis on computer vision and autonomous systems.',
      achievements: [
        'Built object detection system with 95% accuracy',
        'Optimized ML models for 20% faster inference',
        'Published research paper on autonomous navigation'
      ],
      logo: 'UR'
    },
    {
      id: 3,
      company: 'IIT-R Startup',
      role: 'Software Developer Intern',
      period: '2021 - 2022',
      description: 'Contributed to innovative startup projects focusing on educational technology and student engagement platforms.',
      achievements: [
        'Developed core features for learning management system',
        'Improved user engagement by 35%',
        'Collaborated with cross-functional teams'
      ],
      logo: 'IIT'
    }
  ];

  return (
    <section className={`py-20 bg-card/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
            Professional <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Building innovative solutions and driving impact across leading tech organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-card rounded-xl p-6 border border-brand-cyan/10 hover:border-brand-cyan/30 transition-all duration-250 hover:shadow-brand"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {exp.logo}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-brand-cyan font-semibold">{exp.company}</span>
                      <span className="text-text-muted">•</span>
                      <span className="text-sm text-text-secondary font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-text-secondary">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={20} className="text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-brand-cyan/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/experience"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card text-text-primary font-semibold rounded-lg border border-brand-cyan/30 hover:border-brand-cyan hover:bg-card/80 transition-all duration-250"
          >
            <span>View Full Experience</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;