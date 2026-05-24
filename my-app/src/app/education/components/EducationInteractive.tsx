'use client';

import { useState, useEffect } from 'react';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import CourseCard from './CourseCard';
import TimelineVisualization from './TimelineVisualization';
import LearningStats from './LearningStats';
import Icon from '@/components/ui/AppIcon';

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

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
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

interface TimelineItem {
  year: string;
  title: string;
  type: 'education' | 'certification' | 'course';
  institution: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export default function EducationInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'certifications' | 'courses'>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const educationData: Education[] = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology Roorkee (IIT-R)",
      location: "Roorkee, Uttarakhand, India",
      duration: "08/2018 - 05/2022",
      grade: "CGPA: 8.5/10.0",
      description: "Comprehensive computer science education with focus on algorithms, data structures, software engineering, and artificial intelligence. Active participant in IIT-R startup ecosystem and technical clubs.",
      highlights: [
        "Core coursework: Advanced Algorithms, Machine Learning, Database Systems, Computer Networks",
        "Participated in IIT-R E-Cell startup incubation program",
        "Member of Cognizance Technical Festival organizing committee",
        "Published research paper on AI-based women's safety systems"
      ],
      logo: "IIT",
      logoAlt: "IIT Roorkee logo with institutional colors"
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Delhi Public School",
      location: "New Delhi, India",
      duration: "04/2016 - 03/2018",
      grade: "Percentage: 92.4%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science. Strong foundation in analytical thinking and problem-solving.",
      highlights: [
        "Subjects: Mathematics, Physics, Chemistry, Computer Science, English",
        "School topper in Computer Science (98/100)",
        "Participated in National Science Olympiad",
        "Led school coding club and organized inter-school hackathon"
      ],
      logo: "DPS",
      logoAlt: "Delhi Public School emblem"
    }
  ];

  const certificationData: Certification[] = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      issueDate: "15/03/2023",
      credentialId: "AWS-CSA-2023-AB1234",
      verificationUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      logo: "AWS",
      logoAlt: "Amazon Web Services certification badge"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      issueDate: "22/08/2023",
      credentialId: "GCP-PDE-2023-XY5678",
      verificationUrl: "https://cloud.google.com/certification/verify",
      skills: ["BigQuery", "Data Pipeline", "ML Engineering", "Data Governance"],
      logo: "GCP",
      logoAlt: "Google Cloud Platform certification emblem"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow Certificate Program",
      issueDate: "10/11/2022",
      credentialId: "TF-DEV-2022-CD9012",
      verificationUrl: "https://tensorflow.org/certificate/verify",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
      logo: "TF",
      logoAlt: "TensorFlow developer certification badge"
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      issueDate: "05/06/2023",
      credentialId: "MDB-DEV-2023-EF3456",
      verificationUrl: "https://university.mongodb.com/verify",
      skills: ["NoSQL", "Database Design", "Aggregation", "Performance Tuning"],
      logo: "MDB",
      logoAlt: "MongoDB certification emblem"
    }
  ];

  const courseData: Course[] = [
    {
      title: "Machine Learning Specialization",
      platform: "Coursera (Stanford University)",
      instructor: "Andrew Ng",
      duration: "3 months",
      completionDate: "20/09/2022",
      topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Best Practices"],
      projectTitle: "House Price Prediction Model",
      projectDescription: "Built a regression model using scikit-learn to predict house prices based on multiple features. Achieved 92% accuracy through feature engineering and hyperparameter tuning."
    },
    {
      title: "Full Stack Web Development Bootcamp",
      platform: "Udemy",
      instructor: "Angela Yu",
      duration: "2 months",
      completionDate: "15/05/2021",
      topics: ["React", "Node.js", "MongoDB", "REST APIs", "Authentication"],
      projectTitle: "E-commerce Platform",
      projectDescription: "Developed a complete e-commerce application with user authentication, product catalog, shopping cart, and payment integration using MERN stack."
    },
    {
      title: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      duration: "1 month",
      completionDate: "10/02/2023",
      topics: ["Hooks", "Context API", "Performance Optimization", "Testing"],
      projectTitle: "Component Library",
      projectDescription: "Created a reusable component library with advanced patterns including compound components, render props, and custom hooks for state management."
    },
    {
      title: "Docker and Kubernetes: The Complete Guide",
      platform: "Udemy",
      instructor: "Stephen Grider",
      duration: "6 weeks",
      completionDate: "28/07/2023",
      topics: ["Containerization", "Orchestration", "CI/CD", "Microservices"],
      projectTitle: "Microservices Deployment",
      projectDescription: "Containerized a multi-service application and deployed it on Kubernetes cluster with automated CI/CD pipeline using GitHub Actions."
    }
  ];

  const timelineData: TimelineItem[] = [
    { year: "2023", title: "AWS Solutions Architect", type: "certification", institution: "Amazon Web Services" },
    { year: "2023", title: "Docker & Kubernetes Guide", type: "course", institution: "Udemy" },
    { year: "2023", title: "MongoDB Developer", type: "certification", institution: "MongoDB University" },
    { year: "2023", title: "Advanced React Patterns", type: "course", institution: "Frontend Masters" },
    { year: "2022", title: "TensorFlow Developer", type: "certification", institution: "TensorFlow" },
    { year: "2022", title: "ML Specialization", type: "course", institution: "Stanford/Coursera" },
    { year: "2022", title: "B.Tech Computer Science", type: "education", institution: "IIT Roorkee" },
    { year: "2021", title: "Full Stack Bootcamp", type: "course", institution: "Udemy" },
    { year: "2018", title: "Higher Secondary", type: "education", institution: "Delhi Public School" }
  ];

  const statsData: Stat[] = [
    { label: "Degrees Earned", value: "2", icon: "AcademicCapIcon", color: "text-brand-cyan" },
    { label: "Certifications", value: "4", icon: "CheckBadgeIcon", color: "text-brand-purple" },
    { label: "Courses Completed", value: "4", icon: "BookOpenIcon", color: "text-brand-orange" },
    { label: "Learning Hours", value: "500+", icon: "ClockIcon", color: "text-brand-green" }
  ];

  const filteredContent = () => {
    switch (activeTab) {
      case 'education':
        return educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ));
      case 'certifications':
        return certificationData.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ));
      case 'courses':
        return courseData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ));
      default:
        return (
          <>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Icon name="AcademicCapIcon" size={28} className="text-brand-cyan" />
                Academic Education
              </h3>
              {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Icon name="CheckBadgeIcon" size={28} className="text-brand-purple" />
                Professional Certifications
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {certificationData.map((cert, index) => (
                  <CertificationCard key={index} {...cert} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Icon name="BookOpenIcon" size={28} className="text-brand-orange" />
                Continuous Learning Courses
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {courseData.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </div>
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
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Learning Journey Timeline</h2>
            <p className="text-text-secondary mb-8">
              A chronological view of my educational milestones, professional certifications, and continuous learning achievements.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <TimelineVisualization items={timelineData} />
          </div>
        </div>
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
            {(['all', 'education', 'certifications', 'courses'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
                  activeTab === tab
                    ? 'bg-brand-cyan text-brand-cyan-foreground shadow-brand'
                    : 'bg-card text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredContent()}
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-cyan/10 via-brand-purple/10 to-brand-orange/10 rounded-2xl p-8 border border-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <Icon name="SparklesIcon" size={48} className="text-brand-cyan mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-4">Continuous Learning Mindset</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Technology evolves rapidly, and so do I. My commitment to continuous learning ensures I stay at the forefront of industry trends, emerging technologies, and best practices. Every certification, course, and project represents not just knowledge gained, but a dedication to excellence and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
              <Icon name="TrophyIcon" size={20} className="text-brand-green" />
              <span className="text-sm text-text-primary font-medium">4 Active Certifications</span>
            </div>
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
      </section>
    </div>
  );
}