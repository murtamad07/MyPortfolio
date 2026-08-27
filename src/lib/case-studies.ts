export type CaseStudy = {
  title: string;
  status: string;
  overview: string;
  problem: string;
  role: string;
  responsibilities: string[];
  approach: string[];
  access: string[];
  workflow: string[];
  decisions: string[];
  challenges: string[];
  visualNote: string;
  technologies: string[];
  liveUrl?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "protected-digital-product-platform": {
    title: "Protected Digital Product Platform",
    status: "Private project",
    overview:
      "A web platform that converts digital product materials into protected, review-ready content.",
    problem:
      "Product materials needed to be delivered through authenticated web access instead of exposed as unprotected files.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Converted source materials into web-based product content.",
      "Implemented authentication, sessions, authorization, RBAC, and protected access.",
      "Set up a review-ready Vercel deployment environment.",
    ],
    approach: [
      "Next.js and TypeScript for the application layer.",
      "Supabase Auth for identity and sessions.",
      "Prisma and PostgreSQL for relational application data.",
    ],
    access: [
      "Authentication establishes the user session.",
      "Authorization and RBAC restrict protected product access.",
    ],
    workflow: [
      "Sign in, validate access, then serve protected product content.",
      "Purchasing, marketing, and customer content management were outside the reviewed scope.",
    ],
    decisions: [
      "Kept content conversion and access control as the reviewed delivery boundary.",
      "Used a review environment before broader release decisions.",
    ],
    challenges: [
      "Turning product materials into web content while preserving clear access boundaries.",
    ],
    visualNote:
      "Screenshots and architecture diagrams are intentionally omitted until sanitized assets are approved.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase Auth",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
  },
  "inspire-robotics-challenge-platform": {
    title: "Inspire Robotics Challenge Platform",
    status: "Private project",
    overview:
      "A challenge platform for registration, team formation, theme selection, approvals, and role-based administration.",
    problem:
      "Competition workflows needed one relational system for participants, teams, challenge choices, approvals, and administrators.",
    role: "Full-Stack Engineer",
    responsibilities: [
      "Built user registration, team invitations, challenge and theme selection, and approval workflows.",
      "Implemented authentication, business rules, relational data modeling, and role-based administration.",
      "Structured reusable frontend modules for participant and admin workflows.",
    ],
    approach: [
      "Next.js and TypeScript for modular participant and admin interfaces.",
      "Supabase and PostgreSQL for authentication and relational workflow data.",
    ],
    access: [
      "Authentication identifies participants and administrators.",
      "Role-based rules protect administrative actions and workflow decisions.",
    ],
    workflow: [
      "Register, form or join a team, select challenge details, then enter approval workflows.",
      "Administrative roles review and manage workflow state.",
    ],
    decisions: [
      "Modeled teams, selections, roles, and approvals as related workflow data.",
      "Separated participant and administration concerns in the frontend structure.",
    ],
    challenges: [
      "Translating incomplete business ideas into enforceable multi-role workflows.",
    ],
    visualNote:
      "Screenshots and data diagrams are withheld because the project is private; only sanitized workflow details are shown.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  "personal-finance-application": {
    title: "Personal Finance Application",
    status: "Completed · Personal use",
    overview:
      "A completed personal finance web and mobile application used privately to manage accounts, categories, transactions, and dashboard reporting.",
    problem:
      "Financial records needed a consistent relational structure and authenticated interface for day-to-day tracking.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built authentication, accounts, categories, transactions, API routes, and dashboard reporting.",
      "Designed the relational data structure for financial records.",
      "Built a React Native mobile application alongside the web experience.",
    ],
    approach: [
      "Next.js and TypeScript for the interface and API routes.",
      "React Native for the mobile application.",
      "Prisma with PostgreSQL for relational data access.",
      "Supabase for authentication and platform services.",
    ],
    access: [
      "Authentication protects each user's finance workspace.",
      "Application routes operate on authenticated financial data.",
    ],
    workflow: [
      "Set up accounts and categories, record transactions, then review dashboard reporting.",
    ],
    decisions: [
      "Kept accounts, categories, and transactions as related domain records.",
      "Delivered both web and React Native experiences for personal use.",
      "Kept commercial features and public onboarding outside the current scope.",
    ],
    challenges: [
      "Designing a consistent personal finance workflow across web and mobile interfaces.",
    ],
    visualNote:
      "Additional screenshots can be added after personal financial data has been fully sanitized.",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Prisma",
      "Supabase",
      "PostgreSQL",
    ],
    liveUrl: "https://finance.murtamadpratama.my.id",
  },
};

export function caseStudySections(study: CaseStudy) {
  return [
    ["Overview", [study.overview]],
    ["The problem", [study.problem]],
    ["My role", [study.role]],
    ["Responsibilities", study.responsibilities],
    ["Architecture / technical approach", study.approach],
    ["Authentication and authorization", study.access],
    ["Data model / workflow", study.workflow],
    ["Key technical decisions", study.decisions],
    ["Challenges", study.challenges],
    ["Current status", [study.status]],
    ["Screenshots or diagrams", [study.visualNote]],
    ["Technologies used", study.technologies],
  ] as const;
}
