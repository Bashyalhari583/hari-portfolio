export type PortfolioData = {
  personal: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
    links: {
      github: string;
      linkedin: string;
      portfolio: string;
      twitter: string;
    };
  };
  about: {
    short: string;
    long: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    automation_qa: string[];
    devops_deployment: string[];
    seo_growth: string[];
    other: string[];
  };
  projects: Array<{
    name: string;
    role: string;
    company: string;
    stack: string[];
    problem: string;
    outcomes: string[];
    link: string;
  }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    responsibilities: string[];
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    highlights: string[];
  }>;
  certifications: string[];
  softSkills: string[];
  interests: string[];
  elevatorPitch: string;
};

import data from '@/data/portfolio.json';
export const portfolio = data as PortfolioData;
