interface TimelineItem {
  year: string;
  title: string;
  type: 'education' | 'certification' | 'course';
  institution: string;
}

interface TimelineVisualizationProps {
  items: TimelineItem[];
}

export default function TimelineVisualization({ items }: TimelineVisualizationProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-brand-cyan';
      case 'certification':
        return 'bg-brand-purple';
      case 'course':
        return 'bg-brand-orange';
      default:
        return 'bg-brand-cyan';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education':
        return 'Degree';
      case 'certification':
        return 'Certification';
      case 'course':
        return 'Course';
      default:
        return 'Learning';
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-orange"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-20">
            <div className="absolute left-0 top-0">
              <div className="w-16 h-16 bg-card border-2 border-subtle rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-text-primary">{item.year}</span>
              </div>
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${getTypeColor(
                  item.type
                )} rounded-full`}
              ></div>
            </div>

            <div className="bg-card border border-subtle rounded-lg p-4 hover:shadow-brand transition-all duration-300">
              <span
                className={`inline-block px-2 py-1 ${getTypeColor(
                  item.type
                )}/10 text-xs rounded mb-2`}
                style={{ color: `var(--color-brand-${item.type === 'education' ? 'cyan' : item.type === 'certification' ? 'purple' : 'orange'})` }}
              >
                {getTypeLabel(item.type)}
              </span>
              <h4 className="text-md font-semibold text-text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}