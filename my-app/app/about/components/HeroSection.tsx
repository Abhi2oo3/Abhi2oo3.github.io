//import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  profile: {
    name: string;
    tagline: string;
    image: string;
    alt: string;
    mission: string;
  };
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-purple/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <code className="text-sm font-mono text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-md border border-brand-cyan/20">
                {'<Developer />'}
              </code>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary">
              {profile.name}
            </h1>
            
            <p className="text-xl sm:text-2xl text-brand-light-cyan font-medium">
              {profile.tagline}
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              {profile.mission}
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-card border border-brand-cyan/20 rounded-lg">
                <span className="text-sm text-text-muted">Focus:</span>
                <span className="ml-2 text-sm font-semibold text-brand-cyan">AI/ML Solutions</span>
              </div>
              <div className="px-4 py-2 bg-card border border-brand-green/20 rounded-lg">
                <span className="text-sm text-text-muted">Impact:</span>
                <span className="ml-2 text-sm font-semibold text-brand-green">Social Innovation</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 blur-3xl"></div>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-brand-cyan/30 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 border-2 border-brand-purple/30 rounded-2xl transform -rotate-6"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-brand-light-cyan/50 shadow-brand">
                <img
                  src={profile.image}
                  alt={profile.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}