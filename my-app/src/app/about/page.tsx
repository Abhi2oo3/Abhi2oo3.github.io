import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CoreValuesSection from './components/CoreValuesSection';
import JourneyTimeline from './components/JourneyTimeline';
import ImpactMetrics from './components/ImpactMetrics';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import CallToAction from './components/CallToAction';

export const metadata: Metadata = {
  title: 'About - Abhishek Portfolio Pro',
  description: 'Learn about Abhishek, an innovative problem-solver specializing in AI/ML and full-stack development, dedicated to solving business and societal challenges through technology.'
};

interface ProfileData {
  name: string;
  tagline: string;
  image: string;
  alt: string;
  mission: string;
}

interface CoreValue {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  type: 'education' | 'work' | 'project' | 'certification';
}

interface Metric {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

interface Philosophy {
  id: number;
  title: string;
  description: string;
  principles: string[];
}

const profileData: ProfileData = {
  name: "Abhishek Patel",
  tagline: "The Innovative Problem-Solver",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3f78660-1763295972306.png",
  alt: "Professional headshot of young Indian male software engineer with short black hair wearing navy blue shirt against neutral background",
  mission: "I don't just write code—I create meaningful solutions that bridge the gap between technical excellence and real-world impact. My mission is to solve business and societal challenges through innovation, combining AI/ML expertise with full-stack development to build products that matter."
};

const coreValues: CoreValue[] = [
{
  id: 1,
  icon: "LightBulbIcon",
  title: "Innovation",
  description: "Constantly exploring new technologies and approaches to solve complex problems in creative ways.",
  color: "from-brand-cyan to-brand-light-cyan"
},
{
  id: 2,
  icon: "HeartIcon",
  title: "Social Impact",
  description: "Building solutions that create positive change in society, from women's safety to accessible technology.",
  color: "from-brand-green to-brand-cyan"
},
{
  id: 3,
  icon: "AcademicCapIcon",
  title: "Continuous Learning",
  description: "Embracing a growth mindset with commitment to staying current with emerging technologies and best practices.",
  color: "from-brand-purple to-brand-pink"
},
{
  id: 4,
  icon: "SparklesIcon",
  title: "Excellence",
  description: "Delivering high-quality, maintainable code with attention to performance, security, and user experience.",
  color: "from-brand-orange to-brand-green"
}];


const journeyEvents: TimelineEvent[] = [
{
  id: 1,
  year: "2024",
  title: "Software Engineer",
  organization: "Blackcoffer",
  description: "Leading development of enterprise-level applications with focus on performance optimization and user experience. Implemented advanced features that significantly improved system efficiency and user engagement.",
  achievements: [
  "Reduced bounce rate by 40% through strategic UX improvements",
  "Improved application performance by 20% with code optimization",
  "Led migration to modern tech stack improving maintainability",
  "Mentored junior developers on best practices and architecture"],

  type: "work"
},
{
  id: 2,
  year: "2023",
  title: "Full Stack Developer Intern",
  organization: "UMA Robotics",
  description: "Developed and deployed full-stack applications using cutting-edge technologies. Gained hands-on experience with cloud infrastructure and modern development workflows.",
  achievements: [
  "Built responsive web applications with React and Node.js",
  "Implemented RESTful APIs with comprehensive documentation",
  "Collaborated with cross-functional teams on product features",
  "Deployed applications on AWS with CI/CD pipelines"],

  type: "work"
},
{
  id: 3,
  year: "2023",
  title: "Women Safety System",
  organization: "Personal Project",
  description: "Developed an innovative safety application addressing critical societal challenges. Integrated multiple technologies to create a comprehensive solution for emergency situations.",
  achievements: [
  "Real-time location tracking with emergency alerts",
  "Integration with local authorities for rapid response",
  "User-friendly interface for quick access in emergencies",
  "Privacy-focused design with secure data handling"],

  type: "project"
},
{
  id: 4,
  year: "2022",
  title: "IIT Roorkee Startup Bootcamp",
  organization: "Indian Institute of Technology Roorkee",
  description: "Participated in intensive entrepreneurship program focusing on technology startups. Learned product development, market validation, and business strategy from industry experts.",
  achievements: [
  "Developed startup pitch for tech-based solution",
  "Learned lean startup methodology and MVP development",
  "Networked with successful entrepreneurs and investors",
  "Gained insights into scaling technology products"],

  type: "education"
},
{
  id: 5,
  year: "2021-2025",
  title: "Bachelor of Technology",
  organization: "Computer Science & Engineering",
  description: "Comprehensive education in computer science fundamentals, software engineering, and emerging technologies. Strong focus on practical application through projects and internships.",
  achievements: [
  "Specialized in AI/ML and full-stack development",
  "Completed multiple industry-relevant projects",
  "Active participation in coding competitions",
  "Strong foundation in algorithms and data structures"],

  type: "education"
}];


const impactMetrics: Metric[] = [
{
  id: 1,
  icon: "ChartBarIcon",
  value: 40,
  suffix: "%",
  label: "Bounce Rate Reduction",
  color: "from-brand-green to-brand-cyan"
},
{
  id: 2,
  icon: "RocketLaunchIcon",
  value: 20,
  suffix: "%",
  label: "Performance Improvement",
  color: "from-brand-cyan to-brand-light-cyan"
},
{
  id: 3,
  icon: "CodeBracketIcon",
  value: 15,
  suffix: "+",
  label: "Projects Completed",
  color: "from-brand-purple to-brand-pink"
},
{
  id: 4,
  icon: "UserGroupIcon",
  value: 1000,
  suffix: "+",
  label: "Users Impacted",
  color: "from-brand-orange to-brand-green"
}];


const technicalPhilosophies: Philosophy[] = [
{
  id: 1,
  title: "Code with Purpose",
  description: "Every line of code should serve a clear purpose and contribute to solving real problems. I believe in writing clean, maintainable code that others can understand and build upon.",
  principles: [
  "Write self-documenting code with clear naming conventions",
  "Prioritize readability and maintainability over cleverness",
  "Implement comprehensive testing for reliability",
  "Consider scalability and performance from the start"]

},
{
  id: 2,
  title: "User-Centric Development",
  description: "Technology should serve people, not the other way around. I focus on creating intuitive, accessible experiences that solve genuine user needs and pain points.",
  principles: [
  "Conduct user research to understand real needs",
  "Design with accessibility and inclusivity in mind",
  "Iterate based on user feedback and analytics",
  "Optimize for performance across all devices"]

},
{
  id: 3,
  title: "Continuous Innovation",
  description: "The tech landscape evolves rapidly, and staying relevant means embracing change. I'm committed to learning new technologies while maintaining strong fundamentals.",
  principles: [
  "Experiment with emerging technologies and frameworks",
  "Contribute to open-source projects and communities",
  "Share knowledge through documentation and mentoring",
  "Balance innovation with proven, stable solutions"]

},
{
  id: 4,
  title: "Collaborative Excellence",
  description: "Great software is built by great teams. I value collaboration, clear communication, and creating an environment where everyone can contribute their best work.",
  principles: [
  "Practice clear and empathetic communication",
  "Share knowledge and mentor team members",
  "Embrace code reviews as learning opportunities",
  "Foster a culture of constructive feedback"]

}];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection profile={profileData} />
        <CoreValuesSection values={coreValues} />
        <ImpactMetrics metrics={impactMetrics} />
        <JourneyTimeline events={journeyEvents} />
        <TechnicalPhilosophy philosophies={technicalPhilosophies} />
        <CallToAction />
      </main>
    </div>);

}