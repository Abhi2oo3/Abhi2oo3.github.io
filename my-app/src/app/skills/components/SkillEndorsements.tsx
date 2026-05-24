import AppImage from '@/components/ui/AppImage';

interface Endorsement {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  skill: string;
  quote: string;
}

interface SkillEndorsementsProps {
  endorsements: Endorsement[];
}

const SkillEndorsements = ({ endorsements }: SkillEndorsementsProps) => {
  return (
    <div className="bg-card border border-subtle rounded-xl p-6">
      <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
        <span className="mr-2">💬</span>
        Skill Endorsements
      </h3>
      
      <div className="space-y-4">
        {endorsements.map((endorsement, index) => (
          <div key={index} className="flex space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-250">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-cyan/30">
                <AppImage
                  src={endorsement.image}
                  alt={endorsement.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h4 className="text-sm font-medium text-text-primary">{endorsement.name}</h4>
                  <p className="text-xs text-text-secondary">{endorsement.role} at {endorsement.company}</p>
                </div>
                <span className="text-xs px-2 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full whitespace-nowrap ml-2">
                  {endorsement.skill}
                </span>
              </div>
              <p className="text-xs text-text-secondary italic mt-2">"{endorsement.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillEndorsements;