"use client";
import Link from "next/link";
import Image from "next/image";
import { pages } from "@/lib/links";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={pages.home} className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="WeDesi" width={28} height={28} className="rounded" />
          <span className="text-sm font-medium text-white/90">WeDesi @ UIC</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href={pages.events} className="text-white/80 hover:text-white">Events</Link>
          <Link href={pages.photos} className="text-white/80 hover:text-white">Photos</Link>
          <Link href={pages.join} className="text-white/80 hover:text-white">Join</Link>
          <Link href={pages.support} className="text-white/80 hover:text-white">Support</Link>
        </nav>
      </div>
    </header>
  );
}
