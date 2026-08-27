import { socialLinks } from "@/lib/content";
import { Sosmed } from "./page-components";

export function Footer({ rights }: { rights: string }) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050910] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 md:flex-row lg:px-8">
        <a
          href="#about"
          className="text-2xl font-black tracking-[-0.08em] text-white"
        >
          MP<span className="text-emerald-400">.</span>
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
