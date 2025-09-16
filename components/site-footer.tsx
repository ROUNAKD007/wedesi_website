import { socialLinks } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} WeDesi @ UIC</p>
          <div className="flex gap-4">
            <a href={socialLinks.instagram} target="_blank" className="hover:underline">@wedesi.uic</a>
            <a href={socialLinks.linktree} target="_blank" className="hover:underline">Linktree</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
