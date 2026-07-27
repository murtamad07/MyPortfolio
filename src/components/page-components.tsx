import { Project, Service, Social } from "@/lib/content";
import Image from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  IoBuildOutline,
  IoCodeSlashOutline,
  IoLockClosedOutline,
  IoPeopleOutline,
  IoRocketOutline,
  IoTrophyOutline,
} from "react-icons/io5";

export const sectionShell =
  "relative min-h-screen scroll-mt-20 border-t border-white/10 py-24 shadow-[0_-32px_80px_rgba(0,0,0,0.42)]";

export const sectionContent = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
export const contactInputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-bold/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-emerald-400/70 focus:bg-bold/40 focus:ring-4 focus:ring-emerald-400/10";


export function ProfileVisual() {
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
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
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
      <p className="mt-3 text-sm leading-6 text-slate-400">{project.context}</p>

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

export function ServiceDevice() {
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
        <IoCodeSlashOutline
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

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]">
      <span className="grid h-10 w-10 place-items-center rounded-md border border-emerald-400/25 bg-emerald-400/10 text-xl text-emerald-300">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-white">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {service.description}
      </p>
    </article>
  );
}

export function Sosmed({ item }: { item: Social }) {
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

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-md border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-xs font-semibold text-emerald-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

export function MetricCard({
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