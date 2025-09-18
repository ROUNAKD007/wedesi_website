"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const centerTabs = [
  { label: "Culture",   href: "#culture"   },
  { label: "Community", href: "#community" },
  { label: "Career",    href: "#career"    },
  { label: "Impact",    href: "#impact"    },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition
      ${scrolled ? "bg-black/85 backdrop-blur border-white/10" : "bg-black/70 backdrop-blur-sm border-transparent"}`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3">
        {/* Left: logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="WeDesi" width={28} height={28} className="rounded-md" />
          </Link>
        </div>

        {/* Center: BIG tabs */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {centerTabs.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className="text-lg tracking-tight text-white hover:opacity-90"
            >
              {t.label}
            </a>
          ))}
        </nav>

        {/* Right: single pill CTA */}
        <div className="flex justify-end">
          <Link
            href="/events"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition"
          >
            RSVP • Upcoming
          </Link>
        </div>
      </div>
    </header>
  );
}
