import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-cyan/10 via-brand-purple/10 to-brand-pink/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
          Let&apos;s Build Something Amazing Together
        </h2>
        
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          Whether you&apos;re looking for a developer who can bring innovative solutions to your team, or you have a project that needs technical expertise with social impact, I&apos;d love to connect.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-cyan text-brand-cyan-foreground font-semibold rounded-lg hover:bg-brand-cyan/90 transition-all duration-300 hover:shadow-brand hover:-translate-y-0.5"
          >
            <Icon name="CodeBracketIcon" size={20} />
            View My Projects
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-lg hover:bg-brand-pink/90 transition-all duration-300 hover:shadow-brand hover:-translate-y-0.5"
          >
            <Icon name="EnvelopeIcon" size={20} />
            Get In Touch
          </Link>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-brand-cyan/30 text-text-primary font-semibold rounded-lg hover:border-brand-cyan/50 hover:bg-card/80 transition-all duration-300"
          >
            <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-5 h-5" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}