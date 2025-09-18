import Link from "next/link";
import { social } from "@/lib/links";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <div>© <span className="text-white">WeDesi @ UIC</span> · Built by students</div>
          <div className="flex gap-4">
            <Link href="/photos"  className="hover:text-white">Photos</Link>
            <Link href="/events"  className="hover:text-white">Events</Link>
            <Link href="/join"    className="hover:text-white">Join</Link>
            <a href={social.instagram} target="_blank" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
