"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="WeDesi" width={24} height={24} className="rounded-[4px]" />
          <span className="sr-only">WeDesi @ UIC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white">
          <Link href="/photos"  className="hover:opacity-80">Photos</Link>
          <Link href="/join"    className="hover:opacity-80">Join</Link>
          <Link href="/events"  className="hover:opacity-80">Events</Link>
          <Link href="/support" className="hover:opacity-80">Support</Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black text-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <Link href="/photos"  onClick={() => setOpen(false)}>Photos</Link>
            <Link href="/join"    onClick={() => setOpen(false)}>Join</Link>
            <Link href="/events"  onClick={() => setOpen(false)}>Events</Link>
            <Link href="/support" onClick={() => setOpen(false)}>Support</Link>
          </div>
        </div>
      )}
    </header>
  );
}
