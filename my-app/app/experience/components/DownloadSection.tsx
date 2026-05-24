'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DownloadItem {
  title: string;
  description: string;
  icon: string;
  fileSize: string;
  format: string;
}

interface DownloadSectionProps {
  downloads: DownloadItem[];
}

const DownloadSection = ({ downloads }: DownloadSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card border border-subtle rounded-xl p-6">
        <div className="h-6 bg-muted rounded w-1/3 animate-pulse mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-24 bg-muted rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  const handleDownload = (title: string) => {
    // Create a link element
    const link = document.createElement('a');
    // Set the path to the resume file
    link.href = '/assets/Abhishek_Dixit_Resume.pdf';
    // Set the download attribute with a filename
    link.download = 'Abhishek_Dixit_Resume.pdf';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="bg-card border border-subtle rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="DocumentArrowDownIcon" size={24} className="text-brand-orange" />
        <h3 className="text-xl font-semibold text-text-primary">Download Resources</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="bg-muted/50 border border-subtle rounded-lg p-4 hover:border-brand-cyan/50 transition-all duration-250 group"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-brand-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as any} size={20} className="text-brand-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                <p className="text-xs text-text-secondary">{item.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{item.format}</span>
                <span>•</span>
                <span>{item.fileSize}</span>
              </div>
              <button
                onClick={() => handleDownload(item.title)}
                className="px-3 py-1.5 bg-brand-cyan text-brand-cyan-foreground rounded-lg text-xs font-medium hover:bg-brand-cyan/90 transition-all duration-250 flex items-center gap-1 group-hover:shadow-brand"
              >
                <Icon name="ArrowDownTrayIcon" size={14} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;