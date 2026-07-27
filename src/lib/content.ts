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
  IoTrophyOutline,
  IoLogoInstagram,
  IoLogoTiktok,
} from "react-icons/io5";
import type { IconType } from "react-icons";

export type Project = {
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

export type Service = {
  title: string;
  icon: IconType;
  description: string;
};

export type Social = {
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

type SkillGroup = {
  category: string;
  items: string[];
};

export const socialLinks: Social[] = [
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
    label: "Instagram",
    icon: IoLogoInstagram,
    href: "https://www.instagram.com/gulekuning/",
    external: true,
  },
    {
    label: "Tiktok",
    icon: IoLogoTiktok,
    href: "https://www.tiktok.com/@gulekuning/",
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

export const content = {
  en: {
    navItems: [
      { label: "Selected Work", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
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
      "End-to-end product ownership",
      "Authentication, authorization, and RBAC",
      "Business-to-technical translation",
      "Production-oriented delivery and support",
    ],
    experiences: [
      {
        role: "Software Engineer",
        period: "Nov 2025 - Present",
        type: "Construct-X Indonesia | Remote",
        details: [
          "Own end-to-end delivery across frontend, backend, authentication, RBAC, relational data design, and deployment.",
          "Build with Next.js, React Native, TypeScript, Node.js/NestJS, PostgreSQL, Prisma, Supabase, Vercel, and GitHub Actions.",
          "Delivered core frontend workflows within two weeks as part of a two-person development team.",
          "Translate high-level business ideas into implementable technical flows and coordinate decisions with technical and business stakeholders.",
        ],
      },
      {
        role: "Enterprise OutSystems Developer",
        period: "Aug 2022 - Oct 2025",
        type: "Wilmar Consultancy Services | Medan, Indonesia | On-site",
        details: [
          "Supported eight enterprise applications used across Singapore, Indonesia, Malaysia, Europe, Africa, and the United States.",
          "Built business workflows with OutSystems O11 Reactive Web and Traditional Web, including a reusable OTP module and working SSO proof of concept.",
          "Managed non-production deployments and resolved production incidents.",
          "Led a large application migration between environments with zero downtime.",
        ],
      },
      {
        role: "Earlier Experience: 3D Model Data Processing",
        period: "Jul 2019 - Aug 2022",
        type: "Construct-X",
        details: [
          "Processed and validated 3D model data, tested software, and created internal job aids.",
        ],
      },
    ],
    skills: [
      {
        category: "Core Full-Stack",
        items: [
          "TypeScript",
          "JavaScript",
          "Next.js",
          "React",
          "Node.js",
          "NestJS",
          "PostgreSQL",
        ],
      },
      {
        category: "Data & Platform",
        items: [
          "Prisma ORM",
          "Supabase Auth",
          "Supabase Database",
          "Supabase Storage",
          "Vercel",
        ],
      },
      {
        category: "Mobile & UI",
        items: ["React Native", "Tailwind CSS"],
      },
      {
        category: "Architecture & Delivery",
        items: [
          "REST APIs",
          "Authentication",
          "Authorization",
          "RBAC",
          "Relational Data Modeling",
          "Workflow Design",
          "Git",
          "GitHub Actions",
          "CI/CD",
          "Technical Documentation",
        ],
      },
      {
        category: "Enterprise & Low-Code",
        items: [
          "OutSystems O11",
          "Reactive Web",
          "Traditional Web",
          "Service Studio",
          "Reusable Modules",
          "Application Support",
          "Deployment",
          "UiPath",
        ],
      },
    ] satisfies SkillGroup[],
    projects: [
      {
        title: "Protected Digital Product Platform",
        status: "Private Project",
        context:
          "Converted digital product materials into protected, review-ready web content.",
        role: "Full-Stack Developer",
        stack: [
          "Next.js",
          "TypeScript",
          "Supabase Auth",
          "Prisma",
          "PostgreSQL",
          "Vercel",
        ],
        responsibilities: [
          "Implemented authentication, session handling, authorization, RBAC, and protected product access.",
          "Set up a review-ready deployment environment.",
          "Scope covered content conversion and access control; purchasing, marketing, and customer content management were excluded.",
        ],
        actionLabel: "View Case Study",
        actionHref: "/projects/protected-digital-product-platform",
        visual: "dashboard",
      },
      {
        title: "Inspire Robotics Challenge Platform",
        status: "Private Project",
        context:
          "Manages registration, teams, challenge selection, approvals, and role-based administration.",
        role: "Full-Stack Engineer",
        stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
        responsibilities: [
          "Built user registration, team invitations, challenge and theme selection, and approval workflows.",
          "Implemented authentication, business rules, relational data modeling, and role-based administration.",
          "Structured the frontend as reusable modules for admin and participant workflows.",
        ],
        actionLabel: "View Case Study",
        actionHref: "/projects/inspire-robotics-challenge-platform",
        visual: "challenge",
      },
      {
        title: "Personal Finance Application",
        status: "Ongoing",
        context:
          "Organizes accounts, categories, transactions, and dashboard reporting in one relational system.",
        role: "Full-Stack Developer",
        stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "PostgreSQL"],
        responsibilities: [
          "Built authentication, accounts, categories, transactions, API routes, and dashboard reporting.",
          "Designed the relational data structure for financial records.",
          "React Native integration remains a possible future phase.",
        ],
        actionLabel: "View Case Study",
        actionHref: "/projects/personal-finance-application",
        visual: "finance",
      },
    ] satisfies Project[],
    roadmap: [
      {
        quarter: "8 Applications",
        title:
          "Supported enterprise applications used across multiple international regions.",
      },
      {
        quarter: "Reusable Access",
        title:
          "Built a reusable OTP module and a working SSO proof of concept.",
      },
      {
        quarter: "Zero Downtime",
        title:
          "Led a large application migration between environments without downtime.",
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
        title: "Business Websites",
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
        title: "End-to-End",
        subtitle: "Product Ownership",
        icon: IoGitBranchOutline,
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
      heroHeadline:
        "Software Engineer | Full-Stack TypeScript & Node.js Developer",
      heroSummary:
        "Software Engineer with more than three years of enterprise application experience and hands-on full-stack development using TypeScript, Next.js, React, Node.js, NestJS, PostgreSQL, Prisma, and Supabase. Experienced in authentication, RBAC, relational data modeling, API development, deployment, and production application support.",
      heroCtaProjects: "View Selected Work",
      heroCtaCv: "Download CV",
      heroCtaFullStackCv: "Full-Stack Resume",
      heroCtaOutSystemsCv: "OutSystems Resume",
      heroCtaContact: "Contact Me",
      aboutTitle: "About Me",
      aboutBody:
        "I combine more than three years of enterprise application experience with hands-on full-stack development using TypeScript, Next.js, React, React Native, Node.js, NestJS, PostgreSQL, Prisma, and Supabase. OutSystems gave me a strong foundation in business workflows, reusable logic, deployment, authentication, and production support. In my current remote role, I work across technical planning, frontend, backend, database design, access control, and deployment, turning incomplete business ideas into working technical flows.",
      currentFocusTitle: "Current Focus",
      experienceTitle: "Experience",
      skillsTitle: "Skills",
      techStackTitle: "Tech Stack",

      workLabel: "My Work",
      projectsTitle: "Selected Work",
      projectsDescription:
        "Selected product builds and enterprise work with role, stack, and delivery context.",
      careerHighlightsTitle: "Enterprise Highlights",
      projectCtaTitle:
        "I turn business workflows into reliable software systems.",
      projectCtaDescription:
        "Enterprise experience, modern full-stack tools, and production-oriented delivery.",
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
      { label: "Karya Pilihan", href: "#projects" },
      { label: "Pengalaman", href: "#experience" },
      { label: "Tentang", href: "#about" },
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
      "Kepemilikan produk end-to-end",
      "Autentikasi, otorisasi, dan RBAC",
      "Penerjemahan kebutuhan bisnis ke solusi teknis",
      "Delivery dan support berorientasi produksi",
    ],
    experiences: [
      {
        role: "Software Engineer",
        period: "Nov 2025 - Sekarang",
        type: "Construct-X Indonesia | Remote",
        details: [
          "Menangani delivery end-to-end mencakup frontend, backend, autentikasi, RBAC, desain data relasional, dan deployment.",
          "Mengembangkan produk dengan Next.js, React Native, TypeScript, Node.js/NestJS, PostgreSQL, Prisma, Supabase, Vercel, dan GitHub Actions.",
          "Menyelesaikan workflow frontend utama dalam dua minggu sebagai bagian dari tim pengembang beranggotakan dua orang.",
          "Menerjemahkan ide bisnis tingkat tinggi menjadi alur teknis yang dapat diimplementasikan bersama stakeholder teknis dan bisnis.",
        ],
      },
      {
        role: "Enterprise OutSystems Developer",
        period: "Agu 2022 - Okt 2025",
        type: "Wilmar Consultancy Services | Medan, Indonesia | On-site",
        details: [
          "Mendukung delapan aplikasi enterprise yang digunakan di Singapura, Indonesia, Malaysia, Eropa, Afrika, dan Amerika Serikat.",
          "Membangun workflow bisnis dengan OutSystems O11 Reactive Web dan Traditional Web, termasuk modul OTP reusable dan proof of concept SSO yang berfungsi.",
          "Mengelola deployment non-produksi dan menyelesaikan insiden produksi.",
          "Memimpin migrasi aplikasi besar antar-environment dengan zero downtime.",
        ],
      },
      {
        role: "Pengalaman Sebelumnya: 3D Model Data Processing",
        period: "Jul 2019 - Agu 2022",
        type: "Construct-X",
        details: [
          "Memproses dan memvalidasi data model 3D, menguji software, serta membuat job aid internal.",
        ],
      },
    ],
    skills: [
      {
        category: "Full-Stack Utama",
        items: [
          "TypeScript",
          "JavaScript",
          "Next.js",
          "React",
          "Node.js",
          "NestJS",
          "PostgreSQL",
        ],
      },
      {
        category: "Data & Platform",
        items: [
          "Prisma ORM",
          "Supabase Auth",
          "Supabase Database",
          "Supabase Storage",
          "Vercel",
        ],
      },
      {
        category: "Mobile & UI",
        items: ["React Native", "Tailwind CSS"],
      },
      {
        category: "Arsitektur & Delivery",
        items: [
          "REST APIs",
          "Authentication",
          "Authorization",
          "RBAC",
          "Relational Data Modeling",
          "Workflow Design",
          "Git",
          "GitHub Actions",
          "CI/CD",
          "Technical Documentation",
        ],
      },
      {
        category: "Enterprise & Low-Code",
        items: [
          "OutSystems O11",
          "Reactive Web",
          "Traditional Web",
          "Service Studio",
          "Reusable Modules",
          "Application Support",
          "Deployment",
          "UiPath",
        ],
      },
    ] satisfies SkillGroup[],
    projects: [
      {
        title: "Protected Digital Product Platform",
        status: "Proyek Privat",
        context:
          "Mengubah materi produk digital menjadi konten web terlindungi yang siap ditinjau.",
        role: "Full-Stack Developer",
        stack: [
          "Next.js",
          "TypeScript",
          "Supabase Auth",
          "Prisma",
          "PostgreSQL",
          "Vercel",
        ],
        responsibilities: [
          "Mengimplementasikan autentikasi, session handling, otorisasi, RBAC, dan akses produk terlindungi.",
          "Menyiapkan deployment environment yang siap ditinjau.",
          "Scope mencakup konversi konten dan access control; purchasing, marketing, serta customer content management tidak termasuk.",
        ],
        actionLabel: "Lihat Studi Kasus",
        actionHref: "/projects/protected-digital-product-platform",
        visual: "dashboard",
      },
      {
        title: "Inspire Robotics Challenge Platform",
        status: "Proyek Privat",
        context:
          "Mengelola registrasi, tim, pemilihan challenge, approval, dan administrasi berbasis role.",
        role: "Full-Stack Engineer",
        stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
        responsibilities: [
          "Membangun registrasi pengguna, undangan tim, pemilihan challenge dan tema, serta approval workflow.",
          "Mengimplementasikan autentikasi, business rules, relational data modeling, dan administrasi berbasis role.",
          "Menyusun frontend modular untuk workflow admin dan peserta.",
        ],
        actionLabel: "Lihat Studi Kasus",
        actionHref: "/projects/inspire-robotics-challenge-platform",
        visual: "challenge",
      },
      {
        title: "Personal Finance Application",
        status: "Berjalan",
        context:
          "Mengelola akun, kategori, transaksi, dan laporan dashboard dalam satu sistem relasional.",
        role: "Full-Stack Developer",
        stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "PostgreSQL"],
        responsibilities: [
          "Membangun autentikasi, akun, kategori, transaksi, API routes, dan dashboard reporting.",
          "Merancang struktur data relasional untuk catatan keuangan.",
          "Integrasi React Native masih menjadi kemungkinan untuk fase berikutnya.",
        ],
        actionLabel: "Lihat Studi Kasus",
        actionHref: "/projects/personal-finance-application",
        visual: "finance",
      },
    ] satisfies Project[],
    roadmap: [
      {
        quarter: "8 Aplikasi",
        title:
          "Mendukung aplikasi enterprise yang digunakan di berbagai wilayah internasional.",
      },
      {
        quarter: "Akses Reusable",
        title:
          "Membangun modul OTP reusable dan proof of concept SSO yang berfungsi.",
      },
      {
        quarter: "Zero Downtime",
        title:
          "Memimpin migrasi aplikasi besar antar-environment tanpa downtime.",
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
        title: "End-to-End",
        subtitle: "Kepemilikan Produk",
        icon: IoGitBranchOutline,
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
      heroHeadline:
        "Software Engineer | Full-Stack TypeScript & Node.js Developer",
      heroSummary:
        "Software Engineer dengan pengalaman lebih dari tiga tahun pada aplikasi enterprise dan pengembangan full-stack menggunakan TypeScript, Next.js, React, Node.js, NestJS, PostgreSQL, Prisma, dan Supabase. Berpengalaman dalam autentikasi, RBAC, pemodelan data relasional, pengembangan API, deployment, dan support aplikasi produksi.",
      heroCtaProjects: "Lihat Karya Pilihan",
      heroCtaCv: "Download CV",
      heroCtaFullStackCv: "Resume Full-Stack",
      heroCtaOutSystemsCv: "Resume OutSystems",
      heroCtaContact: "Hubungi Saya",
      aboutTitle: "Tentang Saya",
      aboutBody:
        "Saya menggabungkan pengalaman lebih dari tiga tahun pada aplikasi enterprise dengan pengembangan full-stack menggunakan TypeScript, Next.js, React, React Native, Node.js, NestJS, PostgreSQL, Prisma, dan Supabase. OutSystems memberi saya fondasi kuat dalam workflow bisnis, reusable logic, deployment, autentikasi, dan support produksi. Dalam role remote saat ini, saya menangani technical planning, frontend, backend, desain database, access control, dan deployment, serta mengubah ide bisnis yang belum lengkap menjadi alur teknis yang berjalan.",
      currentFocusTitle: "Fokus Saat Ini",
      experienceTitle: "Pengalaman",
      skillsTitle: "Keahlian",
      techStackTitle: "Tech Stack",

      workLabel: "Karya Saya",
      projectsTitle: "Karya Pilihan",
      projectsDescription:
        "Pilihan product build dan enterprise work dengan role, stack, dan konteks delivery.",
      careerHighlightsTitle: "Pencapaian Enterprise",
      projectCtaTitle:
        "Saya mengubah workflow bisnis menjadi sistem software yang reliable.",
      projectCtaDescription:
        "Pengalaman enterprise, modern full-stack tools, dan delivery berorientasi produksi.",
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
