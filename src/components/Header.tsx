"use client";

import { IoArrowForwardOutline, IoMenuOutline } from "react-icons/io5";

type Language = "en" | "id";

type HeaderProps = {
  connectLabel: string;
  language: Language;
  navItems: { label: string; href: string }[];
  onLanguageChange: (language: Language) => void;
};

const languageOptions: { label: string; value: Language }[] = [
  { label: "EN", value: "en" },
  { label: "ID", value: "id" },
];

export default function Header({
  connectLabel,
  language,
  navItems,
  onLanguageChange,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#050910]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label="Murtamad Pratama - home"
          className="text-sm font-semibold tracking-[-0.015em] text-white sm:text-base"
        >
          <span className="sm:hidden">MP</span>
          <span className="hidden sm:inline">Murtamad Pratama</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-xs font-semibold text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div aria-label="Language selector" role="group" className="flex items-center">
            {languageOptions.map((item) => {
              const isActive = language === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onLanguageChange(item.value)}
                  className={`h-10 min-w-9 px-1 text-[11px] font-bold transition ${
                    isActive
                      ? "text-emerald-300 underline decoration-emerald-400/50 underline-offset-4"
                      : "text-slate-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <a
            href="mailto:murtamad501@gmail.com"
            className="hidden min-h-11 items-center gap-2 text-sm font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 transition hover:text-emerald-200 sm:inline-flex"
          >
            {connectLabel}
            <IoArrowForwardOutline aria-hidden="true" />
          </a>
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open navigation menu"
              className="grid h-11 w-11 cursor-pointer list-none place-items-center text-xl text-slate-300 transition hover:text-white"
            >
              <IoMenuOutline aria-hidden="true" />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full mt-3 w-64 border border-white/15 bg-slate-950 p-3 shadow-2xl shadow-black/50"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) =>
                    event.currentTarget.closest("details")?.removeAttribute("open")
                  }
                  className="flex min-h-11 items-center border-b border-white/10 px-2 text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:murtamad501@gmail.com"
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="mt-2 flex min-h-11 items-center justify-between px-2 text-sm font-bold text-emerald-300"
              >
                {connectLabel}
                <IoArrowForwardOutline aria-hidden="true" />
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
