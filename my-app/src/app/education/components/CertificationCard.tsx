'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CertificationCardProps {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
  logo: string;
  logoAlt: string;
}

export default function CertificationCard({
  title,
  issuer,
  issueDate,
  credentialId,
  verificationUrl,
  skills,
  logo,
  logoAlt,
}: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-subtle rounded-xl p-6 hover:shadow-brand transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold text-brand-purple">{logo}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1">{title}</h3>
            <p className="text-text-secondary text-sm">{issuer}</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-muted rounded-lg transition-colors duration-250"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <Icon
            name="ChevronDownIcon"
            size={20}
            className={`text-text-secondary transition-transform duration-250 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
        <Icon name="CalendarIcon" size={16} />
        <span>Issued: {issueDate}</span>
      </div>

      {isExpanded && (
        <div className="space-y-4 animate-slide-up">
          <div className="pt-4 border-t border-subtle">
            <p className="text-sm text-text-muted mb-2">Credential ID</p>
            <code className="text-xs text-brand-light-cyan bg-muted px-3 py-1 rounded font-mono">
              {credentialId}
            </code>
          </div>

          <div>
            <p className="text-sm text-text-muted mb-2">Skills Covered</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan text-brand-cyan-foreground rounded-lg hover:bg-brand-light-cyan transition-colors duration-250 text-sm font-medium"
          >
            <Icon name="CheckBadgeIcon" size={16} />
            Verify Credential
          </a>
        </div>
      )}
    </div>
  );
}