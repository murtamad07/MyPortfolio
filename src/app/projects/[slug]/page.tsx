import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies, caseStudySections } from "@/lib/case-studies";

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

  return (
    <main className="min-h-screen bg-[#050910] px-4 py-12 text-slate-100 sm:px-6 sm:py-16 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 transition hover:text-emerald-200"
        >
          &larr; Back to selected work
        </Link>

        <header className="pb-12 pt-14 sm:pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">
            {study.role} / {study.status}
          </p>
          <h1 className="text-balance mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            {study.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {study.overview}
          </p>
        </header>

        <div className="border-b border-white/10">
          {caseStudySections(study).slice(1).map(([title, items]) => (
            <section
              key={title}
              className="grid gap-4 border-t border-white/10 py-8 lg:grid-cols-[15rem_1fr] lg:gap-12 lg:py-10"
            >
              <h2 className="text-sm font-semibold text-white">{title}</h2>
              {items.length === 1 ? (
                <p className="max-w-3xl leading-7 text-slate-300">{items[0]}</p>
              ) : (
                <ul className="max-w-3xl space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 leading-7 text-slate-300 before:absolute before:left-0 before:top-[0.72rem] before:h-px before:w-2 before:bg-emerald-400"
                    >
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
