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
              className="group px-8 py-4 bg-brand-pink text-brand-pink-foreground font-bold rounded-lg hover:bg-brand-pink/90 transition-all duration-250 hover:shadow-brand hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <Icon name="PaperAirplaneIcon" size={20} className="group-hover:translate-x-1 transition-transform duration-250" />
            </Link>

            <a
              href="/assets/resume.pdf"
              download
              className="px-8 py-4 bg-card text-text-primary font-bold rounded-lg border-2 border-brand-cyan hover:bg-card/80 hover:border-brand-light-cyan transition-all duration-250 flex items-center space-x-2"
            >
              <Icon name="DocumentArrowDownIcon" size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="pt-8 border-t border-brand-cyan/10">
            <p className="text-sm text-text-muted mb-4">Connect with me on</p>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-muted rounded-lg transition-all duration-250 hover:shadow-brand group"
                aria-label="GitHub Profile"
              >
                <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6 text-text-secondary group-hover:text-brand-cyan transition-colors duration-250" />
              </a>
              <a
                href="https://linkedin.com/in/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-muted rounded-lg transition-all duration-250 hover:shadow-brand group"
                aria-label="LinkedIn Profile"
              >
                <Icon name="UserCircleIcon" size={24} className="text-text-secondary group-hover:text-brand-light-cyan transition-colors duration-250" />
              </a>
              <a
                href="https://twitter.com/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-muted rounded-lg transition-all duration-250 hover:shadow-brand group"
                aria-label="Twitter Profile"
              >
                <Icon name="AtSymbolIcon" size={24} className="text-text-secondary group-hover:text-brand-purple transition-colors duration-250" />
              </a>
              <a
                href="mailto:abhishek@example.com"
                className="p-3 bg-card hover:bg-muted rounded-lg transition-all duration-250 hover:shadow-brand group"
                aria-label="Email Contact"
              >
                <Icon name="EnvelopeIcon" size={24} className="text-text-secondary group-hover:text-brand-orange transition-colors duration-250" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;