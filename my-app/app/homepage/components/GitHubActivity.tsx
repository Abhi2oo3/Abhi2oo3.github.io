'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface GitHubActivityProps {
  className?: string;
}

interface Activity {
  id: number;
  type: string;
  repo: string;
  message: string;
  time: string;
  icon: string;
}

const GitHubActivity = ({ className = '' }: GitHubActivityProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const activities: Activity[] = [
    {
      id: 1,
      type: 'commit',
      repo: 'portfolio-website',
      message: 'Added new project showcase section',
      time: '2 hours ago',
      icon: 'CodeBracketIcon'
    },
    {
      id: 2,
      type: 'pull_request',
      repo: 'ml-algorithms',
      message: 'Optimized neural network training',
      time: '5 hours ago',
      icon: 'ArrowPathIcon'
    },
    {
      id: 3,
      type: 'issue',
      repo: 'react-components',
      message: 'Fixed responsive design bug',
      time: '1 day ago',
      icon: 'BugAntIcon'
    },
    {
      id: 4,
      type: 'star',
      repo: 'awesome-nextjs',
      message: 'Starred repository',
      time: '2 days ago',
      icon: 'StarIcon'
    }
  ];

  const stats = {
    contributions: 847,
    repositories: 24,
    followers: 156,
    following: 89
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
            GitHub <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Activity</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-time contributions and open-source involvement
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border border-brand-cyan/10 text-center space-y-2">
              <div className="text-3xl font-bold text-brand-cyan">{stats.contributions}</div>
              <div className="text-sm text-text-secondary">Contributions</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-brand-green/10 text-center space-y-2">
              <div className="text-3xl font-bold text-brand-green">{stats.repositories}</div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-brand-purple/10 text-center space-y-2">
              <div className="text-3xl font-bold text-brand-purple">{stats.followers}</div>
              <div className="text-sm text-text-secondary">Followers</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-brand-orange/10 text-center space-y-2">
              <div className="text-3xl font-bold text-brand-orange">{stats.following}</div>
              <div className="text-sm text-text-secondary">Following</div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-brand-cyan/10 overflow-hidden">
            <div className="p-6 border-b border-brand-cyan/10">
              <h3 className="text-xl font-bold text-text-primary flex items-center space-x-2">
                <Icon name="ClockIcon" size={24} className="text-brand-cyan" />
                <span>Recent Activity</span>
              </h3>
            </div>

            <div className="divide-y divide-brand-cyan/10">
              {activities.map((activity) => (
                <div key={activity.id} className="p-6 hover:bg-muted/20 transition-colors duration-250">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-brand-cyan/10 rounded-lg">
                      <Icon name={activity.icon as any} size={20} className="text-brand-cyan" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-mono text-sm text-brand-cyan">{activity.repo}</span>
                        <span className="text-xs text-text-muted">•</span>
                        <span className="text-xs text-text-muted">{activity.type}</span>
                      </div>
                      <p className="text-text-secondary text-sm">{activity.message}</p>
                      {isHydrated && (
                        <span className="text-xs text-text-muted mt-1 block">{activity.time}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-muted/10 border-t border-brand-cyan/10">
              <a
                href="https://github.com/Abhi2oo3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-brand-cyan hover:text-brand-light-cyan transition-colors duration-250 font-semibold"
              >
                <span>View Full GitHub Profile</span>
                <Icon name="ArrowTopRightOnSquareIcon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;