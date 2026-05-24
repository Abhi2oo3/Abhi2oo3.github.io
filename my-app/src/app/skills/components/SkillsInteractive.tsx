'use client';

import { useState, useEffect } from 'react';
import SkillCategory from './SkillCategory';
import CertificationCard from './CertificationCard';
import LearningRoadmap from './LearningRoadmap';
import SkillEndorsements from './SkillEndorsements';
import LearningResources from './LearningResources';

interface Skill {
  name: string;
  level: number;
  description: string;
  projects: string[];
  yearsOfExperience: number;
}

interface SkillCategoryData {
  title: string;
  skills: Skill[];
  color: string;
  icon: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  alt: string;
  credentialUrl: string;
}

interface RoadmapItem {
  technology: string;
  progress: number;
  targetDate: string;
  reason: string;
}

interface Endorsement {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  skill: string;
  quote: string;
}

interface Resource {
  title: string;
  type: string;
  platform: string;
  url: string;
  category: string;
}

const SkillsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skillCategories: SkillCategoryData[] = [
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    color: "from-brand-purple to-brand-pink",
    skills: [
    {
      name: "TensorFlow",
      level: 85,
      description: "Deep learning model development and deployment",
      projects: ["Women Safety System", "Predictive Analytics"],
      yearsOfExperience: 2
    },
    {
      name: "PyTorch",
      level: 80,
      description: "Neural network architecture and training",
      projects: ["Image Recognition", "NLP Models"],
      yearsOfExperience: 2
    },
    {
      name: "Scikit-learn",
      level: 90,
      description: "Classical ML algorithms and data preprocessing",
      projects: ["Data Analysis", "Classification Models"],
      yearsOfExperience: 3
    },
    {
      name: "Natural Language Processing",
      level: 75,
      description: "Text analysis and language model implementation",
      projects: ["Sentiment Analysis", "Chatbot Development"],
      yearsOfExperience: 1
    }]

  },
  {
    title: "Full-Stack Development",
    icon: "💻",
    color: "from-brand-cyan to-brand-light-cyan",
    skills: [
    {
      name: "React.js",
      level: 95,
      description: "Modern web applications with hooks and context",
      projects: ["Cricket App", "Portfolio Website"],
      yearsOfExperience: 3
    },
    {
      name: "Next.js",
      level: 90,
      description: "Server-side rendering and static site generation",
      projects: ["E-commerce Platform", "Blog System"],
      yearsOfExperience: 2
    },
    {
      name: "Node.js",
      level: 88,
      description: "RESTful APIs and backend services",
      projects: ["Authentication System", "Data Processing"],
      yearsOfExperience: 3
    },
    {
      name: "TypeScript",
      level: 85,
      description: "Type-safe application development",
      projects: ["Enterprise Applications", "API Development"],
      yearsOfExperience: 2
    },
    {
      name: "Python",
      level: 92,
      description: "Backend development and data science",
      projects: ["ML Pipelines", "Web Scraping"],
      yearsOfExperience: 4
    }]

  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "from-brand-green to-brand-orange",
    skills: [
    {
      name: "AWS",
      level: 80,
      description: "EC2, S3, Lambda, and cloud architecture",
      projects: ["Scalable Web Apps", "Data Storage"],
      yearsOfExperience: 2
    },
    {
      name: "Docker",
      level: 85,
      description: "Containerization and orchestration",
      projects: ["Microservices", "CI/CD Pipelines"],
      yearsOfExperience: 2
    },
    {
      name: "Git & GitHub",
      level: 95,
      description: "Version control and collaborative development",
      projects: ["All Projects", "Open Source"],
      yearsOfExperience: 4
    },
    {
      name: "CI/CD",
      level: 75,
      description: "Automated testing and deployment pipelines",
      projects: ["Production Deployments", "Testing Automation"],
      yearsOfExperience: 1
    }]

  },
  {
    title: "Database & Backend",
    icon: "🗄️",
    color: "from-brand-orange to-brand-pink",
    skills: [
    {
      name: "MongoDB",
      level: 88,
      description: "NoSQL database design and optimization",
      projects: ["User Management", "Content Systems"],
      yearsOfExperience: 3
    },
    {
      name: "PostgreSQL",
      level: 82,
      description: "Relational database design and queries",
      projects: ["Analytics Platform", "Transaction Systems"],
      yearsOfExperience: 2
    },
    {
      name: "Redis",
      level: 70,
      description: "Caching and session management",
      projects: ["Performance Optimization", "Real-time Apps"],
      yearsOfExperience: 1
    },
    {
      name: "GraphQL",
      level: 75,
      description: "API design and data fetching optimization",
      projects: ["Modern APIs", "Client Applications"],
      yearsOfExperience: 1
    }]

  }];


  const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "November 2024",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e88a58ba-1763658661299.png",
    alt: "AWS certification badge with orange and white cloud logo on dark background",
    credentialUrl: "https://aws.amazon.com/certification/"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "September 2024",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_133a98e0d-1763658661691.png",
    alt: "TensorFlow logo with orange and white neural network pattern",
    credentialUrl: "https://www.tensorflow.org/certificate"
  },
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "August 2024",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a2f9816-1763658663240.png",
    alt: "React logo with blue atom symbol on gradient background",
    credentialUrl: "https://frontendmasters.com/"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc",
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664",
    alt: "Docker whale logo with blue containers on tech background",
    credentialUrl: "https://www.docker.com/certification"
  }];


  const roadmapItems: RoadmapItem[] = [
  {
    technology: "Kubernetes",
    progress: 45,
    targetDate: "Q2 2025",
    reason: "Container orchestration for scalable microservices architecture"
  },
  {
    technology: "Rust",
    progress: 30,
    targetDate: "Q3 2025",
    reason: "High-performance systems programming and WebAssembly"
  },
  {
    technology: "GraphQL Advanced",
    progress: 60,
    targetDate: "Q1 2025",
    reason: "Complex API design patterns and federation"
  },
  {
    technology: "Blockchain Development",
    progress: 20,
    targetDate: "Q4 2025",
    reason: "Decentralized applications and smart contracts"
  }];


  const endorsements: Endorsement[] = [
  {
    name: "Priya Sharma",
    role: "Senior Developer",
    company: "Blackcoffer",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b6ceb69-1763294025321.png",
    alt: "Professional woman with long dark hair in business attire smiling at camera",
    skill: "React.js",
    quote: "Abhishek's React expertise helped us reduce our app's bounce rate by 40%. His component architecture is exceptional."
  },
  {
    name: "Rajesh Kumar",
    role: "Tech Lead",
    company: "UMA Robotics",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_196b22953-1763296743637.png",
    alt: "Professional man with short black hair wearing glasses and blue shirt",
    skill: "Machine Learning",
    quote: "His ML models for our robotics project exceeded expectations. Strong understanding of both theory and practical implementation."
  },
  {
    name: "Anita Desai",
    role: "Product Manager",
    company: "Tech Startup",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1498e89bb-1763294845292.png",
    alt: "Professional woman with shoulder-length brown hair in white blazer smiling confidently",
    skill: "Full-Stack",
    quote: "Abhishek delivered our MVP 2 weeks ahead of schedule. His full-stack capabilities are impressive."
  }];


  const learningResources: Resource[] = [
  {
    title: "Deep Learning Specialization",
    type: "Course",
    platform: "Coursera",
    url: "https://www.coursera.org/specializations/deep-learning",
    category: "AI/ML"
  },
  {
    title: "System Design Interview",
    type: "Book",
    platform: "Amazon",
    url: "https://www.amazon.com/",
    category: "Full-Stack"
  },
  {
    title: "AWS Solutions Architect Path",
    type: "Course",
    platform: "A Cloud Guru",
    url: "https://acloudguru.com/",
    category: "Cloud"
  },
  {
    title: "Advanced React Patterns",
    type: "Video",
    platform: "Kent C. Dodds",
    url: "https://kentcdodds.com/",
    category: "Full-Stack"
  },
  {
    title: "Designing Data-Intensive Applications",
    type: "Book",
    platform: "O'Reilly",
    url: "https://www.oreilly.com/",
    category: "Full-Stack"
  },
  {
    title: "Machine Learning Engineering",
    type: "Article",
    platform: "Google Research",
    url: "https://research.google/",
    category: "AI/ML"
  }];


  const tabs = [
  { id: 'all', label: 'All Skills', icon: '🎯' },
  { id: 'ai', label: 'AI/ML', icon: '🤖' },
  { id: 'fullstack', label: 'Full-Stack', icon: '💻' },
  { id: 'cloud', label: 'Cloud', icon: '☁️' }];


  const getFilteredCategories = () => {
    if (activeTab === 'all') return skillCategories;
    if (activeTab === 'ai') return skillCategories.filter((cat) => cat.title.includes('AI'));
    if (activeTab === 'fullstack') return skillCategories.filter((cat) => cat.title.includes('Full-Stack'));
    if (activeTab === 'cloud') return skillCategories.filter((cat) => cat.title.includes('Cloud'));
    return skillCategories;
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-card rounded w-1/3"></div>
            <div className="h-6 bg-card rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) =>
              <div key={i} className="h-64 bg-card rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) =>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-250 ${
          activeTab === tab.id ?
          'bg-brand-cyan text-brand-cyan-foreground shadow-brand' :
          'bg-card text-text-secondary hover:bg-muted hover:text-text-primary'}`
          }>

            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getFilteredCategories().map((category, index) =>
        <SkillCategory
          key={index}
          title={category.title}
          skills={category.skills}
          color={category.color}
          icon={category.icon} />

        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
          <span className="mr-3">🏆</span>
          Certifications & Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) =>
          <CertificationCard key={index} certification={cert} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearningRoadmap roadmapItems={roadmapItems} />
        <SkillEndorsements endorsements={endorsements} />
      </div>

      <LearningResources resources={learningResources} />

      <div className="bg-gradient-to-r from-brand-cyan/10 via-brand-purple/10 to-brand-pink/10 border border-brand-cyan/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Continuous Learning Mindset
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto mb-6">
          Technology evolves rapidly, and so do I. With a commitment to staying at the forefront of innovation, 
          I dedicate time each week to learning new technologies and refining existing skills.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 bg-card rounded-lg">
            <div className="text-2xl font-bold text-brand-cyan">15+</div>
            <div className="text-xs text-text-muted">Technologies Mastered</div>
          </div>
          <div className="px-6 py-3 bg-card rounded-lg">
            <div className="text-2xl font-bold text-brand-green">4</div>
            <div className="text-xs text-text-muted">Certifications Earned</div>
          </div>
          <div className="px-6 py-3 bg-card rounded-lg">
            <div className="text-2xl font-bold text-brand-purple">10+</div>
            <div className="text-xs text-text-muted">Hours/Week Learning</div>
          </div>
        </div>
      </div>
    </div>);

};

export default SkillsInteractive;