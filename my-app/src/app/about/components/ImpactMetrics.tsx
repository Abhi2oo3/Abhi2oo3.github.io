'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
}

export default function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const initialCounts: Record<number, number> = {};
    metrics.forEach(metric => {
      initialCounts[metric.id] = 0;
    });
    setCounts(initialCounts);

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        let allComplete = true;

        metrics.forEach(metric => {
          if (newCounts[metric.id] < metric.value) {
            const increment = Math.ceil(metric.value / steps);
            newCounts[metric.id] = Math.min(
              newCounts[metric.id] + increment,
              metric.value
            );
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isHydrated, metrics]);

  if (!isHydrated) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Impact & Achievements
            </h2>
            <p className="text-lg text-text-secondary">
              Measurable results from projects and professional work
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-card border border-subtle rounded-xl p-6 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={metric.icon as any} size={28} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-text-primary mb-2">
                  0{metric.suffix}
                </div>
                <p className="text-sm text-text-secondary">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Impact & Achievements
          </h2>
          <p className="text-lg text-text-secondary">
            Measurable results from projects and professional work
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group bg-card border border-subtle rounded-xl p-6 text-center hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-brand hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric.icon as any} size={28} className="text-white" />
              </div>
              
              <div className="text-4xl font-bold text-text-primary mb-2">
                {counts[metric.id] || 0}{metric.suffix}
              </div>
              
              <p className="text-sm text-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}