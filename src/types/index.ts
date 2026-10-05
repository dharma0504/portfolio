export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  problem: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  system: {
    overview: string;
    architectureType: "agentic" | "rag" | "data-pipeline";
  };
  workflow: {
    step: string;
    title: string;
    description: string;
    details?: string;
  }[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
  }[];
  technologiesDetailed: {
    category: string;
    items: string[];
  }[];
  results: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  honorBadge?: string;
  overview: string;
  areas: {
    label: string;
    title: string;
    description: string;
    technologies: string[];
  }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    projects: string[];
  }[];
}

export interface EngineeringStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  scale: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
}
