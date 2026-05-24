import Icon from '@/components/ui/AppIcon';

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface LearningStatsProps {
  stats: Stat[];
}

export default function LearningStats({ stats }: LearningStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-subtle rounded-xl p-6 hover:shadow-brand transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 ${stat.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-250`}
            >
              <Icon name={stat.icon as any} size={24} className={stat.color} />
            </div>
          </div>
          <p className="text-3xl font-bold text-text-primary mb-2">{stat.value}</p>
          <p className="text-sm text-text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}