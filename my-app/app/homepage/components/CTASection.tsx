import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-card via-background to-card ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
              Let's Build Something <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Amazing Together</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and explore new opportunities. Whether you're looking for a developer, consultant, or technical partner, let's connect!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-brand-purple text-brand-pink-foreground font-bold rounded-lg hover:bg-brand-pink/90 transition-all duration-250 hover:shadow-brand hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <Icon name="PaperAirplaneIcon" size={20} className="group-hover:translate-x-1 transition-transform duration-250" />
            </Link>

            <a
              href="/assets/Abhishek_Dixit_Resume.pdf"
              download
              className="px-8 py-4 bg-card text-text-primary font-bold rounded-lg border-2 border-brand-cyan hover:bg-card/80 hover:border-brand-light-cyan transition-all duration-250 flex items-center space-x-2"
            >
              <Icon name="DocumentArrowDownIcon" size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default CTASection;