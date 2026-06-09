"use client";

import { useState, type ReactNode } from "react";
import Header from "@/components/Header";
import {
  IoBriefcaseOutline,
  IoBuildOutline,
  IoCheckmarkCircleOutline,
  IoCloudUploadOutline,
  IoCodeSlashOutline,
  IoGitBranchOutline,
  IoGlobeOutline,
  IoLayersOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLocationOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoPhonePortraitOutline,
  IoRocketOutline,
  IoServerOutline,
  IoSettingsOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";

type Language = "en" | "id";

type Project = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  progress: number;
  visual: string;
};

type Service = {
  title: string;
  icon: IconType;
  description: string;
};

type Social = {
  label: string;
  icon: IconType;
  href: string;
  external: boolean;
};

type Metric = {
  label: string;
  value: string;
  icon: IconType;
};

type Reason = {
  title: string;
  subtitle: string;
  icon: IconType;
};

const socialLinks: Social[] = [
  {
    label: "GitHub",
    icon: IoLogoGithub,
    href: "https://github.com/murtamad07/",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/murtamadpratama/",
    external: true,
  },
  {
    label: "Email",
    icon: IoMailOutline,
    href: "mailto:murtamad501@gmail.com",
    external: false,
  },
  {
    label: "WhatsApp",
    icon: IoLogoWhatsapp,
    href: "https://wa.me/6285762835973",
    external: true,
  },
];

const techStack = [
  "TS",
  "JS",
  "React",
  "Next",
  "RN",
  "Nest",
  "SQL",
  "Prisma",
  "Supa",
  "O11",
];

const content = {
  en: {
    navItems: [
      { label: "About Me", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    headerConnect: "Let's Connect",
    heroStats: [
      { label: "Location", value: "Medan, Indonesia", icon: IoLocationOutline },
      { label: "Experience", value: "3+ Years", icon: IoBriefcaseOutline },
      {
        label: "Focus",
        value: "Enterprise & Full-Stack Apps",
        icon: IoCodeSlashOutline,
      },
      { label: "Collaboration", value: "Remote Ready", icon: IoPeopleOutline },
    ] satisfies Metric[],
    focusItems: [
      "Enterprise workflow implementation",
      "Authentication, RBAC, and session management",
      "AI-assisted full-stack development",
      "Scalable frontend, backend, and database architecture",
    ],
    experiences: [
      {
        role: "Software Engineer (End-to-End Development & Technical Ownership)",
        period: "Nov 2025 - Present",
        type: "Construct-X Indonesia",
        details: [
          "Led end-to-end application development including frontend, backend, authentication, and database architecture.",
          "Built backend services using NestJS, REST APIs, and PostgreSQL-based architecture.",
          "Implemented frontend and mobile features using Next.js and React Native.",
          "Leveraged AI-assisted workflows for development acceleration and technical documentation.",
        ],
      },
      {
        role: "Enterprise OutSystems Developer",
        period: "Aug 2022 - Oct 2025",
        type: "Wilmar Consultancy Services (WCS)",
        details: [
          "Maintained and supported 8 enterprise applications used globally.",
          "Designed and developed enterprise-grade solutions using OutSystems Reactive and Traditional Web.",
          "Built reusable OTP modules and SSO proof-of-concepts.",
          "Led large-scale production migration with zero downtime.",
        ],
      },
      {
        role: "3D Model Data Processing (VCM Staff)",
        period: "Jul 2019 - Aug 2022",
        type: "Construct-X",
        details: [
          "Processed and analyzed 3D model data.",
          "Conducted software testing and validation.",
          "Created internal documentation and job aids to assist data preparation and system support.",
        ],
      },
      {
        role: "Administration Staff",
        period: "Nov 2015 - Nov 2016",
        type: "CV. Dwi Tunggal",
        details: [
          "Managed contracts and company documentation.",
          "Assisted procurement and client communication, conducting site surveys and material analysis.",
        ],
      },
    ],
    skills: [
      { name: "OutSystems O11", value: 90 },
      { name: "TypeScript & JavaScript", value: 82 },
      { name: "React.js & Next.js", value: 80 },
      { name: "React Native", value: 70 },
      { name: "NestJS & REST APIs", value: 74 },
      { name: "PostgreSQL, Prisma & Supabase", value: 76 },
      { name: "System Design, RBAC & Auth", value: 78 },
      { name: "AI-Assisted Development Workflow", value: 85 },
    ],
    projects: [
      {
        title: "Personal Finance App",
        status: "Ongoing",
        description:
          "Subscription-based personal finance platform with authentication, transaction tracking, and scalable database architecture.",
        tags: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth"],
        progress: 62,
        visual: "finance",
      },
      {
        title: "Inspire Robotics Challenges Platform",
        status: "Architecture",
        description:
          "End-to-end challenge and investment management platform architecture with RBAC, authentication flow, and transaction lifecycle.",
        tags: ["System Design", "RBAC", "Auth", "Frontend", "Backend"],
        progress: 78,
        visual: "challenge",
      },
      {
        title: "Enterprise OTP & SSO Modules",
        status: "Enterprise",
        description:
          "Reusable authentication modules and single sign-on proof-of-concepts for enterprise applications built around OutSystems workflows.",
        tags: ["OutSystems O11", "SSO", "OTP", "Enterprise Apps"],
        progress: 90,
        visual: "dashboard",
      },
    ] satisfies Project[],
    roadmap: [
      {
        quarter: "2015 - 2016",
        title:
          "Administration Staff at CV. Dwi Tunggal, handling contracts, documentation, procurement, and client communication",
      },
      {
        quarter: "2019 - 2022",
        title:
          "3D Model Data Processing VCM Staff at Construct-X, focused on model data, software testing, validation, and job aids",
      },
      {
        quarter: "2022 - 2025",
        title:
          "Enterprise OutSystems Developer at WCS, supporting global apps, reusable modules, SSO proof-of-concepts, and production migration",
      },
      {
        quarter: "2025 - Present",
        title:
          "Software Engineer at Construct-X Indonesia, owning frontend, backend, authentication, database architecture, and AI-assisted delivery",
      },
    ],
    services: [
      {
        title: "Full-Stack Web App Development",
        icon: IoCodeSlashOutline,
        description:
          "End-to-end product development using modern frontend, backend, and database architecture.",
      },
      {
        title: "Backend API & Database Architecture",
        icon: IoServerOutline,
        description:
          "REST API development, PostgreSQL-based architecture, Prisma ORM, and scalable data modeling.",
      },
      {
        title: "Authentication, RBAC & Sessions",
        icon: IoShieldCheckmarkOutline,
        description:
          "Role-based access control, authentication flow, session management, OTP, and SSO concepts.",
      },
      {
        title: "Enterprise OutSystems Development",
        icon: IoLayersOutline,
        description:
          "Reactive and Traditional Web development, reusable modules, deployment, and production support.",
      },
      {
        title: "Mobile App Development",
        icon: IoPhonePortraitOutline,
        description:
          "Cross-platform mobile features using React Native connected to reliable backend services.",
      },
      {
        title: "AI-Assisted Engineering Workflow",
        icon: IoSparklesOutline,
        description:
          "Faster prototyping, architecture planning, debugging, and technical documentation with AI tooling.",
      },
      {
        title: "System Design & Technical Ownership",
        icon: IoGitBranchOutline,
        description:
          "Translating business ideas into technical workflows, system design, and implementation plans.",
      },
      {
        title: "Deployment & Enterprise Support",
        icon: IoCloudUploadOutline,
        description:
          "Application support, production troubleshooting, migration planning, and release coordination.",
      },
      {
        title: "Automation Development & Testing",
        icon: IoSettingsOutline,
        description:
          "UiPath automation development, testing support, and workflow efficiency improvements.",
      },
    ] satisfies Service[],
    reasons: [
      {
        title: "3+ Years",
        subtitle: "Enterprise Engineering",
        icon: IoBriefcaseOutline,
      },
      {
        title: "8 Apps",
        subtitle: "Global Application Support",
        icon: IoGlobeOutline,
      },
      {
        title: "O11 Certified",
        subtitle: "Reactive Developer",
        icon: IoCheckmarkCircleOutline,
      },
      {
        title: "Full-Stack",
        subtitle: "Web, Mobile & Backend",
        icon: IoCodeSlashOutline,
      },
      {
        title: "AI-Assisted",
        subtitle: "Planning, Debugging & Docs",
        icon: IoSparklesOutline,
      },
    ] satisfies Reason[],
    credentials: [
      {
        name: "Education",
        title: "Universitas Pembangunan Panca Budi Medan",
        meta: "Computer Science, Sains & Technology | 2016 - 2021",
        features: ["GPA: 3.81 / 4.00"],
      },
      {
        name: "Certifications",
        title: "Professional Certifications",
        meta: "OutSystems, BNSP, and Dicoding Academy",
        features: [
          "OutSystems Associate Reactive Developer O11 (2024)",
          "Junior Graphic Designer Certification - BNSP (2020)",
          "Memulai Pemrograman Dengan Java - Dicoding Academy (2021)",
        ],
      },
      {
        name: "Languages",
        title: "Communication",
        meta: "Indonesian and English",
        features: [
          "Indonesian - Native",
          "English - Professional Working Proficiency",
        ],
      },
    ],
    ui: {
      profileBadge: "Software Engineer",
      heroIntro: "Hi, I'm",
      heroSummary:
        "Software Engineer with 3+ years of experience in enterprise application development, remote collaboration, and end-to-end system ownership.",
      aboutTitle: "About Me",
      aboutBody:
        "Software Engineer with 3+ years of experience in enterprise application development, remote collaboration, and end-to-end system ownership. Strong background in enterprise software development using OutSystems Reactive and Traditional Web technologies, including authentication systems, reusable modules, deployment management, production troubleshooting, and enterprise workflow implementation. Experienced in translating business ideas into scalable technical solutions, including workflow design, role-based access control (RBAC), authentication flow, database structure, API architecture, and frontend/backend implementation. Currently transitioning into modern AI-assisted full-stack engineering using Next.js, React, TypeScript, React Native, NestJS, PostgreSQL, Prisma, and Supabase while leveraging AI-assisted development workflows to accelerate prototyping, architecture planning, debugging, and technical documentation.",
      currentFocusTitle: "Current Focus",
      experienceTitle: "Experience",
      skillsTitle: "Skills",
      techStackTitle: "Tech Stack",
      quote: "Building today what solves tomorrow.",
      workLabel: "My Work",
      projectsTitle: "Projects & Platform Work",
      projectsDescription:
        "Product, architecture, and enterprise work from my CV.",
      projectFilters: ["All", "Ongoing", "Architecture", "Enterprise"],
      progressLabel: "Progress",
      viewDetails: "View Details",
      challengeSubtitle: "Challenge and investment platform",
      challengeButton: "View Architecture",
      careerHighlightsTitle: "Career Highlights",
      projectCtaTitle:
        "I turn business workflows into reliable software systems.",
      projectCtaDescription:
        "Enterprise experience, modern full-stack tools, and AI-assisted delivery.",
      projectCtaButton: "Let's Connect",
      servicesLabel: "What I Do",
      servicesHeadingAccent: "Engineering",
      servicesHeadingText: "Work",
      servicesHeadingLine: "with",
      servicesHeadingLineAccent: "Business Context",
      servicesIntro:
        "I help design and build applications that connect business needs with technical implementation: workflows, authentication, databases, APIs, frontend, mobile, deployment, and production support.",
      capabilitiesTitle: "Core Capabilities",
      reasonsTitle: "Why Work With Me?",
      credentialsTitle: "Education, Certifications & Languages",
      contactTitle: "Let's build something reliable.",
      contactDescription:
        "Open to software engineering roles, remote collaboration, and product-focused projects.",
      contactButton: "Email Me",
      footerRights: "All rights reserved.",
    },
  },
  id: {
    navItems: [
      { label: "Tentang Saya", href: "#about" },
      { label: "Proyek", href: "#projects" },
      { label: "Layanan", href: "#services" },
      { label: "Kontak", href: "#contact" },
    ],
    headerConnect: "Kontak",
    heroStats: [
      { label: "Lokasi", value: "Medan, Indonesia", icon: IoLocationOutline },
      { label: "Pengalaman", value: "3+ Tahun", icon: IoBriefcaseOutline },
      {
        label: "Fokus",
        value: "Enterprise & Full-Stack Apps",
        icon: IoCodeSlashOutline,
      },
      { label: "Kolaborasi", value: "Siap Remote", icon: IoPeopleOutline },
    ] satisfies Metric[],
    focusItems: [
      "Implementasi workflow enterprise",
      "Autentikasi, RBAC, dan session management",
      "Pengembangan full-stack dengan bantuan AI",
      "Arsitektur frontend, backend, dan database yang scalable",
    ],
    experiences: [
      {
        role: "Software Engineer (Pengembangan End-to-End & Kepemilikan Teknis)",
        period: "Nov 2025 - Sekarang",
        type: "Construct-X Indonesia",
        details: [
          "Memimpin pengembangan aplikasi end-to-end mencakup frontend, backend, autentikasi, dan arsitektur database.",
          "Membangun layanan backend menggunakan NestJS, REST API, dan arsitektur berbasis PostgreSQL.",
          "Mengimplementasikan fitur frontend dan mobile menggunakan Next.js dan React Native.",
          "Memanfaatkan workflow berbantuan AI untuk mempercepat development dan dokumentasi teknis.",
        ],
      },
      {
        role: "Enterprise OutSystems Developer",
        period: "Agu 2022 - Okt 2025",
        type: "Wilmar Consultancy Services (WCS)",
        details: [
          "Melakukan maintenance dan support untuk 8 aplikasi enterprise yang digunakan secara global.",
          "Merancang dan membangun solusi enterprise menggunakan OutSystems Reactive dan Traditional Web.",
          "Membangun reusable OTP modules dan proof-of-concepts untuk SSO.",
          "Memimpin migrasi produksi berskala besar dengan zero downtime.",
        ],
      },
      {
        role: "3D Model Data Processing (VCM Staff)",
        period: "Jul 2019 - Agu 2022",
        type: "Construct-X",
        details: [
          "Memproses dan menganalisis data model 3D.",
          "Melakukan software testing dan validasi.",
          "Membuat dokumentasi internal dan job aids untuk membantu persiapan data serta support sistem.",
        ],
      },
      {
        role: "Administration Staff",
        period: "Nov 2015 - Nov 2016",
        type: "CV. Dwi Tunggal",
        details: [
          "Mengelola kontrak dan dokumentasi perusahaan.",
          "Membantu procurement dan komunikasi klien, termasuk site survey dan analisis material.",
        ],
      },
    ],
    skills: [
      { name: "OutSystems O11", value: 90 },
      { name: "TypeScript & JavaScript", value: 82 },
      { name: "React.js & Next.js", value: 80 },
      { name: "React Native", value: 70 },
      { name: "NestJS & REST APIs", value: 74 },
      { name: "PostgreSQL, Prisma & Supabase", value: 76 },
      { name: "System Design, RBAC & Autentikasi", value: 78 },
      { name: "Workflow Development Berbantuan AI", value: 85 },
    ],
    projects: [
      {
        title: "Personal Finance App",
        status: "Berjalan",
        description:
          "Platform keuangan pribadi berbasis subscription dengan autentikasi, pencatatan transaksi, dan arsitektur database yang scalable.",
        tags: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth"],
        progress: 62,
        visual: "finance",
      },
      {
        title: "Inspire Robotics Challenges Platform",
        status: "Arsitektur",
        description:
          "Arsitektur platform challenge dan investment management end-to-end dengan RBAC, authentication flow, dan transaction lifecycle.",
        tags: ["System Design", "RBAC", "Auth", "Frontend", "Backend"],
        progress: 78,
        visual: "challenge",
      },
      {
        title: "Enterprise OTP & SSO Modules",
        status: "Enterprise",
        description:
          "Reusable authentication modules dan proof-of-concepts SSO untuk aplikasi enterprise berbasis workflow OutSystems.",
        tags: ["OutSystems O11", "SSO", "OTP", "Enterprise Apps"],
        progress: 90,
        visual: "dashboard",
      },
    ] satisfies Project[],
    roadmap: [
      {
        quarter: "2015 - 2016",
        title:
          "Administration Staff di CV. Dwi Tunggal, menangani kontrak, dokumentasi, procurement, dan komunikasi klien",
      },
      {
        quarter: "2019 - 2022",
        title:
          "3D Model Data Processing VCM Staff di Construct-X, berfokus pada data model, software testing, validasi, dan job aids",
      },
      {
        quarter: "2022 - 2025",
        title:
          "Enterprise OutSystems Developer di WCS, mendukung aplikasi global, reusable modules, SSO proof-of-concepts, dan migrasi produksi",
      },
      {
        quarter: "2025 - Sekarang",
        title:
          "Software Engineer di Construct-X Indonesia, menangani frontend, backend, autentikasi, arsitektur database, dan delivery berbantuan AI",
      },
    ],
    services: [
      {
        title: "Pengembangan Web App Full-Stack",
        icon: IoCodeSlashOutline,
        description:
          "Pengembangan produk end-to-end menggunakan frontend, backend, dan arsitektur database modern.",
      },
      {
        title: "Backend API & Arsitektur Database",
        icon: IoServerOutline,
        description:
          "REST API development, arsitektur berbasis PostgreSQL, Prisma ORM, dan data modeling yang scalable.",
      },
      {
        title: "Autentikasi, RBAC & Sessions",
        icon: IoShieldCheckmarkOutline,
        description:
          "Role-based access control, authentication flow, session management, OTP, dan konsep SSO.",
      },
      {
        title: "Enterprise OutSystems Development",
        icon: IoLayersOutline,
        description:
          "Pengembangan Reactive dan Traditional Web, reusable modules, deployment, dan production support.",
      },
      {
        title: "Pengembangan Mobile App",
        icon: IoPhonePortraitOutline,
        description:
          "Fitur mobile cross-platform menggunakan React Native yang terhubung dengan backend yang reliable.",
      },
      {
        title: "AI-Assisted Engineering Workflow",
        icon: IoSparklesOutline,
        description:
          "Prototyping, perencanaan arsitektur, debugging, dan dokumentasi teknis yang lebih cepat dengan AI tooling.",
      },
      {
        title: "System Design & Technical Ownership",
        icon: IoGitBranchOutline,
        description:
          "Menerjemahkan ide bisnis menjadi workflow teknis, system design, dan rencana implementasi.",
      },
      {
        title: "Deployment & Enterprise Support",
        icon: IoCloudUploadOutline,
        description:
          "Application support, production troubleshooting, perencanaan migrasi, dan koordinasi release.",
      },
      {
        title: "Automation Development & Testing",
        icon: IoSettingsOutline,
        description:
          "UiPath automation development, testing support, dan peningkatan efisiensi workflow.",
      },
    ] satisfies Service[],
    reasons: [
      {
        title: "3+ Tahun",
        subtitle: "Enterprise Engineering",
        icon: IoBriefcaseOutline,
      },
      {
        title: "8 Apps",
        subtitle: "Global Application Support",
        icon: IoGlobeOutline,
      },
      {
        title: "O11 Certified",
        subtitle: "Reactive Developer",
        icon: IoCheckmarkCircleOutline,
      },
      {
        title: "Full-Stack",
        subtitle: "Web, Mobile & Backend",
        icon: IoCodeSlashOutline,
      },
      {
        title: "AI-Assisted",
        subtitle: "Planning, Debugging & Docs",
        icon: IoSparklesOutline,
      },
    ] satisfies Reason[],
    credentials: [
      {
        name: "Pendidikan",
        title: "Universitas Pembangunan Panca Budi Medan",
        meta: "Computer Science, Sains & Technology | 2016 - 2021",
        features: ["GPA: 3.81 / 4.00"],
      },
      {
        name: "Sertifikasi",
        title: "Sertifikasi Profesional",
        meta: "OutSystems, BNSP, dan Dicoding Academy",
        features: [
          "OutSystems Associate Reactive Developer O11 (2024)",
          "Junior Graphic Designer Certification - BNSP (2020)",
          "Memulai Pemrograman Dengan Java - Dicoding Academy (2021)",
        ],
      },
      {
        name: "Bahasa",
        title: "Komunikasi",
        meta: "Indonesia dan Inggris",
        features: [
          "Bahasa Indonesia - Native",
          "Bahasa Inggris - Professional Working Proficiency",
        ],
      },
    ],
    ui: {
      profileBadge: "Software Engineer",
      heroIntro: "Halo, saya",
      heroSummary:
        "Software Engineer dengan pengalaman 3+ tahun dalam pengembangan aplikasi enterprise, kolaborasi remote, dan kepemilikan sistem end-to-end.",
      aboutTitle: "Tentang Saya",
      aboutBody:
        "Software Engineer dengan pengalaman 3+ tahun dalam pengembangan aplikasi enterprise, kolaborasi remote, dan kepemilikan sistem end-to-end. Memiliki latar belakang kuat dalam pengembangan software enterprise menggunakan OutSystems Reactive dan Traditional Web, termasuk sistem autentikasi, reusable modules, deployment management, production troubleshooting, dan implementasi workflow enterprise. Terbiasa menerjemahkan ide bisnis menjadi solusi teknis yang scalable, termasuk workflow design, role-based access control (RBAC), authentication flow, struktur database, arsitektur API, dan implementasi frontend/backend. Saat ini bertransisi ke modern AI-assisted full-stack engineering menggunakan Next.js, React, TypeScript, React Native, NestJS, PostgreSQL, Prisma, dan Supabase dengan memanfaatkan workflow berbantuan AI untuk mempercepat prototyping, perencanaan arsitektur, debugging, dan dokumentasi teknis.",
      currentFocusTitle: "Fokus Saat Ini",
      experienceTitle: "Pengalaman",
      skillsTitle: "Keahlian",
      techStackTitle: "Tech Stack",
      quote: "Membangun hari ini untuk solusi esok hari.",
      workLabel: "Karya Saya",
      projectsTitle: "Proyek & Platform Work",
      projectsDescription:
        "Produk, arsitektur, dan pengalaman enterprise dari CV saya.",
      projectFilters: ["Semua", "Berjalan", "Arsitektur", "Enterprise"],
      progressLabel: "Progress",
      viewDetails: "Lihat Detail",
      challengeSubtitle: "Platform challenge dan investment",
      challengeButton: "Lihat Arsitektur",
      careerHighlightsTitle: "Perjalanan Karier",
      projectCtaTitle:
        "Saya mengubah workflow bisnis menjadi sistem software yang reliable.",
      projectCtaDescription:
        "Pengalaman enterprise, modern full-stack tools, dan delivery berbantuan AI.",
      projectCtaButton: "Hubungi Saya",
      servicesLabel: "Yang Saya Kerjakan",
      servicesHeadingAccent: "Engineering",
      servicesHeadingText: "Work",
      servicesHeadingLine: "dengan",
      servicesHeadingLineAccent: "Konteks Bisnis",
      servicesIntro:
        "Saya membantu merancang dan membangun aplikasi yang menghubungkan kebutuhan bisnis dengan implementasi teknis: workflow, autentikasi, database, API, frontend, mobile, deployment, dan support produksi.",
      capabilitiesTitle: "Core Capabilities",
      reasonsTitle: "Kenapa Bekerja Dengan Saya?",
      credentialsTitle: "Pendidikan, Sertifikasi & Bahasa",
      contactTitle: "Mari bangun sesuatu yang reliable.",
      contactDescription:
        "Terbuka untuk role software engineering, kolaborasi remote, dan project berbasis produk.",
      contactButton: "Email Saya",
      footerRights: "Hak cipta dilindungi.",
    },
  },
};

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-md border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-xs font-semibold text-emerald-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: IconType;
  label: string;
  value: string;
}) {
  const Icon = icon;

  return (
    <div className="flex items-center gap-3 border-white/10 px-1 py-2 sm:border-r sm:last:border-r-0">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-lg text-emerald-300">
        <Icon aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="mt-1 text-sm font-semibold leading-tight text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function ProfileVisual({ label }: { label: string }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-emerald-950/40">
      <img src={`assets/PhotoProfile.png`}></img>
      <div className="absolute right-6 top-6 rounded-md border border-emerald-400/20 bg-black/50 px-3 py-2 text-[10px] font-semibold text-emerald-300 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function ProgressRing({ value }: { value: number }) {
  return (
    <div
      className="grid h-24 w-24 place-items-center rounded-full p-2 shadow-[0_0_28px_rgba(52,211,153,0.12)]"
      style={{
        background: `conic-gradient(#34d399 ${value * 3.6}deg, rgba(30,41,59,0.9) 0deg)`,
      }}
    >
      <div className="grid h-full w-full place-items-center rounded-full bg-slate-950 text-xl font-bold text-white">
        {value}%
      </div>
    </div>
  );
}

function FinanceVisual() {
  return (
    <div className="relative h-full min-h-64 overflow-hidden rounded-lg bg-[radial-gradient(circle_at_48%_54%,rgba(16,185,129,0.28),transparent_38%),linear-gradient(135deg,#020617,#0f172a)] p-6">
      <div className="absolute left-9 top-8 h-52 w-28 -rotate-12 rounded-[1.6rem] border border-emerald-300/25 bg-black p-2 shadow-2xl shadow-emerald-900/40">
        <div className="h-full rounded-[1.15rem] bg-slate-950 p-3">
          <div className="mb-3 h-3 w-16 rounded-full bg-emerald-400/70" />
          <div className="space-y-2">
            <div className="h-16 rounded-md bg-emerald-400/10" />
            <div className="h-3 rounded-full bg-slate-700" />
            <div className="h-3 w-3/4 rounded-full bg-slate-800" />
            <div className="grid grid-cols-3 gap-1 pt-2">
              <span className="h-14 rounded bg-emerald-400/30" />
              <span className="h-10 rounded bg-emerald-400/20" />
              <span className="h-16 rounded bg-emerald-400/40" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 h-52 w-32 rotate-6 rounded-[1.7rem] border border-sky-300/25 bg-black p-2 shadow-2xl">
        <div className="h-full rounded-[1.2rem] bg-slate-950 p-3">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-3 w-10 rounded bg-sky-400/70" />
            <span className="h-6 w-6 rounded-full bg-emerald-400/80" />
          </div>
          <div className="h-16 rounded-md bg-sky-400/10" />
          <div className="mt-3 space-y-2">
            <span className="block h-3 rounded-full bg-slate-700" />
            <span className="block h-3 w-2/3 rounded-full bg-slate-800" />
            <span className="block h-8 rounded-md bg-emerald-400/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChallengeVisual({
  subtitle,
  buttonLabel,
}: {
  subtitle: string;
  buttonLabel: string;
}) {
  return (
    <div className="relative flex h-full min-h-64 items-end overflow-hidden rounded-lg bg-[linear-gradient(145deg,#0b0f0f,#171717_55%,#020617)] p-6">
      <div className="absolute inset-x-8 top-12 h-px bg-slate-500/70" />
      {[0, 1, 2, 3].map((item) => (
        <div
          key={item}
          className="absolute top-12 h-28 w-16 rounded-b-[2rem] bg-gradient-to-b from-emerald-600 to-slate-950 shadow-xl"
          style={{ left: `${58 + item * 34}px` }}
        >
          <span className="absolute -top-5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-t-full border-t border-l border-emerald-300" />
        </div>
      ))}
      <div className="relative z-10 max-w-44">
        <p className="text-3xl font-bold text-white">Inspire Robotics</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-300">
          {subtitle}
        </p>
        <button className="mt-5 rounded-md bg-white px-4 py-2 text-xs font-bold text-slate-950">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="h-full min-h-64 overflow-hidden rounded-lg bg-slate-950 p-4">
      <div className="h-full rounded-md border border-slate-700 bg-white p-3 shadow-2xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-3 h-3 w-24 rounded-full bg-slate-200" />
        </div>
        <div className="grid h-[calc(100%-1.5rem)] grid-cols-[64px_1fr] gap-3">
          <div className="rounded-md bg-slate-900 p-2">
            <span className="mb-4 block h-5 w-8 rounded bg-emerald-400" />
            {[0, 1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="mb-3 block h-2 rounded bg-slate-700"
              />
            ))}
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-16 rounded-md bg-slate-100 p-3">
                  <span className="block h-3 w-10 rounded bg-slate-300" />
                  <span className="mt-3 block h-4 w-14 rounded bg-emerald-200" />
                </div>
              ))}
            </div>
            <div className="h-28 rounded-md bg-slate-100 p-4">
              <div className="flex h-full items-end gap-2">
                {[32, 56, 40, 72, 48, 88, 64].map((height) => (
                  <span
                    key={height}
                    className="flex-1 rounded-t bg-emerald-400"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({
  type,
  labels,
}: {
  type: string;
  labels: { challengeSubtitle: string; challengeButton: string };
}) {
  if (type === "challenge") {
    return (
      <ChallengeVisual
        subtitle={labels.challengeSubtitle}
        buttonLabel={labels.challengeButton}
      />
    );
  }

  if (type === "dashboard") {
    return <DashboardVisual />;
  }

  return <FinanceVisual />;
}

function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: {
    challengeSubtitle: string;
    challengeButton: string;
    progressLabel: string;
    viewDetails: string;
  };
}) {
  return (
    <article className="grid gap-5 rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/30 md:grid-cols-[1fr_1.1fr_120px]">
      <ProjectVisual type={project.visual} labels={labels} />
      <div className="flex flex-col justify-center">
        <Badge>{project.status}</Badge>
        <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 border-white/10 md:flex-col md:justify-center md:border-l md:pl-5">
        <div className="text-center">
          <ProgressRing value={project.progress} />
          <p className="mt-3 text-xs text-slate-400">{labels.progressLabel}</p>
        </div>
        <a
          href="#contact"
          className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-xs font-bold text-emerald-300 transition hover:bg-emerald-400/15"
        >
          {labels.viewDetails}
        </a>
      </div>
    </article>
  );
}

function ServiceDevice() {
  return (
    <div className="relative mx-auto min-h-72 w-full max-w-lg">
      <div className="absolute left-1/2 top-14 h-44 w-80 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-950 p-3 shadow-2xl shadow-emerald-950/40 sm:w-96">
        <div className="h-full rounded-md border border-slate-800 bg-[linear-gradient(135deg,#111827,#020617)] p-4">
          <div className="mb-4 flex justify-between">
            <span className="h-3 w-20 rounded-full bg-emerald-400/70" />
            <span className="h-3 w-12 rounded-full bg-slate-700" />
          </div>
          <div className="grid grid-cols-[0.7fr_1fr] gap-4">
            <div className="space-y-2">
              {[0, 1, 2, 3, 4].map((item) => (
                <span key={item} className="block h-5 rounded bg-slate-800" />
              ))}
            </div>
            <div className="rounded-md bg-white p-3">
              <div className="mb-3 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((item) => (
                  <span key={item} className="h-8 rounded bg-emerald-100" />
                ))}
              </div>
              <div className="space-y-2">
                {[0, 1, 2, 3].map((item) => (
                  <span key={item} className="block h-3 rounded bg-slate-200" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 h-8 w-[88%] -translate-x-1/2 rounded-b-[2rem] bg-gradient-to-b from-slate-800 to-slate-950" />
      <div className="absolute left-2 top-28 rounded-lg border border-emerald-400/20 bg-slate-950/85 p-4 shadow-xl backdrop-blur">
        <IoSparklesOutline
          aria-hidden="true"
          className="text-xl text-emerald-300"
        />
      </div>
      <div className="absolute right-4 top-12 rounded-lg border border-emerald-400/20 bg-slate-950/85 p-4 shadow-xl backdrop-blur">
        <IoPeopleOutline
          aria-hidden="true"
          className="text-xl text-emerald-300"
        />
      </div>
      <div className="absolute bottom-14 right-0 rounded-lg border border-emerald-400/20 bg-slate-950/85 p-4 shadow-xl backdrop-blur">
        <IoBuildOutline
          aria-hidden="true"
          className="text-xl text-emerald-300"
        />
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]">
      <span className="grid h-10 w-10 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-xl text-emerald-300">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {service.description}
      </p>
    </article>
  );
}

function Sosmed({ item }: { item: Social }) {
  const Icon = item.icon;
  return (
    <a
      key={item.label}
      href={item.href}
      aria-label={item.label}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/30 text-xl font-bold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
    >
      <Icon />
    </a>
  );
}

function Footer({ rights }: { rights: string }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 md:flex-row lg:px-8">
        <a
          href="#about"
          className="text-3xl font-black tracking-tight text-emerald-400"
        >
          MP
        </a>
        <p className="text-sm text-slate-500">
          &copy; 2026 Murtamad Pratama. {rights}
        </p>
        <div className="flex gap-3">
          {socialLinks.map((item) => (
            <Sosmed key={item.label} item={item} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];
  const projectLabels = {
    challengeSubtitle: copy.ui.challengeSubtitle,
    challengeButton: copy.ui.challengeButton,
    progressLabel: copy.ui.progressLabel,
    viewDetails: copy.ui.viewDetails,
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020403] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(20,184,166,0.12),transparent_32%),linear-gradient(180deg,#020403,#020617_46%,#020403)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(52,211,153,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.05)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

      <div className="relative z-10 pt-20">
        <Header
          connectLabel={copy.headerConnect}
          language={language}
          navItems={copy.navItems}
          onLanguageChange={setLanguage}
        />

        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <ProfileVisual label={copy.ui.profileBadge} />
            <div>
              <Badge>{copy.ui.profileBadge}</Badge>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {copy.ui.heroIntro}{" "}
                <span className="block text-emerald-400">Murtamad Pratama</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                {copy.ui.heroSummary}
              </p>
              <div className="mt-7 flex gap-3">
                {socialLinks.map((item) => (
                  <Sosmed key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {copy.heroStats.map((stat) => (
              <MetricCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[1.25fr_0.85fr]">
            <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
              <h2 className="text-2xl font-bold text-white">
                {copy.ui.aboutTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                {copy.ui.aboutBody}
              </p>
            </div>
            <div className="rounded-lg border border-emerald-400/20 bg-slate-950/65 p-6">
              <h2 className="text-xl font-bold text-white">
                {copy.ui.currentFocusTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {copy.focusItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 grid gap-7 lg:grid-cols-[1.35fr_0.75fr]">
            <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-lg text-emerald-300">
                  <IoBriefcaseOutline aria-hidden="true" />
                </span>
                {copy.ui.experienceTitle}
              </h2>
              <div className="mt-7 space-y-8">
                {copy.experiences.map((item) => (
                  <div
                    key={item.role}
                    className="relative border-l border-emerald-400/30 pl-7"
                  >
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-bold text-white">{item.role}</h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {item.type}
                        </p>
                      </div>
                      <p className="text-sm text-slate-400">{item.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm leading-6 text-slate-400"
                        >
                          - {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
                <h2 className="text-xl font-bold text-white">
                  {copy.ui.skillsTitle}
                </h2>
                <div className="mt-5 space-y-4">
                  {copy.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="font-semibold text-white">
                          {skill.value}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-emerald-400"
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
                <h2 className="text-xl font-bold text-white">
                  {copy.ui.techStackTitle}
                </h2>
                <div className="mt-5 grid grid-cols-5 gap-3">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="grid h-12 place-items-center rounded-md border border-white/10 bg-black/40 text-xs font-black text-emerald-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6 text-center">
                <p className="text-5xl font-black text-emerald-400">&quot;</p>
                <p className="mx-auto max-w-xs text-2xl font-semibold leading-snug text-white">
                  {copy.ui.quote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
        >
          <SectionLabel>{copy.ui.workLabel}</SectionLabel>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                {copy.ui.projectsTitle}
              </h2>
              <p className="mt-3 text-slate-400">
                {copy.ui.projectsDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {copy.ui.projectFilters.map((item, index) => (
                <button
                  key={item}
                  className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                    index === 0
                      ? "border-emerald-400 bg-emerald-400 text-slate-950"
                      : "border-white/10 bg-slate-950/60 text-slate-300 hover:border-emerald-400/40"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {copy.projects.map((project) => (
              <ProjectCard
                key={project.title}
                labels={projectLabels}
                project={project}
              />
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-bold text-white">
              {copy.ui.careerHighlightsTitle}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {copy.roadmap.map((item) => (
                <div key={item.quarter} className="relative">
                  <span className="mb-4 block h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.10)]" />
                  <p className="font-bold text-emerald-300">{item.quarter}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-5 rounded-lg border border-white/10 bg-slate-950/65 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-lg bg-emerald-400/10 text-3xl text-emerald-300">
                <IoRocketOutline aria-hidden="true" />
              </span>
              <div>
                <p className="text-lg font-bold text-white">
                  {copy.ui.projectCtaTitle}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {copy.ui.projectCtaDescription}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-md border border-emerald-400/60 px-6 py-3 text-sm font-bold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
            >
              {copy.ui.projectCtaButton}
            </a>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>{copy.ui.servicesLabel}</SectionLabel>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <span className="text-emerald-400">
                  {copy.ui.servicesHeadingAccent}
                </span>{" "}
                {copy.ui.servicesHeadingText}
                <span className="block">
                  {copy.ui.servicesHeadingLine}{" "}
                  <span className="text-emerald-400">
                    {copy.ui.servicesHeadingLineAccent}
                  </span>
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
                {copy.ui.servicesIntro}
              </p>
            </div>
            <ServiceDevice />
          </div>

          <div className="mt-10 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-bold text-white">
              {copy.ui.capabilitiesTitle}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {copy.services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-bold text-white">
              {copy.ui.reasonsTitle}
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {copy.reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-lg border border-white/10 bg-black/30 p-5 text-center"
                  >
                    <span className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-xl text-emerald-300">
                      <Icon aria-hidden="true" />
                    </span>
                    <p className="font-bold text-white">{reason.title}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {reason.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-bold text-white">
              {copy.ui.credentialsTitle}
            </h3>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {copy.credentials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-white/10 bg-black/25 p-6"
                >
                  <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  <p className="mt-3 text-lg font-extrabold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.meta}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm leading-6 text-slate-300"
                      >
                        - {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-lg border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,0.86))] p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {copy.ui.contactTitle}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  {copy.ui.contactDescription}
                </p>
              </div>
              <a
                href="mailto:murtamad501@gmail.com"
                className="rounded-md bg-emerald-400 px-6 py-3 text-center text-sm font-extrabold text-slate-950 transition hover:bg-emerald-300"
              >
                {copy.ui.contactButton}
              </a>
            </div>
          </div>
        </section>

        <Footer rights={copy.ui.footerRights} />
      </div>
    </main>
  );
}
