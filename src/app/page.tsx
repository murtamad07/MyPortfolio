"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";

import { CaseStudyModal } from "@/components/CaseStudyModal";
import Header from "@/components/Header";
import {
  IoChevronDownOutline,
  IoCloudUploadOutline,
  IoSendOutline,
} from "react-icons/io5";
import { caseStudies } from "@/lib/case-studies";
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

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(
    null,
  );
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const copy = content[language];
  const selectedStudy = selectedProjectSlug
    ? caseStudies[selectedProjectSlug] ?? null
    : null;
  const selectedStudyHref = selectedProjectSlug
    ? `/projects/${selectedProjectSlug}`
    : null;
  const closeProject = useCallback(() => setSelectedProjectSlug(null), []);

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
    <main className="min-h-screen overflow-x-hidden bg-[#050910] text-slate-100">
      <div className="relative z-10">
        <Header
          connectLabel={copy.headerConnect}
          language={language}
          navItems={copy.navItems}
          onLanguageChange={setLanguage}
        />

        <section
          id="home"
          className={`${sectionShell} flex min-h-[100svh] items-center border-t-0 pt-28 sm:pt-32`}
        >
          <div className={sectionContent}>
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Murtamad Pratama / {copy.ui.profileBadge}
                </p>
                <h1 className="text-balance mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  {copy.ui.heroHeadline}
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {copy.ui.heroSummary}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 items-center justify-center bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
                  >
                    {copy.ui.heroCtaProjects}
                  </a>
                  <details className="group relative">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-300">
                      <IoCloudUploadOutline aria-hidden="true" />
                      {copy.ui.heroCtaCv}
                      <IoChevronDownOutline
                        aria-hidden="true"
                        className="transition group-open:rotate-180"
                      />
                    </summary>
                    <div className="absolute left-0 top-full z-20 mt-2 min-w-full border border-white/15 bg-slate-950 shadow-xl">
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
                </div>
              </div>
              <ProfileVisual />
            </div>

            <div className="mt-16 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.heroStats.map((stat) => (
                <MetricCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={sectionShell}
        >
          <div className={sectionContent}>
            <SectionLabel>{copy.ui.workLabel}</SectionLabel>
            <div>
              <h2 className="text-balance text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                {copy.ui.projectsTitle}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                {copy.ui.projectsDescription}
              </p>
            </div>

            <div className="mt-12 border-b border-white/10">
              {copy.projects.map((project, index) => {
                const slug = project.actionHref?.split("/").pop();

                return (
                  <ProjectCard
                    key={project.title}
                    index={index}
                    project={project}
                    onOpen={
                      slug && caseStudies[slug]
                        ? () => setSelectedProjectSlug(slug)
                        : undefined
                    }
                  />
                );
              })}
            </div>

            <div className="mt-16 border-y border-white/10 py-8">
              <h3 className="text-xl font-semibold text-white">
                {copy.ui.careerHighlightsTitle}
              </h3>
              <div className="mt-8 grid md:grid-cols-3">
                {copy.roadmap.map((item) => (
                  <div
                    key={item.quarter}
                    className="border-t border-white/10 py-6 md:border-l md:border-t-0 md:px-7 md:py-0 md:first:border-l-0 md:first:pl-0"
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">
                      {item.quarter}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={sectionShell}
        >
          <div className={sectionContent}>
            <SectionLabel>{copy.ui.experienceTitle}</SectionLabel>
            <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
              <div>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {copy.ui.experienceTitle}
                </h2>
                <div className="mt-10 border-b border-white/10">
                  {copy.experiences.map((item) => (
                    <article
                      key={item.role}
                      className="border-t border-white/10 py-8"
                    >
                      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">
                            {item.type}
                          </p>
                        </div>
                        <p className="font-mono text-xs text-slate-500">
                          {item.period}
                        </p>
                      </div>
                      <ul className="mt-5 space-y-3">
                        {item.details.map((detail) => (
                          <li
                            key={detail}
                            className="relative pl-5 text-sm leading-7 text-slate-400 before:absolute before:left-0 before:top-[0.7rem] before:h-px before:w-2 before:bg-emerald-400"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="lg:border-l lg:border-white/10 lg:pl-10">
                <h2 className="text-2xl font-semibold text-white">
                  {copy.ui.skillsTitle}
                </h2>
                <div className="mt-6 border-b border-white/10">
                  {copy.skills.map((group) => (
                    <div
                      key={group.category}
                      className="border-t border-white/10 py-5"
                    >
                      <h3 className="text-sm font-semibold text-white">
                        {group.category}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="about"
          className={sectionShell}
        >
          <div className={sectionContent}>
            <SectionLabel>{copy.ui.aboutTitle}</SectionLabel>
            <div className="grid gap-12 border-t border-white/10 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {copy.ui.aboutTitle}
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                  {copy.ui.aboutBody}
                </p>
              </div>
              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <h2 className="text-xl font-semibold text-white">
                  {copy.ui.currentFocusTitle}
                </h2>
                <ul className="mt-5 space-y-3">
                  {copy.focusItems.map((item) => (
                    <li key={item} className="border-t border-white/10 py-3 text-sm leading-6 text-slate-300">
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
          className={sectionShell}
        >
          <div className={sectionContent}>
            <SectionLabel>{copy.ui.servicesLabel}</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
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
              </div>
              <p className="max-w-2xl text-base leading-8 text-slate-300 lg:pt-1">
                {copy.ui.servicesIntro}
              </p>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <h3 className="text-2xl font-semibold text-white">
                {copy.ui.capabilitiesTitle}
              </h3>
              <div className="mt-6 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
                {copy.services.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <h3 className="text-2xl font-semibold text-white">
                {copy.ui.credentialsTitle}
              </h3>
              <div className="mt-6 grid gap-x-10 lg:grid-cols-3">
                {copy.credentials.map((item) => (
                  <article
                    key={item.name}
                    className="border-t border-white/10 py-6"
                  >
                    <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-300">
                      {item.name}
                    </h4>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.meta}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="relative pl-5 text-sm leading-6 text-slate-300 before:absolute before:left-0 before:top-[0.65rem] before:h-px before:w-2 before:bg-emerald-400"
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
          className={sectionShell}
        >
          <div className={sectionContent}>
            <SectionLabel>{copy.ui.contactLabel}</SectionLabel>
            <div className="grid gap-14 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div>
                  <h2 className="text-balance max-w-lg text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    {copy.ui.contactTitle}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                    {copy.ui.contactDescription}
                  </p>

                  <div className="mt-9">
                    <h3 className="font-semibold text-white">
                      {copy.ui.contactSocialTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {copy.ui.contactSocialDescription}
                    </p>
                    <div className="mt-5 border-b border-white/10">
                      {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noreferrer" : undefined}
                            className="group flex min-h-14 items-center gap-3 border-t border-white/10 py-3 text-slate-300 transition hover:text-emerald-200"
                          >
                            <span className="shrink-0 text-lg text-emerald-300">
                              <Icon aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-xs text-slate-500">
                                {item.label}
                              </span>
                              <span className="block truncate text-sm font-semibold">
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
                  className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
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
                    className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/20 disabled:cursor-not-allowed disabled:opacity-70"
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
        </section>

        <Footer rights={copy.ui.footerRights} />
        <CaseStudyModal
          href={selectedStudyHref}
          study={selectedStudy}
          onClose={closeProject}
        />
      </div>
    </main>
  );
}
