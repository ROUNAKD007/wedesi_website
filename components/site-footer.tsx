import Link from "next/link";
import { socialLinks } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} WeDesi @ UIC</p>
        <nav className="flex flex-wrap items-center gap-4">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="hover:text-white"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
