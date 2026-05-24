import AppImage from '@/components/ui/AppImage';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  alt: string;
  credentialUrl: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <div className="bg-card border border-subtle rounded-xl overflow-hidden hover:shadow-brand transition-all duration-300 group">
      <div className="relative h-40 overflow-hidden bg-muted">
        <AppImage
          src={certification.image}
          alt={certification.alt}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h4 className="text-sm font-semibold text-text-primary mb-1 line-clamp-2">
          {certification.name}
        </h4>
        <p className="text-xs text-text-secondary mb-2">{certification.issuer}</p>
        <p className="text-xs text-text-muted mb-3">{certification.date}</p>
        
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-brand-cyan hover:text-brand-light-cyan transition-colors duration-250"
        >
          View Credential
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;