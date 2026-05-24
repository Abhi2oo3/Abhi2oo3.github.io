interface Resource {
  title: string;
  type: string;
  platform: string;
  url: string;
  category: string;
}

interface LearningResourcesProps {
  resources: Resource[];
}

const LearningResources = ({ resources }: LearningResourcesProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course':
        return '📚';
      case 'Book':
        return '📖';
      case 'Video':
        return '🎥';
      case 'Article':
        return '📝';
      default:
        return '🔗';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-brand-purple to-brand-pink';
      case 'Full-Stack':
        return 'from-brand-cyan to-brand-light-cyan';
      case 'Cloud':
        return 'from-brand-green to-brand-orange';
      default:
        return 'from-brand-cyan to-brand-purple';
    }
  };

  return (
    <div className="bg-card border border-subtle rounded-xl p-6">
      <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
        <span className="mr-2">📚</span>
        Recommended Learning Resources
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-250 hover:shadow-brand"
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl flex-shrink-0">{getTypeIcon(resource.type)}</span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-text-primary group-hover:text-brand-cyan transition-colors duration-250 line-clamp-2">
                  {resource.title}
                </h4>
                <p className="text-xs text-text-secondary mt-1">{resource.platform}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs px-2 py-0.5 bg-muted rounded text-text-muted">
                    {resource.type}
                  </span>
                  <span className={`text-xs px-2 py-0.5 bg-gradient-to-r ${getCategoryColor(resource.category)} text-white rounded`}>
                    {resource.category}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LearningResources;