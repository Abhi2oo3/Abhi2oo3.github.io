'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  color: string;
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Stat[] = [
    { value: 50, suffix: '+', label: 'Projects Completed', icon: 'CheckBadgeIcon', color: 'text-brand-cyan' },
    { value: 15, suffix: '+', label: 'Technologies Mastered', icon: 'CommandLineIcon', color: 'text-brand-purple' },
    { value: 5, suffix: '+', label: 'Years Experience', icon: 'ClockIcon', color: 'text-brand-pink' },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: 'HeartIcon', color: 'text-brand-green' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(Math.floor(increment * currentStep), stat.value);
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center scroll-scale-in ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div className="relative group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border border-brand-cyan/20 mb-4 ${stat.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 hover-glow`}>
                  <Icon name={stat.icon as any} size={32} className="animate-float" />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-4xl sm:text-5xl font-bold ${stat.color} text-neon`}>
                    {counters[index]}
                    <span className="text-3xl">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;