import Icon from '@/components/ui/AppIcon';

interface CoreValue {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface CoreValuesSectionProps {
  values: CoreValue[];
}

export default function CoreValuesSection({ values }: CoreValuesSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Core Values
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The principles that guide my approach to software development and problem-solving
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="group relative bg-card border border-subtle rounded-xl p-6 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-brand hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={value.icon as any} size={24} className="text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}