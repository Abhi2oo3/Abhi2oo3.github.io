import Icon from '@/components/ui/AppIcon';

interface Philosophy {
  id: number;
  title: string;
  description: string;
  principles: string[];
}

interface TechnicalPhilosophyProps {
  philosophies: Philosophy[];
}

export default function TechnicalPhilosophy({ philosophies }: TechnicalPhilosophyProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Technical Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My approach to building software that creates meaningful impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {philosophies.map((philosophy) => (
            <div
              key={philosophy.id}
              className="bg-card border border-subtle rounded-xl p-8 hover:border-brand-purple/50 transition-all duration-300 hover:shadow-brand"
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                {philosophy.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {philosophy.description}
              </p>
              
              <div className="space-y-3">
                {philosophy.principles.map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="CheckIcon" size={14} className="text-brand-purple" />
                    </div>
                    <p className="text-sm text-text-secondary flex-1">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}