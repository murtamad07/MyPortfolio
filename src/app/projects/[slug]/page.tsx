import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type CaseStudy = {
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
};

const caseStudies: Record<string, CaseStudy> = {
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
    status: "Ongoing",
    overview:
      "A personal finance application for accounts, categories, transactions, and dashboard reporting.",
    problem:
      "Financial records needed a consistent relational structure and authenticated interface for day-to-day tracking.",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built authentication, accounts, categories, transactions, API routes, and dashboard reporting.",
      "Designed the relational data structure for financial records.",
    ],
    approach: [
      "Next.js and TypeScript for the interface and API routes.",
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
      "Left React Native integration as a possible future phase, not a delivered feature.",
    ],
    challenges: [
      "Keeping transaction data structured for useful reporting while the product remains in development.",
    ],
    visualNote:
      "Additional screenshots and data diagrams will be added after the ongoing product reaches a review-ready state.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "PostgreSQL"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];

  return study
    ? {
        title: `${study.title} | Murtamad Pratama`,
        description: study.overview,
        alternates: { canonical: `/projects/${slug}` },
        openGraph: {
          title: `${study.title} | Murtamad Pratama`,
          description: study.overview,
          url: `/projects/${slug}`,
        },
      }
    : {};
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const study = caseStudies[(await params).slug];

  if (!study) notFound();

  const sections = [
    ["Overview", [study.overview]],
    ["The problem", [study.problem]],
    ["My role", [study.role]],
    ["Responsibilities", study.responsibilities],
    ["Architecture or technical approach", study.approach],
    ["Authentication and authorization", study.access],
    ["Data model or workflow", study.workflow],
    ["Key technical decisions", study.decisions],
    ["Challenges", study.challenges],
    ["Current status", [study.status]],
    ["Screenshots or diagrams", [study.visualNote]],
    ["Technologies used", study.technologies],
  ] as const;

  return (
    <main className="min-h-screen bg-[#061523] px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
        >
          ← Back to selected work
        </Link>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Sanitized case study
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 text-slate-400">{study.status}</p>

        <div className="mt-12 grid gap-5">
          {sections.map(([title, items]) => (
            <section
              key={title}
              className="rounded-xl border border-white/10 bg-slate-950/65 p-6"
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              {items.length === 1 ? (
                <p className="mt-4 leading-7 text-slate-300">{items[0]}</p>
              ) : (
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-emerald-400">
                  {items.map((item) => (
                    <li key={item} className="pl-1 leading-7 text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
