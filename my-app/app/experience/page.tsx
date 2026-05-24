import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExperienceInteractive from './components/ExperienceInteractive';
import Footer from '../homepage/components/Footer';

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
    company: "SliceNDice",
    logo: "/assets/images/slicendice.webp",
    logoAlt: "SliceNDice company logo",
    role: "ERP & Automation Engineer",
    duration: "June 2025 – Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Architecting modular School ERP systems, configuring customized Odoo models, and implementing business-critical backend integrations and automated workflows.",
    achievements: [
      {
        metric: "1,000+",
        description: "Administrative users supported via optimized PostgreSQL schemas and Odoo views",
        icon: "UserGroupIcon",
      },
      {
        metric: "65%",
        description: "Process automation efficiency boost using n8n workflows and REST APIs",
        icon: "BoltIcon",
      },
      {
        metric: "45%",
        description: "ETL latency reduction on the CleanMyData platform using Python/Pandas chunking",
        icon: "ArrowPathIcon",
      },
    ],
    technologies: [
      "Odoo ERP",
      "Python",
      "n8n",
      "PostgreSQL",
      "REST APIs",
      "Pandas",
      "Docker",
      "Agile/Scrum"
    ],
    highlights: [
      "Developed customized modular Odoo ERP dashboards to streamline campus operations",
      "Built multi-channel automated notification systems using n8n, saving hundreds of administrative hours",
      "Authored optimized database procedures and indexing structures in PostgreSQL to handle high-join queries",
      "Contributed robust data cleaning and validation engines to the CleanMyData internal platform"
    ]
  },
  {
    id: 2,
    company: "Blackcoffer",
    logo: "/assets/images/blackcoffer.jpg",
    logoAlt: "Blackcoffer company logo",
    role: "Software Engineer Associate",
    duration: "March 2024 – June 2025",
    location: "Bangalore, India (Remote)",
    type: "Full-time",
    description:
      "Developed production-grade payment gateways, automated mailing scripts, and low-latency API endpoints.",
    achievements: [
      {
        metric: "40%",
        description: "Registration bounce rate reduction by integrating the MillionVerifier API",
        icon: "ArrowTrendingDownIcon",
      },
      {
        metric: "100%",
        description: "Mailing system dispatch success rate via Stripe invoice webhooks",
        icon: "EnvelopeIcon",
      },
      {
        metric: "20%",
        description: "API endpoint latency reduction using Node.js async handler optimizations",
        icon: "ClockIcon",
      },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Stripe APIs",
      "MillionVerifier API",
      "REST APIs",
      "Git"
    ],
    highlights: [
      "Designed and integrated secure Stripe payment checkouts for global SaaS billing lifecycles",
      "Automated transactional notification emails with reliable serverless function webhooks",
      "Transformed complex multi-page Figma design templates into pixel-perfect responsive layouts"
    ]
  },
  {
    id: 3,
    company: "UMA Robotics Technology (IIT-R Startup)",
    logo: "/assets/images/uma.jpg",
    logoAlt: "UMA Robotics logo",
    role: "Web Developer Intern",
    duration: "March 2024 – May 2024",
    location: "Roorkee, India (Hybrid)",
    type: "Internship",
    description:
      "Optimized robot telemetry dashboard visualization interface for real-time monitoring.",
    achievements: [
      {
        metric: "20%",
        description: "Dashboard loading speed enhancement via optimized asynchronous calls",
        icon: "BoltIcon",
      },
      {
        metric: "Real-time",
        description: "Robot coordinates state telemetry dashboard rendering over REST streams",
        icon: "CpuChipIcon",
      },
    ],
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "Git",
      "Agile"
    ],
    highlights: [
      "Improved telemetry load speed by integrating payload compression and optimizing async calls",
      "Designed custom live telemetry components to map coordinates for commercial robotic arms"
    ]
  }
];


const mockSkills: SkillProgress[] = [
  { skill: "Python", level: 90, yearStarted: "2019", category: "Languages" },
  { skill: "TypeScript", level: 85, yearStarted: "2022", category: "Languages" },
  { skill: "JavaScript", level: 85, yearStarted: "2021", category: "Languages" },
  { skill: "SQL", level: 80, yearStarted: "2020", category: "Database" },
  { skill: "Odoo ERP", level: 85, yearStarted: "2024", category: "ERP & Automation" },
  { skill: "n8n Workflows", level: 90, yearStarted: "2024", category: "ERP & Automation" },
  { skill: "FastAPI", level: 80, yearStarted: "2023", category: "Backend" },
  { skill: "Django", level: 75, yearStarted: "2023", category: "Backend" },
  { skill: "Node.js", level: 80, yearStarted: "2023", category: "Backend" },
  { skill: "OpenCV", level: 75, yearStarted: "2023", category: "AI/ML" },
  { skill: "TensorFlow", level: 70, yearStarted: "2023", category: "AI/ML" },
  { skill: "AWS", level: 70, yearStarted: "2023", category: "Cloud" },
  { skill: "PostgreSQL", level: 85, yearStarted: "2022", category: "Database" }
];


const mockRecommendations: Recommendation[] = [
  {
    id: 1,
    name: "Suchit Sharma",
    role: "Founder & Director",
    company: "UMA Robotics Technology (IIT-R Startup)",
    image: "/assets/images/suchit.png",
    imageAlt: "Founder of UMA Robotics",
    recommendation:
      "Abhishek contributed significantly during his internship. He improved the robot monitoring dashboard and collaborated seamlessly with both design and development teams. His learning speed and dedication made him a reliable contributor.",
    relationship: "",
  },
  {
    id: 2,
    name: "Ryan Danisavage",
    role: "Client",
    company: "Blackcoffer Pvt. Ltd.",
    image: "/assets/images/danisavage.jpg",
    imageAlt: "Client profile photo",
    recommendation:
      "Working with Abhishek was professional and smooth. He understood requirements clearly, communicated consistently, and delivered high-quality work on time.",
    relationship: "",
  },
];


const mockDownloads: DownloadItem[] = [
{
  title: "Technical Resume",
  description: "ATS-optimized resume with skills and achievements",
  icon: "DocumentChartBarIcon",
  fileSize: "172.5 KB",
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
      <Footer />
    </div>);

}