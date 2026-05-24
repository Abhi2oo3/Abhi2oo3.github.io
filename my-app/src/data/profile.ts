export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  image: string;
  alt: string;
  mission: string;
  socialLinks: SocialLink[];
}

export const profile: ProfileData = {
  name: "Abhishek Dixit",
  tagline: "Software Engineer | Backend Systems & ERP Architect | Workflow Automation",
  image: "/assets/images/AD.jpg",
  alt: "Professional headshot of Abhishek Dixit, Software Engineer specializing in backend systems and workflow automation",
  mission: "I architect and build scalable backend systems, customized ERP platforms, and multi-channel workflow automations that drive operational efficiency. With hands-on experience in Odoo customizations, n8n automations, high-performance REST APIs, and production-ready software engineering, I bridge the gap between complex technical requirements and reliable, business-critical software solutions.",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Abhi2oo3",
      icon: "/assets/images/github-octocat-svgrepo-com (2).svg",
      ariaLabel: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-dixit03/",
      icon: "/assets/images/linkedin-svgrepo-com.svg",
      ariaLabel: "LinkedIn Profile"
    }
  ]
};

export const codeSnippets = [
  { language: 'Python', code: 'def solve_problem():\n    return innovation + impact' },
  { language: 'JavaScript', code: 'const buildFuture = () => {\n  return code + creativity;\n};' },
  { language: 'TypeScript', code: 'interface Developer {\n  skills: string[];\n  passion: boolean;\n}' }
];