'use client';

import { useState, useEffect } from 'react';
import EducationCard from './EducationCard';
import CourseCard from './CourseCard';
import LearningStats from './LearningStats';
import Icon from '@/components/ui/AppIcon';
import { motion } from 'framer-motion';
import Timeline3D from '@/components/three/Timeline3D';

interface Education {
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

interface Course {
  title: string;
  platform: string;
  instructor: string;
  duration: string;
  completionDate: string;
  topics: string[];
  projectTitle?: string;
  projectDescription?: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export default function EducationInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'courses'>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const educationData: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Roorkee College of Engineering",
    location: "Roorkee, Uttarakhand, India",
    duration: "Aug 2021 – May 2025",
    grade: "Aggregate: 75%",
    description:
      "Rigorous training in core computer systems engineering, database design, software architectures, and automated algorithms. Blended solid computer science fundamentals with hands-on application pipelines.",
    highlights: [
      "Advanced Data Structures & Algorithms",
      "Database Management Systems (PostgreSQL/MySQL)",
      "Object-Oriented Analysis & Design Patterns",
      "High-Performance Backend System Implementations"
    ],
    logo: "/assets/images/rce.jpg",
    logoAlt: "Roorkee College of Engineering logo"
  }
];

  const courseData: Course[] = [
    {
      title: "Machine Learning Specialization",
      platform: "Coursera (Stanford University)",
      instructor: "Andrew Ng",
      duration: "3 months",
      completionDate: "September 2022",
      topics: ["Supervised Regressions", "Neural Networks", "Unsupervised Vector Clustering", "ML Ops Best Practices"],
      projectTitle: "Predictive Telemetry Classification Model",
      projectDescription: "Built a diagnostic classification model using scikit-learn to classify system performance spikes. Achieved 92.4% validation accuracy through custom feature engineering and model tuning."
    },
    {
      title: "Docker and Kubernetes: The Complete Guide",
      platform: "Udemy",
      instructor: "Stephen Grider",
      duration: "6 weeks",
      completionDate: "July 2023",
      topics: ["Container Ingestion", "Kubernetes Pod Orchestration", "CI/CD Workflows", "Microservices Networking"],
      projectTitle: "Orchestrated Telemetry Pipeline",
      projectDescription: "Containerized a multi-service telemetry data cleaning pipeline and deployed it on local K8s clusters, optimizing scaling thresholds and setting up Automated Git Actions CI."
    }
  ];

  const statsData: Stat[] = [
    { label: "Engineering Degrees", value: "1", icon: "AcademicCapIcon", color: "text-brand-cyan" },
    { label: "Core Specializations", value: "2", icon: "BookOpenIcon", color: "text-brand-orange" },
    { label: "Systems Training Hours", value: "300+", icon: "ClockIcon", color: "text-brand-green" }
  ];

  const filteredContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* 3D Timeline */}
            <Timeline3D events={educationData.length} />
            
            <div className="space-y-8 pl-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EducationCard {...edu} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'courses':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {courseData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2 mb-6">
                <Icon name="AcademicCapIcon" size={28} className="text-brand-cyan" />
                Academic Education
              </h3>
              
              {/* 3D Timeline for education */}
              <div className="relative">
                <Timeline3D events={educationData.length} />
                
                <div className="space-y-8 pl-12">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <EducationCard {...edu} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2 mb-6">
                <Icon name="BookOpenIcon" size={28} className="text-brand-orange" />
                Continuous Learning Courses
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {courseData.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        );
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-card rounded-lg w-3/4"></div>
              <div className="h-6 bg-card rounded-lg w-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-64 bg-card rounded-xl"></div>
                <div className="h-64 bg-card rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <section>
        <LearningStats stats={statsData} />
      </section>

      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-2">Education & Credentials</h2>
            <p className="text-text-secondary">
              Comprehensive view of academic achievements and professional development
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', 'education', 'courses'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
                  activeTab === tab
                    ? 'bg-brand-cyan text-brand-cyan-foreground shadow-brand'
                    : 'bg-card text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredContent()}
        </div>
      </section>

      <motion.section 
        className="bg-gradient-to-r from-brand-cyan/10 via-brand-purple/10 to-brand-orange/10 rounded-2xl p-8 border border-subtle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Icon name="SparklesIcon" size={48} className="text-brand-cyan mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-4">Continuous Learning Mindset</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Technology evolves rapidly, and so do I. My commitment to continuous learning ensures I stay at the forefront of industry trends, emerging technologies, and best practices. Every certification, course, and project represents not just knowledge gained, but a dedication to excellence and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
              <Icon name="FireIcon" size={20} className="text-brand-orange" />
              <span className="text-sm text-text-primary font-medium">500+ Learning Hours</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
              <Icon name="RocketLaunchIcon" size={20} className="text-brand-purple" />
              <span className="text-sm text-text-primary font-medium">Always Growing</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}