export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface CoreValue {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Metric {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

export interface Philosophy {
  id: number;
  title: string;
  description: string;
  principles: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Languages',
    icon: 'CodeBracketIcon',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C/C++'],
    color: 'brand-cyan'
  },
  {
    id: 2,
    title: 'Backend & Frameworks',
    icon: 'ServerIcon',
    skills: ['FastAPI', 'Django', 'Node.js (Express)', 'REST APIs'],
    color: 'brand-green'
  },
  {
    id: 3,
    title: 'Automation & ERP',
    icon: 'ArrowPathIcon',
    skills: ['Odoo Customization', 'n8n Workflows', 'Automated Workflows', 'Business Logic'],
    color: 'brand-purple'
  },
  {
    id: 4,
    title: 'AI/ML & Data',
    icon: 'CpuChipIcon',
    skills: ['OpenCV', 'TensorFlow', 'Scikit-learn', 'Pandas & ETL'],
    color: 'brand-pink'
  },
  {
    id: 5,
    title: 'Databases',
    icon: 'CircleStackIcon',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'SQL Tuning'],
    color: 'brand-light-cyan'
  },
  {
    id: 6,
    title: 'Cloud & DevOps',
    icon: 'CloudIcon',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD (Actions)'],
    color: 'brand-orange'
  },
  {
    id: 7,
    title: 'Tools',
    icon: 'WrenchScrewdriverIcon',
    skills: ['Git / Version Control', 'Postman', 'Linux / Bash', 'Figma (Specs)'],
    color: 'brand-pink'
  }
];

export const coreValues: CoreValue[] = [
  {
    id: 1,
    icon: "CpuChipIcon",
    title: "Technical Excellence",
    description:
      "Commitment to writing clean, scalable, and maintainable code across AI, ML, and full-stack applications.",
    color: "from-brand-cyan to-brand-light-cyan"
  },
  {
    id: 2,
    icon: "PuzzlePieceIcon",
    title: "Problem-Solving",
    description:
      "Focused on solving real business and societal challenges through data-driven engineering and modern development practices.",
    color: "from-brand-green to-brand-cyan"
  },
  {
    id: 3,
    icon: "ServerStackIcon",
    title: "Reliability & Performance",
    description:
      "Driven by optimization and efficient architecture—improving system performance, reducing errors, and ensuring seamless deployments.",
    color: "from-brand-purple to-brand-pink"
  },
  {
    id: 4,
    icon: "BookOpenIcon",
    title: "Continuous Learning",
    description:
      "Always learning and adapting—enhancing expertise in AI, cloud, backend engineering, and modern development workflows.",
    color: "from-brand-orange to-brand-green"
  }
];

export const impactMetrics: Metric[] = [
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
  }
];

export const technicalPhilosophies: Philosophy[] = [
  {
    id: 1,
    title: "Build for Scalability",
    description:
      "I design systems that remain reliable as data, users, and features grow. Whether it's an AI pipeline, backend service, or client-facing product, scalability and performance guide my engineering decisions.",
    principles: [
      "Architect clean and modular codebases",
      "Optimize APIs, queries, and model pipelines",
      "Use proven patterns to ensure long-term maintainability",
      "Prioritize performance without compromising clarity"
    ]
  },
  {
    id: 2,
    title: "Solve Real Problems with AI & Engineering",
    description:
      "Technology should create real impact. My projects—from SafeHer's real-time detection system to robotics dashboards—focus on improving safety, efficiency, and user experience through thoughtful engineering.",
    principles: [
      "Apply AI/ML to meaningful, real-world use cases",
      "Use data-driven insights to solve business challenges",
      "Craft practical solutions instead of over-engineering",
      "Design with the end-user and the problem in mind"
    ]
  },
  {
    id: 3,
    title: "Secure, Reliable, and Clean Code",
    description:
      "Quality code is predictable, secure, and easy to maintain. From payment APIs to email automation systems, I prioritize security, reliability, and clarity in every layer of development.",
    principles: [
      "Follow secure API and auth integration best practices",
      "Write readable, well-structured, and testable code",
      "Use logs, monitoring, and validation to avoid failures",
      "Ensure reliability in real-time and production systems"
    ]
  },
  {
    id: 4,
    title: "Continuous Learning & Modern Development",
    description:
      "Technology evolves quickly. I stay updated with new tools, cloud platforms, and engineering patterns while strengthening core fundamentals through hands-on projects and industry training.",
    principles: [
      "Adapt to modern frameworks and cloud services",
      "Learn continuously through certifications & projects",
      "Apply Agile/Scrum workflows for smooth collaboration",
      "Balance new innovations with stable, proven practices"
    ]
  }
];