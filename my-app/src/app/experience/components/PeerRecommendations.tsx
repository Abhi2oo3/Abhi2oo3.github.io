'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Recommendation {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  recommendation: string;
  relationship: string;
}

interface PeerRecommendationsProps {
  recommendations: Recommendation[];
}

const PeerRecommendations = ({ recommendations }: PeerRecommendationsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card border border-subtle rounded-xl p-6">
        <div className="h-6 bg-muted rounded w-1/3 animate-pulse mb-4"></div>
        <div className="h-40 bg-muted rounded animate-pulse"></div>
      </div>
    );
  }

  const nextRecommendation = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const currentRec = recommendations[currentIndex];

  return (
    <div className="bg-card border border-subtle rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-brand-green" />
        <h3 className="text-xl font-semibold text-text-primary">Peer Recommendations</h3>
      </div>

      <div className="relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-cyan">
            <AppImage
              src={currentRec.image}
              alt={currentRec.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-text-primary">{currentRec.name}</h4>
            <p className="text-sm text-brand-cyan">{currentRec.role}</p>
            <p className="text-xs text-text-secondary">{currentRec.company}</p>
            <span className="inline-block mt-1 px-2 py-1 bg-brand-purple/20 text-brand-purple text-xs rounded-full">
              {currentRec.relationship}
            </span>
          </div>
        </div>

        <div className="relative mb-4">
          <Icon name="ChatBubbleLeftIcon" size={32} className="absolute -top-2 -left-2 text-brand-cyan/20" />
          <p className="text-text-secondary leading-relaxed pl-6 italic">
            "{currentRec.recommendation}"
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {recommendations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-250 ${
                  idx === currentIndex ? 'bg-brand-cyan w-6' : 'bg-muted'
                }`}
                aria-label={`Go to recommendation ${idx + 1}`}
              ></button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevRecommendation}
              className="p-2 bg-muted hover:bg-brand-cyan/20 rounded-lg transition-colors duration-250"
              aria-label="Previous recommendation"
            >
              <Icon name="ChevronLeftIcon" size={20} className="text-text-secondary" />
            </button>
            <button
              onClick={nextRecommendation}
              className="p-2 bg-muted hover:bg-brand-cyan/20 rounded-lg transition-colors duration-250"
              aria-label="Next recommendation"
            >
              <Icon name="ChevronRightIcon" size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerRecommendations;