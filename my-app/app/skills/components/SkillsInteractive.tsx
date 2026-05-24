'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import SkillCategory from './SkillCategory';
import CertificationCard from './CertificationCard';
import LearningRoadmap from './LearningRoadmap';
import SkillEndorsements from './SkillEndorsements';
import LearningResources from './LearningResources';
import { motion } from 'framer-motion';

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
  const [certificatesToShow, setCertificatesToShow] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
    
    // Update certificates to show based on screen size
    const updateCertificatesToShow = () => {
      if (window.innerWidth >= 1024) {
        setCertificatesToShow(3);
      } else if (window.innerWidth >= 768) {
        setCertificatesToShow(2);
      } else {
        setCertificatesToShow(1);
      }
    };
    
    updateCertificatesToShow();
    window.addEventListener('resize', updateCertificatesToShow);
    return () => window.removeEventListener('resize', updateCertificatesToShow);
  }, []);

  const nextCertificates = () => {
    if (startIndex + certificatesToShow < certifications.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevCertificates = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const skillCategories: SkillCategoryData[] = [
  {
    title: "Programming & Core Skills",
    icon: "💡",
    color: "from-brand-purple to-brand-pink",
    skills: [
      {
        name: "Python",
        level: 90,
        description: "Backend development, automation & ML workflows",
        projects: ["Credit Card Fraud Detection", "SOS Gesture Detection"],
        yearsOfExperience: 4
      },
      {
        name: "C/C++",
        level: 85,
        description: "High-performance problem solving, DSA",
        projects: ["College DSA Projects", "Competitive Coding"],
        yearsOfExperience: 3
      },
      {
        name: "Java",
        level: 70,
        description: "OOP, backend fundamentals & DSA",
        projects: ["Academic OOP projects"],
        yearsOfExperience: 2
      },
      {
        name: "SQL",
        level: 80,
        description: "Database operations, joins, indexing",
        projects: ["Fraud Detection Pipeline", "Multi-model Databases"],
        yearsOfExperience: 3
      }
    ]
  },

  {
    title: "Web Development",
    icon: "💻",
    color: "from-brand-cyan to-brand-light-cyan",
    skills: [
      {
        name: "React.js",
        level: 85,
        description: "Frontend development, components & hooks",
        projects: ["Portfolio Website", "Interactive Dashboards"],
        yearsOfExperience: 2
      },
      {
        name: "Flask",
        level: 75,
        description: "Building backend APIs and ML integrations",
        projects: ["ML Integrations", "REST APIs"],
        yearsOfExperience: 2
      },
      {
        name: "FastAPI",
        level: 70,
        description: "High-performance backend services",
        projects: ["SOS Gesture Detection API"],
        yearsOfExperience: 1
      },
      {
        name: "Django",
        level: 65,
        description: "Full-stack python apps & ORM usage",
        projects: ["Small web apps"],
        yearsOfExperience: 1
      },
      {
        name: "REST APIs",
        level: 80,
        description: "API design, authentication, data handling",
        projects: ["Credit Card Fraud Detection API", "User Services"],
        yearsOfExperience: 2
      }
    ]
  },

  {
    title: "AI & Machine Learning",
    icon: "🤖",
    color: "from-brand-green to-brand-orange",
    skills: [
      {
        name: "TensorFlow",
        level: 60,
        description: "ML model building & evaluation",
        projects: ["Gesture Detection"],
        yearsOfExperience: 1
      },
      {
        name: "OpenCV",
        level: 70,
        description: "Image processing & gesture recognition",
        projects: ["SOS Gesture Detection"],
        yearsOfExperience: 1
      },
      {
        name: "Scikit-learn",
        level: 75,
        description: "ML algorithms, preprocessing & pipelines",
        projects: ["Fraud Detection", "Predictive Models"],
        yearsOfExperience: 2
      },
      {
        name: "Pandas",
        level: 80,
        description: "Data cleaning, wrangling & transformations",
        projects: ["Fraud Detection", "ML Pipelines"],
        yearsOfExperience: 3
      },
      {
        name: "NumPy",
        level: 80,
        description: "Numerical computations & ML matrix ops",
        projects: ["ML Preprocessing"],
        yearsOfExperience: 3
      }
    ]
  },

  {
    title: "Databases & Cloud",
    icon: "🗄️",
    color: "from-brand-orange to-brand-pink",
    skills: [
      {
        name: "MySQL",
        level: 80,
        description: "Stored procedures, joins, indexing",
        projects: ["Fraud Detection DB", "User Management"],
        yearsOfExperience: 2
      },
      {
        name: "PostgreSQL",
        level: 75,
        description: "Relational design, queries & optimization",
        projects: ["Complex Query Handling"],
        yearsOfExperience: 1
      },
      {
        name: "Neo4j",
        level: 65,
        description: "Graph DB for relations & fraud detection",
        projects: ["Fraud Link Analysis"],
        yearsOfExperience: 1
      },
      {
        name: "AWS",
        level: 60,
        description: "EC2, S3, Route53 for hosting and deployment",
        projects: ["ML Model Hosting"],
        yearsOfExperience: 1
      },
      {
        name: "Git & GitHub",
        level: 85,
        description: "Version control, branches & collaboration",
        projects: ["All Projects"],
        yearsOfExperience: 3
      }
    ]
  }
];



  const certifications: Certification[] = [
  {
    name: "NPTEL Certification in Data Science with Python",
    issuer: "NPTEL",
    date: "2024",
    image: "https://www.kindpng.com/picc/m/152-1520962_nptel-logo-hd-png-download.png",
    alt: "NPTEL Data Science with Python Certification",
    credentialUrl: "https://drive.google.com/file/d/1uLuMlkKuLxVK4tZfwCIwBarxg282my04/view?usp=sharing"
  },
  {
    name: "Figma Mastery: From Idea to Design",
    issuer: "PhysicsWallah (PW)",
    date: "2024",
    image: "/assets/images/pw.jpg",
    alt: "PW Figma Mastery Certificate",
    credentialUrl: "https://drive.google.com/file/d/12BzOcX9WQ1SleSoUjH0f7LP-9T0CV2Xb/view?usp=sharing"
  },
  {
    name: "AI Internship – TechSaksham",
    issuer: "Microsoft & SAP (AICTE TechSaksham)",
    date: "2024",
    image: "/assets/images/AICTE.png",
    alt: "TechSaksham AI Internship Certificate",
    credentialUrl: "https://drive.google.com/file/d/1ZwJdtSA0mh1dkeVSLpM0LXe0mbEJA293/view?usp=sharing"
  },
  {
    name: "AWS Cloud Technical Essentials",
    issuer: "Coursera | Amazon Web Services",
    date: "2024",
    image: "/assets/images/AWS.png",
    alt: "Coursera AWS Cloud Technical Essentials Certificate",
    credentialUrl: "https://coursera.org/share/21dfc455dcb0fb3d888d77e085b38b11"
  },
  {
    name: "Introduction to IT and AWS Cloud",
    issuer: "Coursera | Amazon Web Services",
    date: "2024",
    image: "/assets/images/AWS.png",
    alt: "Introduction to IT and AWS Cloud Certificate",
    credentialUrl: "https://coursera.org/share/4b9fd592e8e4b6d762ec7c46b398c024"
  },
  {
    name: "Providing Technical Support for AWS Workloads",
    issuer: "Coursera | Amazon Web Services",
    date: "2024",
    image: "/assets/images/AWS.png",
    alt: "AWS Technical Support Certificate",
    credentialUrl: "https://coursera.org/share/5f33423225405e66b7b6abae80655476"
  }
];


  const roadmapItems: RoadmapItem[] = [
  {
    technology: "Advanced React + Next.js",
    progress: 70,
    targetDate: "Q1 2025",
    reason: "Deepen frontend skills for building scalable production apps at Blackcoffer."
  },
  {
    technology: "FastAPI & Microservices",
    progress: 55,
    targetDate: "Q2 2025",
    reason: "To improve backend API performance and design microservices for real-world systems."
  },
  {
    technology: "AWS Cloud (Advanced)",
    progress: 40,
    targetDate: "Q3 2025",
    reason: "Strengthen cloud deployment skills including Lambda, API Gateway, EC2, S3."
  },
  {
    technology: "Machine Learning Deployment (MLOps)",
    progress: 35,
    targetDate: "Q4 2025",
    reason: "Deploy ML models using Docker, FastAPI, and CI/CD pipelines."
  },
  {
    technology: "Data Structures & Algorithms (Advanced)",
    progress: 60,
    targetDate: "Q2 2025",
    reason: "For better problem-solving and competitive technical interviews."
  }
];



  const endorsements: Endorsement[] = [
  {
    name: "A. Kumar",
    role: "Robotics Engineer",
    company: "UMA Robotics",
    image: "assets/images/suchit.png",
    alt: "Professional placeholder photo",
    skill: "Machine Learning",
    quote:
      "Abhishek contributed significantly during the UMA Robotics internship. His ML models were accurate, well-structured, and he quickly adapted to project requirements."
  },
  {
    name: "D. Savage",
    role: "Client",
    company: "Freelance Project",
    image: "assets/images/danisavage.jpg",
    alt: "Client placeholder photo",
    skill: "Full-Stack Development",
    quote:
      "Working with Abhishek was smooth and professional. He delivered the project on time, with clean UI and scalable backend logic. Highly recommend his work ethic."
  },
  {
    name: "S. Verma",
    role: "Tech Lead",
    company: "Software Firm",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3f78660-1763295972306.png",
    alt: "Tech lead placeholder photo",
    skill: "React.js",
    quote:
      "Abhishek is quick at understanding requirements and translating them into high-quality components. His knowledge of React and API integration stands out."
  }
];



  const learningResources: Resource[] = [
  {
    title: "Deep Learning Specialization by Andrew Ng",
    type: "Course",
    platform: "Coursera",
    url: "https://www.coursera.org/specializations/deep-learning",
    category: "AI/ML"
  },
  {
    title: "Full-Stack Open 2024",
    type: "Course",
    platform: "University of Helsinki",
    url: "https://fullstackopen.com/en/",
    category: "Full-Stack"
  },
  {
    title: "Designing Data-Intensive Applications",
    type: "Book",
    platform: "O’Reilly",
    url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    category: "Full-Stack"
  },
  {
    title: "AWS Well-Architected Framework",
    type: "Article",
    platform: "AWS",
    url: "https://aws.amazon.com/architecture/well-architected/",
    category: "Cloud"
  },
  {
    title: "The Kubernetes Handbook",
    type: "Article",
    platform: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news/the-kubernetes-handbook/",
    category: "Cloud"
  },
  {
    title: "Advanced React Patterns",
    type: "Video",
    platform: "Kent C. Dodds",
    url: "https://kentcdodds.com/workshops/advanced-react-patterns",
    category: "Full-Stack"
  }
];



  const tabs = [
  { id: 'all', label: 'All Skills', icon: '🎯' },
  { id: 'programming', label: 'Programming', icon: '💡' },
  { id: 'web', label: 'Web Development', icon: '💻' },
  { id: 'ai', label: 'AI/ML', icon: '🤖' },
  { id: 'cloud', label: 'Database & Cloud', icon: '☁️' },
];



  const getFilteredCategories = () => {
  if (activeTab === 'all') return skillCategories;

  if (activeTab === 'programming')
    return skillCategories.filter((cat) =>
      cat.title.includes("Programming")
    );

  if (activeTab === 'web')
    return skillCategories.filter((cat) =>
      cat.title.includes("Web Development")
    );

  if (activeTab === 'ai')
    return skillCategories.filter((cat) =>
      cat.title.includes("AI")
    );

  if (activeTab === 'cloud')
    return skillCategories.filter((cat) =>
      cat.title.includes("Database") || cat.title.includes("Cloud")
    );

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
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-250 relative overflow-hidden ${
          activeTab === tab.id ?
          'bg-brand-cyan text-brand-cyan-foreground shadow-brand' :
          'bg-card text-text-secondary hover:bg-muted hover:text-text-primary'}`
          }>

            <span className="mr-2">{tab.icon}</span>
            {tab.label}
            
            {/* Glowing border animation for active tab */}
            {activeTab === tab.id && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                initial={{ boxShadow: "0 0 0 0 rgba(0, 255, 255, 0.7)" }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(0, 255, 255, 0.7)",
                    "0 0 0 4px rgba(0, 255, 255, 0.3)",
                    "0 0 0 0 rgba(0, 255, 255, 0.7)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            )}
          </button>
        )}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {getFilteredCategories().map((category, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <SkillCategory
              title={category.title}
              skills={category.skills}
              color={category.color}
              icon={category.icon}
            />
          </motion.div>
        ))}
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
          <span className="mr-3">🏆</span>
          Certifications & Achievements
        </h2>
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevCertificates}
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-subtle shadow-lg transform -translate-x-1/2 transition-all duration-250 ${
              startIndex === 0 
                ? 'text-text-muted cursor-not-allowed' 
                : 'text-text-primary hover:bg-brand-cyan/20 hover:text-brand-cyan'
            }`}
            aria-label="Previous certificates"
          >
            <Icon name="ChevronLeftIcon" size={20} />
          </button>
          
          <button
            onClick={nextCertificates}
            disabled={startIndex + certificatesToShow >= certifications.length}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card border border-subtle shadow-lg transform translate-x-1/2 transition-all duration-250 ${
              startIndex + certificatesToShow >= certifications.length
                ? 'text-text-muted cursor-not-allowed' 
                : 'text-text-primary hover:bg-brand-cyan/20 hover:text-brand-cyan'
            }`}
            aria-label="Next certificates"
          >
            <Icon name="ChevronRightIcon" size={20} />
          </button>
          
          {/* Certificates slider */}
          <div className="overflow-hidden px-8">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${startIndex * (100 / certificatesToShow)}%)`
              }}
            >
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / certificatesToShow}%` }}
                >
                  <CertificationCard certification={cert} />
                </div>
              ))}
            </div>
          </div>
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
          Technology evolves faster than ever — and I make sure my skills evolve with it. I dedicate focused time every week to upgrading my technical stack across AI/ML, full-stack development, cloud technologies, and system design. Whether it's building hands-on projects, completing new certifications, or exploring emerging tools, continuous improvement is a core part of my workflow and identity as an engineer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 bg-card rounded-lg">
            <div className="text-2xl font-bold text-brand-cyan">18+</div>
            <div className="text-xs text-text-muted">Technologies Mastered</div>
          </div>
          <div className="px-6 py-3 bg-card rounded-lg">
            <div className="text-2xl font-bold text-brand-green">6</div>
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