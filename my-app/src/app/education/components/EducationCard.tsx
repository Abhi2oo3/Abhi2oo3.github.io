interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
  highlights: string[];
  logo: string;
  logoAlt: string;
}

export default function EducationCard({
  degree,
  institution,
  location,
  duration,
  grade,
  description,
  highlights,
  logo,
  logoAlt,
}: EducationCardProps) {
  return (
    <div className="bg-card border border-subtle rounded-xl p-6 hover:shadow-brand transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/10 transition-colors duration-300">
          <span className="text-2xl font-bold text-brand-cyan">{logo}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-text-primary mb-1 group-hover:text-brand-cyan transition-colors duration-250">
            {degree}
          </h3>
          <p className="text-text-secondary font-medium mb-1">{institution}</p>
          <p className="text-sm text-text-muted">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4 text-sm">
        <span className="text-text-secondary">{duration}</span>
        <span className="text-brand-green font-semibold">{grade}</span>
      </div>
      
      <p className="text-text-secondary mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-2">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-brand-cyan mt-1">▹</span>
            <span className="text-sm text-text-secondary">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}