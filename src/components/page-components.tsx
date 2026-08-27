import Image from "next/image";
import type { MouseEvent, ReactNode } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

import type { Project, Service, Social } from "@/lib/content";

export const sectionShell =
  "relative scroll-mt-24 border-t border-white/10 py-20 sm:py-24 lg:py-28";

export const sectionContent =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export const contactInputClass =
  "mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/25 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/15";

export function ProfileVisual() {
  return (
    <figure className="mx-auto w-full max-w-md border-y border-white/15 py-3 lg:mr-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
        <Image
          src="/assets/PhotoProfile.png"
          alt="Murtamad Pratama profile photo"
          fill
          priority
          sizes="(min-width: 1024px) 448px, 88vw"
          className="object-cover saturate-[0.9]"
        />
      </div>
    </figure>
  );
}

export function ProjectCard({
  index,
  project,
  onOpen,
}: {
  index: number;
  project: Project;
  onOpen?: () => void;
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      !onOpen ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onOpen();
  }

  return (
    <article className="border-t border-white/10">
      <a
        href={project.actionHref}
        onClick={handleClick}
        className="group grid gap-6 py-9 transition hover:bg-white/[0.015] sm:py-11 lg:grid-cols-[3rem_minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:gap-10"
      >
        <p className="font-mono text-xs text-slate-600">
          {String(index + 1).padStart(2, "0")}
        </p>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-300">
            {project.role} / {project.status}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white transition group-hover:text-emerald-200 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            {project.context}
          </p>
          {project.liveUrl && (
            <p className="mt-4 break-all font-mono text-[11px] text-emerald-300">
              Live · {project.liveUrl}
            </p>
          )}
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Engineering scope
          </p>
          <ul className="mt-4 space-y-3">
            {project.responsibilities.slice(0, 2).map((item) => (
              <li
                key={item}
                className="relative pl-5 text-sm leading-6 text-slate-300 before:absolute before:left-0 before:top-[0.65rem] before:h-px before:w-2 before:bg-emerald-400"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-[11px] leading-6 text-slate-500">
            {project.stack.join(" · ")}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4">
            {project.actionLabel}
            <IoArrowForwardOutline aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="border-t border-white/10 py-6">
      <div className="flex items-center gap-3 text-emerald-300">
        <Icon className="text-lg" aria-hidden="true" />
        <h3 className="text-base font-semibold text-white">{service.title}</h3>
      </div>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
        {service.description}
      </p>
    </article>
  );
}

export function Sosmed({ item }: { item: Social }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      aria-label={item.label}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className="grid h-11 w-11 place-items-center text-xl text-slate-400 transition hover:text-emerald-300"
    >
      <Icon aria-hidden="true" />
    </a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
        {children}
      </span>
      <span className="h-px w-16 bg-white/15" aria-hidden="true" />
    </div>
  );
}

export function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-white/15 pt-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{value}</p>
    </div>
  );
}
