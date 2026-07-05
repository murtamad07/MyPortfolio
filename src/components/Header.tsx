"use client";

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
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#061523]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#about"
          className="text-3xl font-black tracking-tight text-white"
        >
          MP
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-3 left-0 h-0.5 w-0 rounded-full bg-emerald-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div
            aria-label="Language selector"
            className="grid grid-cols-2 rounded-md border border-white/10 bg-slate-950/70 p-1"
          >
            {languageOptions.map((item) => {
              const isActive = language === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onLanguageChange(item.value)}
                  className={`h-8 min-w-10 rounded px-2 text-xs font-black transition ${
                    isActive
                      ? "bg-emerald-400 text-slate-950"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <a
            href="mailto:murtamad501@gmail.com"
            className="hidden rounded-md bg-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300 sm:inline-flex"
          >
            {connectLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
