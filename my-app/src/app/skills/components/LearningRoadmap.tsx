interface RoadmapItem {
  technology: string;
  progress: number;
  targetDate: string;
  reason: string;
}

interface LearningRoadmapProps {
  roadmapItems: RoadmapItem[];
}

const LearningRoadmap = ({ roadmapItems }: LearningRoadmapProps) => {
  return (
    <div className="bg-card border border-subtle rounded-xl p-6">
      <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
        <span className="mr-2">🎯</span>
        Learning Roadmap 2025
      </h3>
      
      <div className="space-y-4">
        {roadmapItems.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-text-primary group-hover:text-brand-purple transition-colors duration-250">
                  {item.technology}
                </h4>
                <p className="text-xs text-text-secondary mt-1">{item.reason}</p>
              </div>
              <span className="text-xs text-text-muted ml-4 whitespace-nowrap">
                Target: {item.targetDate}
              </span>
            </div>
            
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-text-muted">{item.progress}% Complete</span>
              {item.progress === 100 && (
                <span className="text-xs text-brand-green">✓ Completed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningRoadmap;