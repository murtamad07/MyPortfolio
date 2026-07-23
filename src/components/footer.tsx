import { socialLinks } from "@/lib/content";
import { Sosmed } from "./page-components";

export function Footer({ rights }: { rights: string }) {
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