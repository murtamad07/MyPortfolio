"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
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
  IoLockClosedOutline,
  IoLogoGithub,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoVercel,
  IoLogoWhatsapp,
  IoLocationOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoPhonePortraitOutline,
  IoRocketOutline,
  IoSendOutline,
  IoServerOutline,
  IoSettingsOutline,
  IoSparklesOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";

type Language = "en" | "id";

type Project = {
  title: string;
  status: string;
  context: string;
  role: string;
  stack: string[];
  responsibilities: string[];
  actionLabel: string;
  actionHref?: string;
  visual: string;
};

type SkillGroup = {
  category: string;
  items: { name: string; level: string }[];
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
    label: "Portfolio",
    icon: IoGlobeOutline,
    href: "https://murtamadpratama.my.id",
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

const socialHandles: Record<string, string> = {
  GitHub: "@murtamad07",
  LinkedIn: "Murtamad Pratama",
  Portfolio: "murtamadpratama.my.id",
  Email: "murtamad501@gmail.com",
  WhatsApp: "+62 857 6283 5973",
};

const techStack: { label: string; icon: IconType }[] = [
  { label: "TS", icon: IoCodeSlashOutline },
  { label: "JS", icon: IoLogoJavascript },
  { label: "React", icon: IoLogoReact },
  { label: "Next", icon: IoLogoVercel },
  { label: "RN", icon: IoPhonePortraitOutline },
  { label: "Nest", icon: IoLogoNodejs },
  { label: "SQL", icon: IoServerOutline },
  { label: "Prisma", icon: IoGitBranchOutline },
  { label: "Supa", icon: IoCloudUploadOutline },
  { label: "O11", icon: IoLayersOutline },
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
      {
        category: "Enterprise & Low-Code",
        items: [
          { name: "OutSystems O11", level: "Strong" },
          { name: "UiPath", level: "Working Experience" },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "React", level: "Working Experience" },
          { name: "Next.js", level: "Working Experience" },
          { name: "TypeScript", level: "Working Experience" },
          { name: "React Native", level: "Working Experience" },
          { name: "Tailwind CSS", level: "Working Experience" },
        ],
      },
      {
        category: "Backend & Database",
        items: [
          { name: "NestJS", level: "Working Experience" },
          { name: "REST API", level: "Working Experience" },
          { name: "PostgreSQL", level: "Working Experience" },
          { name: "Prisma", level: "Working Experience" },
          { name: "Supabase", level: "Working Experience" },
        ],
      },
      {
        category: "Architecture & Workflow",
        items: [
          { name: "RBAC", level: "Strong" },
          { name: "System Design", level: "Working Experience" },
          { name: "Database Design", level: "Working Experience" },
          { name: "AI-assisted Development", level: "Strong" },
          { name: "Technical Documentation", level: "Strong" },
        ],
      },
    ] satisfies SkillGroup[],
    projects: [
      {
        title: "Personal Finance App",
        status: "Ongoing",
        context:
          "Subscription-based personal finance platform for transaction tracking, category and bank management, dashboard insights, and a scalable data model.",
        role: "Full-stack developer and product owner",
        stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth"],
        responsibilities: [
          "Built authentication, transaction workflows, category and bank management, and dashboard structure.",
          "Designed the database structure to support subscription-based product growth.",
          "Planned React Native mobile integration for the next product phase.",
        ],
        actionLabel: "Private Project",
        visual: "finance",
      },
      {
        title: "Inspire Robotics Challenges Platform",
        status: "Platform Build",
        context:
          "Challenge and investment management platform for competition lifecycle, team registration, and admin/user operations.",
        role: "Full-stack engineer with AI-assisted planning workflow",
        stack: ["Next.js", "TypeScript", "RBAC", "Auth", "Dashboard"],
        responsibilities: [
          "Implemented authentication flow, role-based access control, challenge lifecycle, and team registration flow.",
          "Built admin and user dashboard foundations under a fast-paced delivery timeline.",
          "Used AI-assisted planning and implementation workflows to move from requirements to working features faster.",
        ],
        actionLabel: "Case Study Coming Soon",
        visual: "challenge",
      },
      {
        title: "Enterprise OutSystems Work",
        status: "Enterprise",
        context:
          "Production support and enhancement work for enterprise applications used across Singapore, Indonesia, Malaysia, Europe, Africa, and the USA.",
        role: "Enterprise OutSystems Developer",
        stack: ["OutSystems O11", "Reactive Web", "Traditional Web", "OTP", "SSO"],
        responsibilities: [
          "Maintained and supported 8 enterprise applications used across global business units.",
          "Built a reusable OTP module and developed an SSO proof-of-concept.",
          "Supported deployments, production troubleshooting, and enterprise workflow improvements.",
        ],
        actionLabel: "Private Enterprise Work",
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
        title: "Business Systems",
        icon: IoServerOutline,
        description:
          "Custom web systems for sales, operations, dashboards, workflows, and internal tools.",
      },
      {
        title: "Business Website",
        icon: IoGlobeOutline,
        description:
          "Company profile websites, landing pages, and professional business presence for small teams and growing businesses.",
      },
      {
        title: "Management Systems",
        icon: IoSettingsOutline,
        description:
          "Systems for workshop management, finance tracking, reporting, and operational monitoring.",
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
        "Software Engineer with 3+ years of enterprise OutSystems experience, now building modern full-stack products with Next.js, React, TypeScript, NestJS, PostgreSQL, Prisma, and Supabase.",
      heroCtaProjects: "View Projects",
      heroCtaCv: "Download CV",
      heroCtaContact: "Contact Me",
      cvUnavailable: "Add the latest CV PDF in public to enable this download.",
      aboutTitle: "About Me",
      aboutBody:
        "I build software from business requirements into working systems. My background is enterprise OutSystems development, including authentication, reusable modules, deployment support, production troubleshooting, and workflow implementation for applications used across multiple regions. I am now expanding that foundation into modern full-stack development with Next.js, React, TypeScript, React Native, NestJS, PostgreSQL, Prisma, and Supabase, using AI-assisted workflows for planning, debugging, implementation, and technical documentation.",
      currentFocusTitle: "Current Focus",
      experienceTitle: "Experience",
      skillsTitle: "Skills",
      techStackTitle: "Tech Stack",

      workLabel: "My Work",
      projectsTitle: "Projects & Platform Work",
      projectsDescription:
        "Selected product builds and enterprise work with role, stack, and delivery context.",
      projectFilters: ["All", "Ongoing", "Architecture", "Enterprise"],
      viewDetails: "View Details",
      challengeSubtitle: "Challenge and Join Contest Platform",
      // challengeButton: "View Architecture",
      careerHighlightsTitle: "Career Highlights",
      projectCtaTitle:
        "I turn business workflows into reliable software systems.",
      projectCtaDescription:
        "Enterprise experience, modern full-stack tools, and AI-assisted delivery.",
      projectCtaButton: "Let's Connect",
      servicesLabel: "Additional Services",
      servicesHeadingAccent: "Business",
      servicesHeadingText: "Support",
      servicesHeadingLine: "through",
      servicesHeadingLineAccent: "Software",
      servicesIntro:
        "Software engineering is the main focus. These service areas are available for business owners who need practical systems, websites, or management tools built around real workflows.",
      capabilitiesTitle: "Service Areas",
      reasonsTitle: "Why Work With Me?",
      credentialsTitle: "Education, Certifications & Languages",
      contactTitle: "Let's build something reliable.",
      contactDescription:
        "Open to Software Engineer, Full-Stack Developer, and OutSystems Developer roles, plus selected product-focused freelance work.",
      contactLabel: "Get In Touch",
      contactSocialTitle: "Find me online",
      contactSocialDescription:
        "Prefer a quick chat? Reach me through any of these platforms.",
      contactFormTitle: "Tell me about your project",
      contactNameLabel: "Your name",
      contactNamePlaceholder: "John Doe",
      contactEmailLabel: "Email address",
      contactEmailPlaceholder: "john@company.com",
      contactSubjectLabel: "Subject",
      contactSubjectPlaceholder: "Project collaboration",
      contactMessageLabel: "Message",
      contactMessagePlaceholder:
        "Tell me a little about your project, timeline, and goals...",
      contactButton: "Send Message",
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
      {
        category: "Enterprise & Low-Code",
        items: [
          { name: "OutSystems O11", level: "Kuat" },
          { name: "UiPath", level: "Pengalaman Kerja" },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "React", level: "Pengalaman Kerja" },
          { name: "Next.js", level: "Pengalaman Kerja" },
          { name: "TypeScript", level: "Pengalaman Kerja" },
          { name: "React Native", level: "Pengalaman Kerja" },
          { name: "Tailwind CSS", level: "Pengalaman Kerja" },
        ],
      },
      {
        category: "Backend & Database",
        items: [
          { name: "NestJS", level: "Pengalaman Kerja" },
          { name: "REST API", level: "Pengalaman Kerja" },
          { name: "PostgreSQL", level: "Pengalaman Kerja" },
          { name: "Prisma", level: "Pengalaman Kerja" },
          { name: "Supabase", level: "Pengalaman Kerja" },
        ],
      },
      {
        category: "Architecture & Workflow",
        items: [
          { name: "RBAC", level: "Kuat" },
          { name: "System Design", level: "Pengalaman Kerja" },
          { name: "Database Design", level: "Pengalaman Kerja" },
          { name: "AI-assisted Development", level: "Kuat" },
          { name: "Technical Documentation", level: "Kuat" },
        ],
      },
    ] satisfies SkillGroup[],
    projects: [
      {
        title: "Personal Finance App",
        status: "Berjalan",
        context:
          "Platform keuangan pribadi berbasis subscription untuk pencatatan transaksi, manajemen kategori dan bank, dashboard insight, dan struktur data yang scalable.",
        role: "Full-stack developer dan product owner",
        stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth"],
        responsibilities: [
          "Membangun autentikasi, workflow transaksi, manajemen kategori dan bank, serta struktur dashboard.",
          "Merancang struktur database untuk mendukung pertumbuhan produk subscription.",
          "Merencanakan integrasi mobile React Native untuk fase produk berikutnya.",
        ],
        actionLabel: "Private Project",
        visual: "finance",
      },
      {
        title: "Inspire Robotics Challenges Platform",
        status: "Platform Build",
        context:
          "Platform challenge dan investment management untuk lifecycle kompetisi, registrasi tim, dan operasional admin/user.",
        role: "Full-stack engineer dengan workflow perencanaan berbantuan AI",
        stack: ["Next.js", "TypeScript", "RBAC", "Auth", "Dashboard"],
        responsibilities: [
          "Mengimplementasikan authentication flow, role-based access control, challenge lifecycle, dan team registration flow.",
          "Membangun fondasi dashboard admin dan user dalam timeline delivery yang cepat.",
          "Menggunakan workflow berbantuan AI untuk mempercepat proses dari requirement menjadi fitur berjalan.",
        ],
        actionLabel: "Case Study Coming Soon",
        visual: "challenge",
      },
      {
        title: "Enterprise OutSystems Work",
        status: "Enterprise",
        context:
          "Support dan enhancement aplikasi enterprise yang digunakan di Singapore, Indonesia, Malaysia, Europe, Africa, dan USA.",
        role: "Enterprise OutSystems Developer",
        stack: ["OutSystems O11", "Reactive Web", "Traditional Web", "OTP", "SSO"],
        responsibilities: [
          "Melakukan maintenance dan support untuk 8 aplikasi enterprise lintas business unit global.",
          "Membangun reusable OTP module dan mengembangkan SSO proof-of-concept.",
          "Mendukung deployment, production troubleshooting, dan peningkatan workflow enterprise.",
        ],
        actionLabel: "Private Enterprise Work",
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
        title: "Sistem Bisnis",
        icon: IoServerOutline,
        description:
          "Sistem web custom untuk sales, operasional, dashboard, workflow, dan internal tools.",
      },
      {
        title: "Website Bisnis",
        icon: IoGlobeOutline,
        description:
          "Company profile, landing page, dan presence bisnis profesional untuk tim kecil dan bisnis berkembang.",
      },
      {
        title: "Sistem Manajemen",
        icon: IoSettingsOutline,
        description:
          "Sistem untuk manajemen bengkel, pencatatan keuangan, reporting, dan monitoring operasional.",
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
        "Software Engineer dengan pengalaman 3+ tahun di enterprise OutSystems, sekarang membangun produk full-stack modern dengan Next.js, React, TypeScript, NestJS, PostgreSQL, Prisma, dan Supabase.",
      heroCtaProjects: "Lihat Proyek",
      heroCtaCv: "Download CV",
      heroCtaContact: "Hubungi Saya",
      cvUnavailable: "Tambahkan file CV PDF terbaru di public untuk mengaktifkan download.",
      aboutTitle: "Tentang Saya",
      aboutBody:
        "Saya membangun software dari kebutuhan bisnis menjadi sistem yang berjalan. Latar belakang saya adalah enterprise OutSystems development, termasuk autentikasi, reusable modules, deployment support, production troubleshooting, dan implementasi workflow untuk aplikasi yang digunakan di berbagai region. Saat ini saya memperluas fondasi tersebut ke modern full-stack development dengan Next.js, React, TypeScript, React Native, NestJS, PostgreSQL, Prisma, dan Supabase, menggunakan workflow berbantuan AI untuk planning, debugging, implementasi, dan dokumentasi teknis.",
      currentFocusTitle: "Fokus Saat Ini",
      experienceTitle: "Pengalaman",
      skillsTitle: "Keahlian",
      techStackTitle: "Tech Stack",

      workLabel: "Karya Saya",
      projectsTitle: "Proyek & Platform Work",
      projectsDescription:
        "Pilihan product build dan enterprise work dengan role, stack, dan konteks delivery.",
      projectFilters: ["Semua", "Berjalan", "Arsitektur", "Enterprise"],
      viewDetails: "Lihat Detail",
      challengeSubtitle: "Platform challenge dan investment",
      // challengeButton: "Lihat Arsitektur",
      careerHighlightsTitle: "Perjalanan Karier",
      projectCtaTitle:
        "Saya mengubah workflow bisnis menjadi sistem software yang reliable.",
      projectCtaDescription:
        "Pengalaman enterprise, modern full-stack tools, dan delivery berbantuan AI.",
      projectCtaButton: "Hubungi Saya",
      servicesLabel: "Layanan Tambahan",
      servicesHeadingAccent: "Dukungan",
      servicesHeadingText: "Bisnis",
      servicesHeadingLine: "melalui",
      servicesHeadingLineAccent: "Software",
      servicesIntro:
        "Fokus utama saya tetap software engineering. Area layanan ini tersedia untuk pemilik bisnis yang membutuhkan sistem praktis, website, atau tools manajemen berdasarkan workflow nyata.",
      capabilitiesTitle: "Area Layanan",
      reasonsTitle: "Kenapa Bekerja Dengan Saya?",
      credentialsTitle: "Pendidikan, Sertifikasi & Bahasa",
      contactTitle: "Mari bangun sesuatu yang reliable.",
      contactDescription:
        "Terbuka untuk role Software Engineer, Full-Stack Developer, dan OutSystems Developer, serta freelance product-focused terpilih.",
      contactLabel: "Hubungi Saya",
      contactSocialTitle: "Temukan saya di",
      contactSocialDescription:
        "Lebih nyaman mengobrol langsung? Hubungi saya melalui platform berikut.",
      contactFormTitle: "Ceritakan project Anda",
      contactNameLabel: "Nama Anda",
      contactNamePlaceholder: "Nama lengkap",
      contactEmailLabel: "Alamat email",
      contactEmailPlaceholder: "nama@perusahaan.com",
      contactSubjectLabel: "Subjek",
      contactSubjectPlaceholder: "Kolaborasi project",
      contactMessageLabel: "Pesan",
      contactMessagePlaceholder:
        "Ceritakan sedikit tentang project, timeline, dan tujuan Anda...",
      contactButton: "Kirim Pesan",
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

const sectionShell =
  "relative min-h-screen scroll-mt-20 border-t border-white/10 py-24 shadow-[0_-32px_80px_rgba(0,0,0,0.42)]";

const sectionContent = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const contactInputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-bold/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-emerald-400/70 focus:bg-bold/40 focus:ring-4 focus:ring-emerald-400/10";


function ProfileVisual({ label }: { label: string }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-emerald-950/40">
      <Image
        src="/assets/PhotoProfile.png"
        alt="Murtamad Pratama profile photo"
        fill
        priority
        sizes="(min-width: 1024px) 384px, 80vw"
        className="object-cover"
      />
      <div className="absolute right-6 top-6 rounded-md border border-emerald-400/20 bg-bold/50 px-3 py-2 text-[10px] font-semibold text-emerald-300 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ProjectIcon =
    project.visual === "challenge"
      ? IoTrophyOutline
      : project.visual === "dashboard"
        ? IoLockClosedOutline
        : null;

  return (
    <article className="flex h-full flex-col p-6 lg:p-7">
      <div className="flex min-h-16 items-center justify-between gap-4">
        {project.visual === "finance" ? (
          <Image
            src="/assets/FinanceApp.png"
            alt="Personal Finance App logo"
            width={2048}
            height={622}
            className="h-14 w-40 object-contain object-left"
          />
        ) : (
          ProjectIcon && (
            <span className="grid h-14 w-14 place-items-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-3xl text-emerald-300">
              <ProjectIcon aria-hidden="true" />
            </span>
          )
        )}
        <Badge>{project.status}</Badge>
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {project.context}
      </p>

      <div className="mt-5 rounded-md border border-white/10 bg-bold/20 p-4">
        <p className="text-[11px] font-semibold uppercase text-emerald-300">
          Role
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-white">
          {project.role}
        </p>
      </div>

      <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-emerald-400">
        {project.responsibilities.map((item) => (
          <li key={item} className="pl-1 text-sm leading-6 text-slate-300">
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        Tech Stack
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/10 bg-bold/20 px-2.5 py-1 text-[11px] font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        {project.actionHref ? (
          <a
            href={project.actionHref}
            className="inline-flex items-center gap-2 rounded-md border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
          >
            <IoRocketOutline aria-hidden="true" />
            {project.actionLabel}
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-400"
          >
            <IoLockClosedOutline aria-hidden="true" />
            {project.actionLabel}
          </span>
        )}
      </div>
    </article>
  );
}

function ServiceDevice() {
  return (
    <div className="relative mx-auto min-h-72 w-full max-w-lg">
      <div className="absolute left-1/2 top-14 h-44 w-80 -translate-x-1/2 rounded-lg border border-slate-600 bg-slate-950 p-3 shadow-2xl shadow-emerald-950/40 sm:w-96">
        <div className="h-full rounded-md border border-slate-800 bg-[linear-gradient(135deg,#0d2033,#071624)] p-4">
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
      <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
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
      className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-bold/30 text-xl font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
    >
      <Icon />
    </a>
  );
}

function Footer({ rights }: { rights: string }) {
  return (
    <footer className="border-t border-white/10 bg-[#061523] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 md:flex-row lg:px-8">
        <a
          href="#about"
          className="text-3xl font-bold tracking-tight text-emerald-400"
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
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const copy = content[language];

  const contactCopy =
    language === "id"
      ? {
          sending: "Mengirim...",
          success: "Pesan terkirim. Terima kasih!",
          error: "Pesan gagal dikirim. Coba lagi sebentar lagi.",
        }
      : {
          sending: "Sending...",
          success: "Message sent. Thank you!",
          error: "Message failed to send. Please try again soon.",
        };
  const contactNotice =
    contactStatus === "sent"
      ? contactCopy.success
      : contactStatus === "error"
        ? contactCopy.error
        : "";

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        form.reset();
        setContactStatus("sent");
        return;
      }
    } catch {
      // The visible status below is enough for this simple form.
    }

    setContactStatus("error");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#061523] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(87,157,255,0.13),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(47,111,204,0.08),transparent_32%),linear-gradient(180deg,#061523,#071a2b_46%,#061523)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(87,157,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(87,157,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

      <div className="relative z-10">
        <Header
          connectLabel={copy.headerConnect}
          language={language}
          navItems={copy.navItems}
          onLanguageChange={setLanguage}
        />

        <section
          id="about"
          className={`${sectionShell} border-t-0 bg-[linear-gradient(180deg,rgba(6,21,35,0.95),rgba(7,24,40,0.98))] pt-28`}
        >
          <div className={sectionContent}>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Badge>{copy.ui.profileBadge}</Badge>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                <span className="block text-emerald-400">{copy.ui.heroIntro}</span>
                <span className="block">Murtamad Pratama</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                {copy.ui.heroSummary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300"
                >
                  <IoBriefcaseOutline aria-hidden="true" />
                  {copy.ui.heroCtaProjects}
                </a>
                <a
                  href="/assets/CV%20-%20Murtamad%20Pratama.pdf"
                  download="CV - Murtamad Pratama.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300"
                >
                  <IoCloudUploadOutline aria-hidden="true" />
                  {copy.ui.heroCtaCv}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-400/60 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
                >
                  <IoMailOutline aria-hidden="true" />
                  {copy.ui.heroCtaContact}
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((item) => (
                  <Sosmed key={item.label} item={item} />
                ))}
              </div>
            </div>
            <ProfileVisual label={copy.ui.profileBadge} />
          </div>

          <div className="mt-10 grid gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-bold/20 sm:grid-cols-2 lg:grid-cols-4">
            {copy.heroStats.map((stat) => (
              <MetricCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-[1.25fr_0.85fr]">
            <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
              <h2 className="text-2xl font-semibold text-white">
                {copy.ui.aboutTitle}
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                {copy.ui.aboutBody}
              </p>
            </div>
            <div className="rounded-lg border border-emerald-400/20 bg-slate-950/65 p-6">
              <h2 className="text-xl font-semibold text-white">
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
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
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
                    <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(87,157,255,0.12)]" />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-white">{item.role}</h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {item.type}
                        </p>
                      </div>
                      <p className="text-sm text-slate-400">{item.period}</p>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-emerald-400">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="pl-1 text-sm leading-6 text-slate-400"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h2 className="text-xl font-semibold text-white">
                  {copy.ui.techStackTitle}
                </h2>
                <div className="mt-5 grid grid-cols-5 gap-3 sm:grid-cols-10 lg:grid-cols-5 xl:grid-cols-10">
                  {techStack.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      title={label}
                      aria-label={label}
                      className="flex h-14 flex-col items-center justify-center gap-1 rounded-md border border-white/10 bg-bold/40 text-emerald-300"
                    >
                      <Icon className="text-2xl" aria-hidden="true" />
                      <span className="text-[10px] font-semibold text-slate-400">
                        {label}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-7">
              <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
                <h2 className="text-xl font-semibold text-white">
                  {copy.ui.skillsTitle}
                </h2>
                <div className="mt-5 space-y-5">
                  {copy.skills.map((group) => (
                    <div
                      key={group.category}
                      className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-sm font-semibold text-white">
                        {group.category}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill.name}
                            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-bold/25 px-3 py-2 text-xs text-slate-300"
                          >
                            <span>{skill.name}</span>
                            <span className="rounded bg-emerald-400/10 px-2 py-0.5 font-semibold text-emerald-300">
                              {skill.level}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
          </div>
        </section>

        <section
          id="projects"
          className={`${sectionShell} bg-[linear-gradient(180deg,rgba(7,24,40,0.98),rgba(6,21,35,0.98))]`}
        >
          <div className={sectionContent}>
          <SectionLabel>{copy.ui.workLabel}</SectionLabel>
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              {copy.ui.projectsTitle}
            </h2>
            <p className="mt-3 text-slate-400">
              {copy.ui.projectsDescription}
            </p>
          </div>

          <div className="mt-8 grid divide-y divide-white/10 overflow-hidden rounded-xl border border-white/15 bg-slate-950/65 shadow-2xl shadow-bold/30 md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-white/10">
            {copy.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-semibold text-white">
              {copy.ui.careerHighlightsTitle}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {copy.roadmap.map((item) => (
                <div key={item.quarter} className="relative">
                  <span className="mb-4 block h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(87,157,255,0.10)]" />
                  <p className="font-semibold text-emerald-300">{item.quarter}</p>
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
                <p className="text-lg font-semibold text-white">
                  {copy.ui.projectCtaTitle}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {copy.ui.projectCtaDescription}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-md border border-emerald-400/60 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
            >
              {copy.ui.projectCtaButton}
            </a>
          </div>
          </div>
        </section>

        <section
          id="services"
          className={`${sectionShell} bg-[linear-gradient(180deg,rgba(6,21,35,0.98),rgba(7,26,43,0.98))]`}
        >
          <div className={sectionContent}>
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
            <h3 className="text-2xl font-semibold text-white">
              {copy.ui.capabilitiesTitle}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {copy.services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-semibold text-white">
              {copy.ui.reasonsTitle}
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {copy.reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-lg border border-white/10 bg-bold/30 p-5 text-center"
                  >
                    <span className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-xl text-emerald-300">
                      <Icon aria-hidden="true" />
                    </span>
                    <p className="font-semibold text-white">{reason.title}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {reason.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <h3 className="text-2xl font-semibold text-white">
              {copy.ui.credentialsTitle}
            </h3>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {copy.credentials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-white/10 bg-bold/25 p-6"
                >
                  <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                  <p className="mt-3 text-lg font-extrabold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.meta}
                  </p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 marker:text-emerald-400">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="pl-1 text-sm leading-6 text-slate-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          </div>
        </section>

        <section
          id="contact"
          className={`${sectionShell} flex items-center bg-[linear-gradient(180deg,rgba(7,26,43,0.98),rgba(6,21,35,0.99))]`}
        >
          <div className={sectionContent}>
            <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(87,157,255,0.12),rgba(10,31,51,0.95)_48%,rgba(6,21,35,0.99))] p-6 shadow-2xl shadow-bold/30 md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                <div className="flex flex-col">
                  <SectionLabel>{copy.ui.contactLabel}</SectionLabel>
                  <h2 className="max-w-lg text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {copy.ui.contactTitle}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                    {copy.ui.contactDescription}
                  </p>

                  <div className="mt-9">
                    <h3 className="font-semibold text-white">
                      {copy.ui.contactSocialTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {copy.ui.contactSocialDescription}
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noreferrer" : undefined}
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-bold/25 p-3.5 transition hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-xl text-emerald-300 transition group-hover:bg-emerald-400 group-hover:text-slate-950">
                              <Icon aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-xs text-slate-500">
                                {item.label}
                              </span>
                              <span className="block truncate text-sm font-semibold text-slate-200">
                                {socialHandles[item.label]}
                              </span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleContactSubmit}
                  className="rounded-xl border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-bold/20 backdrop-blur-sm sm:p-7"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {copy.ui.contactFormTitle}
                  </h3>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-medium text-slate-300">
                      {copy.ui.contactNameLabel}
                      <input
                        required
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={copy.ui.contactNamePlaceholder}
                        className={contactInputClass}
                      />
                    </label>
                    <label className="text-sm font-medium text-slate-300">
                      {copy.ui.contactEmailLabel}
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder={copy.ui.contactEmailPlaceholder}
                        className={contactInputClass}
                      />
                    </label>
                  </div>

                  <label className="hidden" aria-hidden="true">
                    Company
                    <input name="company" tabIndex={-1} autoComplete="off" />
                  </label>

                  <label className="mt-5 block text-sm font-medium text-slate-300">
                    {copy.ui.contactSubjectLabel}
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder={copy.ui.contactSubjectPlaceholder}
                      className={contactInputClass}
                    />
                  </label>

                  <label className="mt-5 block text-sm font-medium text-slate-300">
                    {copy.ui.contactMessageLabel}
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder={copy.ui.contactMessagePlaceholder}
                      className={`${contactInputClass} resize-y`}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/20 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {contactStatus === "sending"
                      ? contactCopy.sending
                      : copy.ui.contactButton}
                    <IoSendOutline className="text-lg" aria-hidden="true" />
                  </button>
                  {contactNotice && (
                    <p
                      role="status"
                      className={`mt-4 text-sm ${
                        contactStatus === "sent"
                          ? "text-emerald-300"
                          : "text-red-300"
                      }`}
                    >
                      {contactNotice}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer rights={copy.ui.footerRights} />
      </div>
    </main>
  );
}
