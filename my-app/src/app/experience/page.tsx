import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExperienceInteractive from './components/ExperienceInteractive';

export const metadata: Metadata = {
  title: 'Professional Experience - Abhishek Portfolio Pro',
  description: 'Comprehensive career journey showcasing full-stack development expertise, AI/ML projects, and measurable business impact across leading tech companies and startups.'
};

interface Achievement {
  metric: string;
  description: string;
  icon: string;
}

interface Experience {
  id: number;
  company: string;
  logo: string;
  logoAlt: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: Achievement[];
  technologies: string[];
  highlights: string[];
}

interface SkillProgress {
  skill: string;
  level: number;
  yearStarted: string;
  category: string;
}

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

interface DownloadItem {
  title: string;
  description: string;
  icon: string;
  fileSize: string;
  format: string;
}

const mockExperiences: Experience[] = [
{
  id: 1,
  company: "Blackcoffer",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_121db0300-1763658660669.png",
  logoAlt: "Blackcoffer company logo with modern tech design in blue and white colors",
  role: "Full Stack Developer",
  duration: "Jan 2023 - Present",
  location: "Bangalore, India",
  type: "Full-time",
  description: "Leading development of enterprise-scale web applications with focus on performance optimization and user experience. Architecting scalable solutions using modern tech stack and implementing AI-driven features.",
  achievements: [
  {
    metric: "40%",
    description: "Bounce rate reduction",
    icon: "ArrowTrendingDownIcon"
  },
  {
    metric: "20%",
    description: "Performance improvement",
    icon: "BoltIcon"
  },
  {
    metric: "15+",
    description: "Features delivered",
    icon: "RocketLaunchIcon"
  }],

  technologies: [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "AWS",
  "Docker",
  "Redis",
  "GraphQL",
  "Tailwind CSS"],

  highlights: [
  "Architected and deployed microservices-based architecture reducing deployment time by 35%",
  "Implemented real-time data synchronization using WebSockets serving 10,000+ concurrent users",
  "Led migration from monolithic to microservices architecture improving system scalability",
  "Optimized database queries resulting in 50% faster page load times",
  "Mentored 3 junior developers in modern web development practices and code review processes",
  "Integrated AI/ML models for predictive analytics increasing user engagement by 25%"]

},
{
  id: 2,
  company: "UMA Robotics",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12bdd4b54-1763658662513.png",
  logoAlt: "UMA Robotics company logo featuring robotic arm design in metallic silver and blue",
  role: "Software Engineer Intern",
  duration: "Jun 2022 - Dec 2022",
  location: "Mumbai, India",
  type: "Internship",
  description: "Developed robotics control systems and automation software for industrial applications. Worked on computer vision algorithms and sensor integration for autonomous navigation systems.",
  achievements: [
  {
    metric: "30%",
    description: "Automation efficiency gain",
    icon: "CpuChipIcon"
  },
  {
    metric: "95%",
    description: "Object detection accuracy",
    icon: "EyeIcon"
  },
  {
    metric: "5",
    description: "Patents filed",
    icon: "LightBulbIcon"
  }],

  technologies: [
  "Python",
  "ROS",
  "OpenCV",
  "TensorFlow",
  "C++",
  "Arduino",
  "Raspberry Pi",
  "MQTT",
  "Linux"],

  highlights: [
  "Developed computer vision algorithms for object detection achieving 95% accuracy",
  "Built real-time sensor data processing pipeline handling 1000+ data points per second",
  "Implemented autonomous navigation system using SLAM algorithms",
  "Created web-based control interface for remote robot operation",
  "Collaborated with hardware team to integrate sensors and actuators",
  "Contributed to 5 patent applications for innovative robotics solutions"]

},
{
  id: 3,
  company: "IIT Roorkee Startup",
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1999a9995-1763658661803.png",
  logoAlt: "IIT Roorkee startup incubation center logo with academic emblem and innovation symbols",
  role: "Founding Engineer",
  duration: "Jan 2021 - May 2022",
  location: "Roorkee, India",
  type: "Startup",
  description: "Co-founded and built MVP for EdTech platform connecting students with industry mentors. Responsible for entire technical architecture, product development, and team building from ground up.",
  achievements: [
  {
    metric: "5000+",
    description: "Active users acquired",
    icon: "UsersIcon"
  },
  {
    metric: "₹2M",
    description: "Seed funding raised",
    icon: "CurrencyRupeeIcon"
  },
  {
    metric: "4.8",
    description: "App store rating",
    icon: "StarIcon"
  }],

  technologies: [
  "React Native",
  "Firebase",
  "Node.js",
  "Express",
  "PostgreSQL",
  "AWS Lambda",
  "Stripe",
  "Socket.io",
  "Redux"],

  highlights: [
  "Built complete platform from scratch serving 5000+ students and 200+ mentors",
  "Implemented video conferencing feature using WebRTC for seamless mentor sessions",
  "Designed and developed payment gateway integration processing ₹10L+ monthly transactions",
  "Created recommendation engine using collaborative filtering increasing match rate by 40%",
  "Led team of 4 developers and managed product roadmap and sprint planning",
  "Successfully raised ₹2M seed funding from angel investors and incubators"]

}];


const mockSkills: SkillProgress[] = [
{ skill: "React.js", level: 95, yearStarted: "2020", category: "Frontend" },
{ skill: "Next.js", level: 90, yearStarted: "2021", category: "Frontend" },
{ skill: "TypeScript", level: 88, yearStarted: "2021", category: "Languages" },
{ skill: "Node.js", level: 92, yearStarted: "2020", category: "Backend" },
{ skill: "Python", level: 85, yearStarted: "2019", category: "Languages" },
{ skill: "MongoDB", level: 80, yearStarted: "2020", category: "Database" },
{ skill: "AWS", level: 75, yearStarted: "2022", category: "Cloud" },
{ skill: "Docker", level: 78, yearStarted: "2021", category: "DevOps" },
{ skill: "TensorFlow", level: 70, yearStarted: "2021", category: "AI/ML" },
{ skill: "GraphQL", level: 82, yearStarted: "2022", category: "Backend" }];


const mockRecommendations: Recommendation[] = [
{
  id: 1,
  name: "Priya Sharma",
  role: "Senior Engineering Manager",
  company: "Blackcoffer",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1524059f7-1763300494995.png",
  imageAlt: "Professional headshot of Indian woman with long black hair in navy blazer smiling confidently",
  recommendation: "Abhishek is an exceptional developer who consistently delivers high-quality code. His ability to architect scalable solutions and mentor junior developers makes him invaluable to any team. He reduced our bounce rate by 40% through innovative optimization techniques.",
  relationship: "Direct Manager"
},
{
  id: 2,
  name: "Rajesh Kumar",
  role: "CTO",
  company: "UMA Robotics",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1095fa842-1763296052456.png",
  imageAlt: "Professional portrait of Indian man with short black hair and beard in formal blue shirt",
  recommendation: "Working with Abhishek was a pleasure. His expertise in computer vision and robotics software development helped us achieve 95% accuracy in our object detection systems. He's a quick learner who adapts to new technologies effortlessly.",
  relationship: "Direct Supervisor"
},
{
  id: 3,
  name: "Ananya Desai",
  role: "Product Manager",
  company: "IIT Roorkee Startup",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19205d2aa-1763296356182.png",
  imageAlt: "Professional photo of young Indian woman with shoulder-length hair in white blouse with warm smile",
  recommendation: "Abhishek's technical leadership was instrumental in our startup's success. He built our entire platform from scratch and helped us acquire 5000+ users. His product thinking combined with technical expertise is rare and valuable.",
  relationship: "Co-founder"
},
{
  id: 4,
  name: "Vikram Singh",
  role: "Lead Developer",
  company: "Blackcoffer",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_197b6085b-1763291695735.png",
  imageAlt: "Professional headshot of Indian man with short hair and glasses in grey suit jacket",
  recommendation: "Abhishek's code quality and attention to detail are outstanding. He introduced best practices that improved our team's productivity by 30%. His mentorship helped me grow significantly as a developer.",
  relationship: "Team Lead"
}];


const mockDownloads: DownloadItem[] = [
{
  title: "Detailed Work History",
  description: "Comprehensive career timeline with project case studies",
  icon: "DocumentTextIcon",
  fileSize: "2.4 MB",
  format: "PDF"
},
{
  title: "Technical Resume",
  description: "ATS-optimized resume with skills and achievements",
  icon: "DocumentChartBarIcon",
  fileSize: "856 KB",
  format: "PDF"
}];


export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-brand-cyan/20 text-brand-cyan text-sm font-medium rounded-full">
                Professional Journey
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Experience & Impact
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl">
              A comprehensive timeline of my professional journey, showcasing measurable impact, technical growth, and leadership in building scalable solutions across diverse domains.
            </p>
          </div>

          <ExperienceInteractive
            experiences={mockExperiences}
            skills={mockSkills}
            recommendations={mockRecommendations}
            downloads={mockDownloads} />

        </div>
      </main>
    </div>);

}