import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedProjectsProps {
  className?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  impact: string;
  link: string;
}

const FeaturedProjects = ({ className = '' }: FeaturedProjectsProps) => {
  const projects: Project[] = [
  {
    id: 1,
    title: 'Women Safety System',
    description: 'AI-powered safety application with real-time location tracking, emergency alerts, and ML-based threat detection to ensure women\'s security.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1db2b15b2-1763658663980.png",
    alt: 'Woman using smartphone with safety app interface showing emergency alert button and location tracking',
    tags: ['AI/ML', 'React Native', 'Firebase', 'TensorFlow'],
    impact: 'Enhanced safety for 1000+ users',
    link: '/projects'
  },
  {
    id: 2,
    title: 'Cricket Analytics Platform',
    description: 'Comprehensive cricket statistics and analytics platform with real-time match updates, player performance tracking, and predictive modeling.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18eecaa05-1763658663460.png",
    alt: 'Cricket stadium with digital scoreboard displaying live match statistics and player analytics',
    tags: ['Next.js', 'Python', 'Data Analytics', 'REST API'],
    impact: '20% faster data processing',
    link: '/projects'
  },
  {
    id: 3,
    title: 'E-Commerce Optimization',
    description: 'Full-stack e-commerce solution with advanced search algorithms, personalized recommendations, and seamless payment integration.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14c87728c-1763658662733.png",
    alt: 'Modern e-commerce dashboard showing sales analytics graphs and customer behavior metrics',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    impact: '40% bounce rate reduction',
    link: '/projects'
  }];


  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
            Featured <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Transforming ideas into impactful solutions through innovative technology and user-centric design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) =>
          <Link
            key={project.id}
            href={project.link}
            className="group block bg-card rounded-2xl overflow-hidden border border-brand-cyan/10 hover:border-brand-cyan/30 transition-all duration-250 hover:shadow-brand hover:-translate-y-2">

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-cyan transition-colors duration-250">
                  {project.title}
                </h3>
                
                <p className="text-sm text-text-secondary line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) =>
                <span
                  key={index}
                  className="text-xs font-mono px-3 py-1 bg-brand-cyan/10 text-brand-cyan rounded-full border border-brand-cyan/20">

                      {tag}
                    </span>
                )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brand-cyan/10">
                  <span className="text-xs text-brand-green font-semibold flex items-center space-x-1">
                    <Icon name="CheckCircleIcon" size={16} />
                    <span>{project.impact}</span>
                  </span>
                  
                  <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className="text-brand-cyan group-hover:translate-x-2 transition-transform duration-250" />

                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card text-text-primary font-semibold rounded-lg border border-brand-cyan/30 hover:border-brand-cyan hover:bg-card/80 transition-all duration-250">

            <span>View All Projects</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;