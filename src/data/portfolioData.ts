import {
  CertificationItem,
  EducationItem,
  EngineeringStep,
  ExperienceItem,
  SkillCategory,
} from "@/types";

export const personalInfo = {
  name: "Dharmatej Mallampati",
  shortName: "DHARMATEJ",
  title: "Software Engineer",
  tagline: "I BUILD SOFTWARE SYSTEMS.",
  supportingLine: "Backend systems, AI applications, and data platforms.",
  heroDescription:
    "Computer Science graduate focused on building production-oriented software across backend engineering, Generative AI, retrieval systems, and data engineering.",
  about: {
    heading: "ABOUT",
    paragraph1:
      "I'm a Computer Science graduate from SRM University, Amaravati, focused on backend engineering, AI applications, and data-intensive systems.",
    paragraph2:
      "My work spans application development, Generative AI, retrieval systems, and data engineering. I enjoy taking technical problems from system design through implementation and integration.",
  },
  contact: {
    heading: "LET'S CONNECT",
    copy: "Interested in software engineering, backend systems, AI applications, or data platforms?",
    email: "dharmatej.m@srmap.edu.in",
    emailMailto: "dharmatej_m@srmap.edu.in",
    phone: "+91 9652731703",
    location: "Bangalore / Amaravati, India",
    linkedin: "https://www.linkedin.com/in/dharmatej-mallampati-47944724a/",
    github: "https://github.com/dharma0504",
    resumeUrl: "/Dharmatej_Mallampati_Resume.pdf",
  },
  compactStack: [
    "Python",
    "FastAPI",
    "React",
    "Databricks",
    "Apache Spark",
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    company: "HashedIn by Deloitte",
    role: "Software Development Engineer Intern",
    location: "Bangalore",
    period: "April 2026 – August 2026",
    honorBadge: "TOP 5 / 17 TEAMS",
    overview:
      "Contributed to full-stack application architecture, enterprise integrations, and AI-assisted workflows for production-oriented platforms.",
    areas: [
      {
        label: "APPLICATION ARCHITECTURE",
        title: "Frontend Architecture & API Contracts",
        description:
          "Designed and implemented end-to-end application architecture using React, Redux Toolkit, Python, and FastAPI, owning frontend architecture, API contracts, state management, service integration, and core application workflows.",
        technologies: ["React", "Redux Toolkit", "Python", "FastAPI"],
      },
      {
        label: "BACKEND & INTEGRATIONS",
        title: "REST APIs & Enterprise Services (PerfPilot)",
        description:
          "Engineered REST APIs and enterprise integrations with GitHub and Jira for PerfPilot, an employee lifecycle platform, designing service workflows for structured data retrieval, processing, and application-level consumption.",
        technologies: ["REST APIs", "GitHub API", "Jira API", "Python", "FastAPI"],
      },
      {
        label: "AI WORKFLOWS",
        title: "Production AI & Vector Retrieval",
        description:
          "Built AI-assisted application workflows using RAG, LLMs, vector retrieval, and Wispr-based transcription, integrating AI capabilities into production-oriented application flows with backend services and APIs.",
        technologies: ["RAG", "LLMs", "Vector Retrieval", "Wispr Transcription"],
      },
      {
        label: "DATA & SYSTEMS",
        title: "System Design & Data Engineering",
        description:
          "Worked across Databricks, SQL, Angular, FastAPI, RAG, and data engineering, contributing to system design, backend integration, application development, and end-to-end feature delivery.",
        technologies: ["Databricks", "SQL", "Angular", "FastAPI", "Data Engineering"],
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "BACKEND",
    skills: [
      { name: "Python", projects: ["AI Agent Factory", "HashedIn by Deloitte", "TheLook"] },
      { name: "FastAPI", projects: ["AI Agent Factory", "HashedIn by Deloitte"] },
      { name: "Spring Boot", projects: ["Backend Services"] },
      { name: "REST APIs", projects: ["HashedIn by Deloitte", "AI Agent Factory"] },
      { name: "JWT", projects: ["Application Security"] },
      { name: "WebSockets", projects: ["Real-Time Workflows"] },
      { name: "Docker", projects: ["Containerized Deployments"] },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", projects: ["HashedIn by Deloitte", "Portfolio Architecture"] },
      { name: "Redux Toolkit", projects: ["HashedIn by Deloitte"] },
      { name: "Angular", projects: ["HashedIn by Deloitte"] },
      { name: "TypeScript", projects: ["HashedIn by Deloitte", "Portfolio Architecture"] },
      { name: "JavaScript", projects: ["Full-Stack Applications"] },
    ],
  },
  {
    title: "AI / GENERATIVE AI",
    skills: [
      { name: "Generative AI", projects: ["AI Agent Factory", "HashedIn by Deloitte"] },
      { name: "RAG", projects: ["Nexus", "HashedIn by Deloitte"] },
      { name: "Agentic AI", projects: ["Nexus", "AI Agent Factory"] },
      { name: "LLM Applications", projects: ["Nexus", "AI Agent Factory", "HashedIn"] },
      { name: "AI Workflows", projects: ["AI Agent Factory", "HashedIn by Deloitte"] },
      { name: "Vector Search", projects: ["Nexus", "HashedIn by Deloitte"] },
      { name: "Embeddings", projects: ["Nexus"] },
    ],
  },
  {
    title: "DATA & CLOUD",
    skills: [
      { name: "Databricks", projects: ["Nexus", "TheLook", "HashedIn by Deloitte"] },
      { name: "Apache Spark", projects: ["TheLook"] },
      { name: "Delta Lake", projects: ["TheLook"] },
      { name: "Unity Catalog", projects: ["Nexus", "TheLook"] },
      { name: "Databricks Vector Search", projects: ["Nexus"] },
      { name: "dbt", projects: ["TheLook"] },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      { name: "SQLite", projects: ["AI Agent Factory"] },
      { name: "PostgreSQL", projects: ["Relational Modeling"] },
      { name: "MongoDB", projects: ["Document Store Certification"] },
      { name: "MySQL", projects: ["Relational Databases"] },
    ],
  },
  {
    title: "CORE COMPUTER SCIENCE",
    skills: [
      { name: "Data Structures & Algorithms", projects: ["Foundational Problem Solving"] },
      { name: "Operating Systems", projects: ["Concurrency & Memory Architecture"] },
      { name: "DBMS", projects: ["ACID & Relational Normalization"] },
      { name: "Computer Networks", projects: ["HTTP & TCP Protocols"] },
      { name: "Software Engineering", projects: ["System Design & Lifecycle"] },
    ],
  },
];

export const engineeringSteps: EngineeringStep[] = [
  {
    step: "01",
    title: "UNDERSTAND",
    tagline: "Define the problem and constraints.",
    description:
      "Clarify functional requirements, failure modes, data invariants, throughput expectations, and latency boundaries before writing any code.",
  },
  {
    step: "02",
    title: "DESIGN",
    tagline: "Model the system, APIs, components, and data flow.",
    description:
      "Map out system boundaries, service contracts, schema definitions, state machines, and data pipelines to ensure decoupled architecture.",
  },
  {
    step: "03",
    title: "BUILD",
    tagline: "Implement modular services and application workflows.",
    description:
      "Write clean, strongly-typed code organized into reusable modules with explicit error handling and deterministic execution paths.",
  },
  {
    step: "04",
    title: "VALIDATE",
    tagline: "Test correctness and edge cases.",
    description:
      "Verify schema adherence, boundary conditions, idempotent operations, and data transformations through rigorous validation gates.",
  },
  {
    step: "05",
    title: "OBSERVE",
    tagline: "Measure system behavior and failures.",
    description:
      "Instrument runtime flows, track pipeline execution states, log audit traces, and capture edge-case regressions under real workloads.",
  },
  {
    step: "06",
    title: "ITERATE",
    tagline: "Improve based on evidence.",
    description:
      "Refactor bottlenecks, tighten retrieval reranking precision, optimize data models, and simplify workflows based on verified feedback.",
  },
];

export const educationData: EducationItem = {
  institution: "SRM UNIVERSITY, AMARAVATI",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2022 — 2026",
  cgpa: "9.61",
  scale: "10.0",
  location: "Amaravati, Andhra Pradesh, India",
};

export const certificationsData: CertificationItem[] = [
  {
    title: "Agile Project Management",
    issuer: "Google",
  },
  {
    title: "MongoDB for Node.js Developers",
    issuer: "SmartBridge",
  },
];
