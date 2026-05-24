export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  type: 'education' | 'work' | 'project' | 'certification';
}

export const journeyEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2025 – Present",
    title: "ERP & Automation Engineer",
    organization: "SliceNDice",
    description: "Architecting modular School ERP systems, configuring customized Odoo models, and implementing business-critical backend integrations and automated workflows.",
    achievements: [
      "Customized modular Odoo ERP dashboards and structures with a PostgreSQL backend, optimizing operations for 1,000+ administrative users",
      "Engineered automated workflows with n8n and REST APIs, eliminating manual data sync gaps and boosting process efficiency by 65%",
      "Designed and deployed responsive multi-tenant portal skins using custom CSS configurations (brand.css) for ERP views",
      "Contributed core Python/Pandas automation modules to the CleanMyData platform, reducing database preparation latency by 45%"
    ],
    type: "work"
  },
  {
    id: 2,
    year: "2024 – 2025",
    title: "Software Engineer Associate",
    organization: "Blackcoffer",
    description: "Developed production-grade backend components, Stripe payment gateways, and high-frequency automated communication microservices.",
    achievements: [
      "Built secure Stripe checkout integrations and automated customer billing lifecycles with 100% notification reliability",
      "Integrated MillionVerifier APIs into the customer signup funnel, filtering invalid accounts and dropping bounce rates by 40%",
      "Created optimized async REST endpoints using Node.js, slashing average API request latency by 20%",
      "Translated complex multi-state Figma designs into high-fidelity, mobile-first responsive React/Next.js interface layouts"
    ],
    type: "work"
  },
  {
    id: 3,
    year: "2024",
    title: "Web Developer Intern",
    organization: "UMA Robotics Technology (IIT-R Startup)",
    description: "Optimized a high-performance telemetry dashboard for real-time monitoring of industrial robots.",
    achievements: [
      "Improved telemetry load speed by 20% by implementing async REST API call optimizations and payload compression",
      "Integrated live telemetry data streams with backend Node.js APIs for real-time robot state and coordinate visualization",
      "Collaborated closely with robotics hardware engineers to design intuitive and clean dashboard status widgets",
      "Employed robust Git/GitHub workflows for clean deployment integration and codebase versioning"
    ],
    type: "work"
  },
  {
    id: 4,
    year: "2021 – 2025",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Roorkee College of Engineering",
    description: "Rigorous academic study focusing on algorithmic analysis, database management, backend system engineering, and object-oriented systems.",
    achievements: [
      "Completed intensive training in advanced Data Structures & Algorithms, database design (DBMS), and Software Architecture",
      "Built several high-grade engineering systems including computer vision and automated data pipeline projects",
      "Graduated with a strong academic performance of 75% average",
      "Actively organized tech events and hackathons within the engineering department"
    ],
    type: "education"
  }
];

export const navigationItems = [
  { label: 'Home', href: '/homepage' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Education', href: '/education' },
];

export const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];