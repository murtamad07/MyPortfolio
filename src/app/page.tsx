"use client";

import { useEffect, useState, type FormEvent } from "react";

import Header from "@/components/Header";
import {
  IoBriefcaseOutline,
  IoChevronDownOutline,
  IoCloudUploadOutline,
  IoCodeSlashOutline,
  IoGitBranchOutline,
  IoLayersOutline,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoVercel,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoRocketOutline,
  IoSendOutline,
  IoServerOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";
import { content, socialLinks } from "@/lib/content";
import {
  contactInputClass,
  MetricCard,
  ProfileVisual,
  ProjectCard,
  sectionContent,
  SectionLabel,
  sectionShell,
  ServiceCard,
  ServiceDevice,
  Sosmed,
} from "@/components/page-components";
import { Footer } from "@/components/footer";

type Language = "en" | "id";

const socialHandles: Record<string, string> = {
  GitHub: "@murtamad07",
  LinkedIn: "Murtamad Pratama",
  Instagram: "Gulekuning",
  Tiktok:"gulekuning",
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

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
          id="home"
          className={`${sectionShell} border-t-0 bg-[linear-gradient(180deg,rgba(6,21,35,0.95),rgba(7,24,40,0.98))] pt-28`}
        >
          <div className={sectionContent}>
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                {/* <Badge>{copy.ui.profileBadge}</Badge> */}
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                  Murtamad Pratama
                </h1>
                <p className="mt-4 max-w-2xl text-xl font-semibold leading-8 text-emerald-300">
                  {copy.ui.heroHeadline}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
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
                  <details className="group relative">
                    <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-300">
                      <IoCloudUploadOutline aria-hidden="true" />
                      {copy.ui.heroCtaCv}
                      <IoChevronDownOutline
                        aria-hidden="true"
                        className="transition group-open:rotate-180"
                      />
                    </summary>
                    <div className="absolute left-0 top-full z-20 mt-2 min-w-full overflow-hidden rounded-md border border-white/10 bg-slate-950 shadow-xl">
                      <a
                        href="/assets/Murtamad-Pratama-Full-Stack-Resume.pdf"
                        download="Murtamad-Pratama-Full-Stack-Resume.pdf"
                        className="block whitespace-nowrap px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-300"
                      >
                        {copy.ui.heroCtaFullStackCv}
                      </a>
                      <a
                        href="/assets/Murtamad-Pratama-OutSystems-Resume.pdf"
                        download="Murtamad-Pratama-OutSystems-Resume.pdf"
                        className="block whitespace-nowrap border-t border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-300"
                      >
                        {copy.ui.heroCtaOutSystemsCv}
                      </a>
                    </div>
                  </details>
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
              <ProfileVisual  />
            </div>

            <div className="mt-10 grid gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-bold/20 sm:grid-cols-2 lg:grid-cols-4">
              {copy.heroStats.map((stat) => (
                <MetricCard key={stat.label} {...stat} />
              ))}
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
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {copy.roadmap.map((item) => (
                  <div key={item.quarter} className="relative">
                    <span className="mb-4 block h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(87,157,255,0.10)]" />
                    <p className="font-semibold text-emerald-300">
                      {item.quarter}
                    </p>
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
          id="experience"
          className={`${sectionShell} bg-[linear-gradient(180deg,rgba(6,21,35,0.98),rgba(7,24,40,0.98))]`}
        >
          <div className={sectionContent}>
            <div className="grid gap-7 lg:grid-cols-[1.35fr_0.75fr]">
              <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
                <h2 className="flex items-center gap-3 text-2xl font-semibold text-white">
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-lg text-emerald-300">
                    <IoBriefcaseOutline aria-hidden="true" />
                  </span>
                  {copy.ui.experienceTitle}
                </h2>
                <div className="mt-7 space-y-8">
                  {copy.experiences.map((item) => (
                    <article
                      key={item.role}
                      className="relative border-l border-emerald-400/30 pl-7"
                    >
                      <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(87,157,255,0.12)]" />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-white">
                            {item.role}
                          </h3>
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
                    </article>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-xl font-semibold text-white">
                    {copy.ui.techStackTitle}
                  </h3>
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
                            key={skill}
                            className="rounded-md border border-white/10 bg-bold/25 px-3 py-2 text-xs text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className={`${sectionShell} flex items-center bg-[rgba(6,21,35,0.98)]`}
        >
          <div className={sectionContent}>
            <div className="grid gap-5 lg:grid-cols-[1.25fr_0.85fr]">
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
          </div>
        </section>

        <section
          id="services"
          className={`${sectionShell} bg-[linear-gradient(180deg,rgba(6,21,35,0.98),rgba(7,26,43,0.98))]`}
        >
          <div className={sectionContent}>
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                {/* <SectionLabel>{copy.ui.servicesLabel}</SectionLabel> */}
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
                    <h4 className="text-xl font-semibold text-white">
                      {item.name}
                    </h4>
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
                  {/* <SectionLabel>{copy.ui.contactLabel}</SectionLabel> */}
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
                        maxLength={120}
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
                        maxLength={254}
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
                      maxLength={160}
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
                      maxLength={4000}
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
