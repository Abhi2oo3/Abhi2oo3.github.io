'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';

interface Technology {
  name: string;
  category: string;
}

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  impact: {
    metric: string;
    value: string;
  }[];
  features: string[];
  challenges: string[];
  learnings: string[];
  demoUrl?: string;
  githubUrl: string;
  codeSnippet?: {
    language: string;
    code: string;
    description: string;
  };
  status: 'Completed' | 'In Progress' | 'Open Source';
  duration: string;
  role: string;
}

const mockProjects: Project[] = [
{
  id: 1,
  title: "Women Safety Guardian",
  tagline: "AI-powered safety ecosystem for women's protection",
  description: "Comprehensive safety platform combining real-time location tracking, emergency SOS alerts, and AI-driven threat detection to create a protective network for women.",
  longDescription: "Women Safety Guardian is a full-stack mobile and web application designed to address the critical issue of women's safety in India. The system integrates multiple safety features including real-time GPS tracking, one-touch emergency alerts to trusted contacts and authorities, AI-powered threat detection using machine learning models, and a community-driven safe zone mapping system. The application has been tested with over 500 beta users and has successfully prevented multiple potential safety incidents through its proactive alert system.",
  image: "https://images.unsplash.com/photo-1643639779898-b41edc0bdcca",
  alt: "Mobile phone displaying safety app interface with emergency button and location tracking on screen",
  technologies: [
  { name: "React Native", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "MongoDB", category: "Database" },
  { name: "Socket.io", category: "Real-time" },
  { name: "Google Maps API", category: "Integration" }],

  category: "Social Impact",
  complexity: "Advanced",
  impact: [
  { metric: "Active Users", value: "500+" },
  { metric: "Emergency Alerts Sent", value: "1,200+" },
  { metric: "Response Time", value: "<30 seconds" },
  { metric: "Safety Incidents Prevented", value: "15+" }],

  features: [
  "Real-time GPS location tracking with geofencing",
  "One-touch SOS alert system with automated calls",
  "AI-powered threat detection using behavioral analysis",
  "Community-driven safe zone mapping",
  "Emergency contact management with priority levels",
  "Voice-activated emergency triggers",
  "Offline mode with SMS fallback",
  "Integration with local police databases"],

  challenges: [
  "Ensuring sub-30-second response time for emergency alerts across varying network conditions",
  "Balancing battery consumption with continuous location tracking requirements",
  "Training ML models to accurately detect genuine threats while minimizing false positives",
  "Implementing end-to-end encryption while maintaining real-time performance"],

  learnings: [
  "Importance of user privacy in safety applications - implemented zero-knowledge architecture",
  "Critical need for offline functionality in emergency scenarios",
  "Value of community feedback in refining threat detection algorithms",
  "Significance of cross-platform consistency for user trust"],

  demoUrl: "https://women-safety-demo.example.com",
  githubUrl: "https://github.com/abhishek/women-safety-guardian",
  codeSnippet: {
    language: "javascript",
    code: `// AI-powered threat detection algorithm
const analyzeThreatLevel = async (locationData, behaviorMetrics) => {
  const features = extractFeatures(locationData, behaviorMetrics);
  const prediction = await mlModel.predict(features);
  
  if (prediction.threatLevel > THRESHOLD) {
    await triggerEmergencyProtocol({
      location: locationData.coordinates,
      confidence: prediction.confidence,
      timestamp: Date.now()
    });
  }
  
  return prediction;
};`,
    description: "Core threat detection algorithm using TensorFlow.js for real-time analysis"
  },
  status: "Completed",
  duration: "6 months",
  role: "Full-Stack Developer & ML Engineer"
},
{
  id: 2,
  title: "CricketHub Analytics",
  tagline: "Real-time cricket statistics and predictive analytics platform",
  description: "Comprehensive cricket analytics platform providing live match statistics, player performance insights, and AI-powered match outcome predictions.",
  longDescription: "CricketHub Analytics transforms how cricket enthusiasts engage with the sport by providing deep statistical insights and predictive analytics. The platform aggregates data from multiple cricket leagues worldwide, processes it through custom ML models to generate predictions, and presents insights through an intuitive dashboard. Features include live ball-by-ball commentary, player comparison tools, team performance trends, and fantasy cricket recommendations. The platform has achieved 78% accuracy in match outcome predictions and serves over 10,000 active users during major tournaments.",
  image: "https://images.unsplash.com/photo-1552435053-01c010307582",
  alt: "Cricket stadium with players on field during match, scoreboard visible in background",
  technologies: [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "API" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Caching" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "WebSocket", category: "Real-time" }],

  category: "Sports Tech",
  complexity: "Advanced",
  impact: [
  { metric: "Active Users", value: "10,000+" },
  { metric: "Prediction Accuracy", value: "78%" },
  { metric: "Data Points Processed", value: "5M+ daily" },
  { metric: "API Response Time", value: "<200ms" }],

  features: [
  "Live match tracking with ball-by-ball updates",
  "Advanced player statistics and performance metrics",
  "AI-powered match outcome predictions",
  "Head-to-head player comparison tools",
  "Historical data analysis spanning 10+ years",
  "Fantasy cricket team recommendations",
  "Custom alerts for match events",
  "Interactive data visualizations with Recharts"],

  challenges: [
  "Handling high-volume real-time data streams during peak match hours",
  "Ensuring prediction model accuracy across different match formats (T20, ODI, Test)",
  "Optimizing database queries for complex statistical aggregations",
  "Managing API rate limits from multiple cricket data providers"],

  learnings: [
  "Importance of caching strategies for frequently accessed statistics",
  "Value of WebSocket connections for real-time updates vs. polling",
  "Need for robust error handling in live data pipelines",
  "Significance of user feedback in refining prediction algorithms"],

  demoUrl: "https://crickethub-demo.example.com",
  githubUrl: "https://github.com/abhishek/crickethub-analytics",
  codeSnippet: {
    language: "python",
    code: `# Match outcome prediction model
def predict_match_outcome(team1_stats, team2_stats, venue_data):
    features = prepare_features(team1_stats, team2_stats, venue_data)
    prediction = model.predict_proba(features)
    
    return {
        'team1_win_probability': prediction[0][1],
        'team2_win_probability': prediction[0][0],
        'confidence_score': max(prediction[0]),
        'key_factors': extract_feature_importance(features)
    }`,
    description: "Machine learning model for predicting match outcomes using scikit-learn"
  },
  status: "Completed",
  duration: "8 months",
  role: "Full-Stack Developer & Data Scientist"
},
{
  id: 3,
  title: "CloudOps Dashboard",
  tagline: "Unified cloud infrastructure monitoring and management",
  description: "Enterprise-grade dashboard for monitoring and managing multi-cloud infrastructure with real-time metrics, cost optimization, and automated scaling.",
  longDescription: "CloudOps Dashboard provides a centralized platform for DevOps teams to monitor and manage infrastructure across AWS, Azure, and Google Cloud. The system aggregates metrics from multiple cloud providers, provides intelligent cost optimization recommendations, and enables automated scaling based on custom rules. Features include real-time resource monitoring, cost forecasting, security compliance checks, and incident management. The platform has helped organizations reduce cloud costs by an average of 30% while improving system reliability.",
  image: "https://images.unsplash.com/photo-1640068689382-94270dfb58db",
  alt: "Modern data center with rows of server racks illuminated by blue LED lights",
  technologies: [
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Go", category: "Backend" },
  { name: "Docker", category: "Containerization" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Visualization" },
  { name: "Terraform", category: "IaC" }],

  category: "DevOps",
  complexity: "Advanced",
  impact: [
  { metric: "Cost Reduction", value: "30% average" },
  { metric: "Monitored Resources", value: "50,000+" },
  { metric: "Uptime Improvement", value: "99.9%" },
  { metric: "Alert Response Time", value: "<2 minutes" }],

  features: [
  "Multi-cloud resource monitoring and management",
  "Real-time cost tracking and optimization recommendations",
  "Automated scaling based on custom metrics",
  "Security compliance monitoring and alerts",
  "Infrastructure as Code (IaC) integration",
  "Incident management and root cause analysis",
  "Custom dashboard creation with drag-and-drop",
  "API for third-party integrations"],

  challenges: [
  "Normalizing metrics across different cloud provider APIs",
  "Handling high-frequency time-series data at scale",
  "Implementing secure multi-tenant architecture",
  "Ensuring real-time updates without overwhelming the system"],

  learnings: [
  "Importance of efficient data aggregation for large-scale monitoring",
  "Value of predictive analytics in cost optimization",
  "Need for flexible alerting rules to reduce alert fatigue",
  "Significance of comprehensive API documentation for integrations"],

  githubUrl: "https://github.com/abhishek/cloudops-dashboard",
  codeSnippet: {
    language: "go",
    code: `// Cost optimization analyzer
func AnalyzeCostOptimization(resources []Resource) []Recommendation {
    recommendations := []Recommendation{}
    
    for _, resource := range resources {
        if resource.Utilization < 30 && resource.Cost > 100 {
            recommendations = append(recommendations, Recommendation{
                Type: "Downsize",
                Resource: resource.ID,
                PotentialSavings: calculateSavings(resource),
                Confidence: 0.85,
            })
        }
    }
    
    return recommendations
}`,
    description: "Cost optimization engine analyzing resource utilization patterns"
  },
  status: "Completed",
  duration: "10 months",
  role: "Lead Backend Developer"
},
{
  id: 4,
  title: "EduConnect Platform",
  tagline: "AI-powered personalized learning management system",
  description: "Modern LMS with adaptive learning paths, real-time collaboration, and AI-driven content recommendations for enhanced educational outcomes.",
  longDescription: "EduConnect Platform revolutionizes online education by combining traditional LMS features with AI-powered personalization. The system analyzes student performance, learning patterns, and engagement metrics to create customized learning paths. Features include virtual classrooms with real-time collaboration, automated assignment grading, progress tracking, and parent-teacher communication portals. The platform has been adopted by 50+ educational institutions and has shown a 40% improvement in student engagement metrics.",
  image: "https://images.unsplash.com/photo-1595819492329-f13804dc377c",
  alt: "Students using laptops in modern classroom with teacher presenting on digital whiteboard",
  technologies: [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Framework" },
  { name: "MongoDB", category: "Database" },
  { name: "WebRTC", category: "Video" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Socket.io", category: "Real-time" }],

  category: "EdTech",
  complexity: "Advanced",
  impact: [
  { metric: "Institutions Using", value: "50+" },
  { metric: "Active Students", value: "15,000+" },
  { metric: "Engagement Increase", value: "40%" },
  { metric: "Course Completion Rate", value: "85%" }],

  features: [
  "AI-powered personalized learning paths",
  "Virtual classrooms with video conferencing",
  "Automated assignment grading using ML",
  "Real-time collaboration tools",
  "Progress tracking and analytics dashboard",
  "Parent-teacher communication portal",
  "Gamification elements for engagement",
  "Mobile app for on-the-go learning"],

  challenges: [
  "Ensuring video quality across varying internet speeds",
  "Scaling real-time collaboration for large classes",
  "Training ML models for accurate assignment grading",
  "Balancing feature richness with user interface simplicity"],

  learnings: [
  "Importance of accessibility in educational platforms",
  "Value of teacher feedback in feature prioritization",
  "Need for robust content moderation in student interactions",
  "Significance of offline mode for areas with poor connectivity"],

  demoUrl: "https://educonnect-demo.example.com",
  githubUrl: "https://github.com/abhishek/educonnect-platform",
  codeSnippet: {
    language: "javascript",
    code: `// Adaptive learning path generator
const generateLearningPath = async (studentProfile, courseContent) => {
  const performanceData = await analyzePerformance(studentProfile);
  const learningStyle = identifyLearningStyle(performanceData);
  
  const adaptivePath = courseContent.map(module => ({
    ...module,
    difficulty: adjustDifficulty(module, performanceData),
    resources: filterResources(module.resources, learningStyle),
    estimatedTime: calculateTime(module, studentProfile.pace)
  }));
  
  return adaptivePath;
};`,
    description: "AI algorithm for generating personalized learning paths based on student performance"
  },
  status: "Completed",
  duration: "12 months",
  role: "Full-Stack Developer & Product Lead"
},
{
  id: 5,
  title: "FinTrack Pro",
  tagline: "Intelligent personal finance management and investment tracking",
  description: "Comprehensive financial management app with automated expense tracking, investment portfolio analysis, and AI-powered financial insights.",
  longDescription: "FinTrack Pro helps users take control of their financial health through intelligent automation and insights. The application automatically categorizes expenses, tracks investments across multiple platforms, provides budget recommendations, and offers personalized financial advice using machine learning. Features include bill reminders, goal tracking, tax optimization suggestions, and financial health scores. The app has helped users save an average of ₹25,000 annually through better financial planning.",
  image: "https://images.unsplash.com/photo-1712640183722-ec59693f7c82",
  alt: "Person analyzing financial charts and graphs on tablet with calculator and documents on desk",
  technologies: [
  { name: "React Native", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Plaid API", category: "Integration" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "Redis", category: "Caching" }],

  category: "FinTech",
  complexity: "Intermediate",
  impact: [
  { metric: "Active Users", value: "8,000+" },
  { metric: "Average Savings", value: "₹25,000/year" },
  { metric: "Transactions Tracked", value: "2M+" },
  { metric: "Budget Adherence", value: "75%" }],

  features: [
  "Automated expense categorization using ML",
  "Multi-platform investment portfolio tracking",
  "Smart budget recommendations",
  "Bill reminders and payment scheduling",
  "Financial goal tracking with milestones",
  "Tax optimization suggestions",
  "Financial health score calculation",
  "Secure bank account integration"],

  challenges: [
  "Ensuring data security for sensitive financial information",
  "Handling multiple bank API integrations with varying formats",
  "Providing accurate investment tracking across different asset classes",
  "Balancing automation with user control over categorization"],

  learnings: [
  "Critical importance of encryption and security in FinTech",
  "Value of clear data visualization for financial insights",
  "Need for flexible categorization rules to match user preferences",
  "Significance of regular security audits and compliance checks"],

  demoUrl: "https://fintrack-demo.example.com",
  githubUrl: "https://github.com/abhishek/fintrack-pro",
  codeSnippet: {
    language: "python",
    code: `# Expense categorization ML model
def categorize_transaction(transaction_data):
    features = extract_features(transaction_data)
    category_prediction = model.predict(features)
    confidence = model.predict_proba(features).max()
    
    if confidence < 0.7:
        return suggest_manual_review(transaction_data, category_prediction)
    
    return {
        'category': category_prediction,
        'confidence': confidence,
        'subcategory': predict_subcategory(features, category_prediction)
    }`,
    description: "Machine learning model for automatic expense categorization"
  },
  status: "Completed",
  duration: "7 months",
  role: "Full-Stack Developer"
},
{
  id: 6,
  title: "HealthTrack AI",
  tagline: "AI-powered health monitoring and wellness companion",
  description: "Comprehensive health tracking application with symptom analysis, medication reminders, and personalized wellness recommendations.",
  longDescription: "HealthTrack AI empowers users to take charge of their health through intelligent monitoring and insights. The application tracks vital signs, analyzes symptoms using AI, provides medication reminders, and offers personalized wellness recommendations. Features include integration with wearable devices, telemedicine consultation booking, health report storage, and emergency contact alerts. The app has helped users improve medication adherence by 60% and has facilitated early detection of health issues through symptom tracking.",
  image: "https://images.unsplash.com/photo-1721114989769-0423619f03d2",
  alt: "Healthcare professional using digital tablet showing health monitoring data and vital signs",
  technologies: [
  { name: "Flutter", category: "Frontend" },
  { name: "Dart", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Cloud Functions", category: "Serverless" },
  { name: "Firestore", category: "Database" },
  { name: "HealthKit", category: "Integration" }],

  category: "HealthTech",
  complexity: "Intermediate",
  impact: [
  { metric: "Active Users", value: "12,000+" },
  { metric: "Medication Adherence", value: "60% improvement" },
  { metric: "Health Records Stored", value: "50,000+" },
  { metric: "Early Detections", value: "200+" }],

  features: [
  "AI-powered symptom analysis and health insights",
  "Medication reminders with adherence tracking",
  "Wearable device integration for vital signs",
  "Telemedicine consultation booking",
  "Digital health record storage",
  "Emergency contact alerts",
  "Personalized wellness recommendations",
  "Health goal tracking and progress monitoring"],

  challenges: [
  "Ensuring medical accuracy in symptom analysis",
  "Handling sensitive health data with HIPAA compliance",
  "Integrating with multiple wearable device APIs",
  "Providing reliable offline functionality for critical features"],

  learnings: [
  "Importance of medical professional validation for health features",
  "Value of clear disclaimers about AI limitations in healthcare",
  "Need for robust data privacy measures in health applications",
  "Significance of user-friendly interfaces for elderly users"],

  demoUrl: "https://healthtrack-demo.example.com",
  githubUrl: "https://github.com/abhishek/healthtrack-ai",
  status: "In Progress",
  duration: "9 months (ongoing)",
  role: "Mobile Developer & ML Engineer"
}];


const allTechnologies = Array.from(
  new Set(mockProjects.flatMap((p) => p.technologies.map((t) => t.name)))
).sort();

const categories = Array.from(
  new Set(mockProjects.map((p) => p.category))
).sort();

export default function ProjectsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-card border-b border-subtle"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="h-8 bg-card rounded w-64 mb-4"></div>
          <div className="h-4 bg-card rounded w-96 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-96 bg-card rounded-lg"></div>
            )}
          </div>
        </div>
      </div>);

  }

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'All' || project.technologies.some((t) => t.name === selectedTech);
    const matchesComplexity = selectedComplexity === 'All' || project.complexity === selectedComplexity;
    const matchesSearch = searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTech && matchesComplexity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-subtle">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                Project <span className="text-brand-cyan">Showcase</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Explore my diverse portfolio of innovative projects spanning AI/ML, full-stack development, and social impact solutions. Each project tells a story of problem-solving, technical excellence, and measurable impact.
              </p>
            </div>

            <ProjectFilter
              categories={categories}
              technologies={allTechnologies}
              selectedCategory={selectedCategory}
              selectedTech={selectedTech}
              selectedComplexity={selectedComplexity}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onTechChange={setSelectedTech}
              onComplexityChange={setSelectedComplexity}
              onSearchChange={setSearchQuery} />

          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            {filteredProjects.length === 0 ?
            <div className="text-center py-16">
                <p className="text-xl text-text-muted">No projects found matching your filters.</p>
                <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTech('All');
                  setSelectedComplexity('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-6 py-3 bg-brand-cyan text-brand-cyan-foreground font-semibold rounded-md hover:bg-brand-light-cyan transition-colors duration-250">

                  Reset Filters
                </button>
              </div> :

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) =>
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={() => setSelectedProject(project)} />

              )}
              </div>
            }
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Let's Build Something <span className="text-brand-green">Amazing</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Have a project idea or looking for collaboration? I'm always excited to work on innovative solutions that create real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/abhishek"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-card text-text-primary font-semibold rounded-md hover:bg-muted transition-all duration-250 border border-subtle hover:border-brand-cyan flex items-center justify-center space-x-2">

                <img src="/assets/images/github-octocat-svgrepo-com (2).svg" alt="GitHub" className="w-5 h-5" />
                <span>View GitHub Profile</span>
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-brand-pink text-brand-pink-foreground font-semibold rounded-md hover:bg-brand-pink/90 transition-all duration-250 hover:shadow-brand">

                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedProject &&
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

      }
    </div>);

}