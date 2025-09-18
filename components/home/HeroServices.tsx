import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { Camera, Users, CalendarDays, HandHeart } from "lucide-react";

const row = [
  { href: "/photos",  Icon: Camera,       title: "Photos",  sub: "Gallery"   },
  { href: "/join",    Icon: Users,        title: "Join",    sub: "Membership"},
  { href: "/events",  Icon: CalendarDays, title: "Events",  sub: "Calendar"  },
  { href: "/support", Icon: HandHeart,    title: "Support", sub: "Donate"    },
];

export default function HeroServices() {
  return (
    <section className="relative isolate min-h-[88vh] md:min-h-[92vh] overflow-hidden bg-black">
      {/* background vignette like Apple */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20rem] h-[70rem] w-[70rem] -translate-x-1/2 rounded-full bg-maroon/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(122,31,43,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20 text-center">
        {/* small logo + name */}
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 opacity-90">
            <Image src="/logo.jpeg" alt="WeDesi" width={34} height={34} className="rounded-md" />
            <span className="text-white/80 text-sm">WeDesi @ UIC</span>
          </div>
        </Reveal>

        {/* giant headline */}
        <Reveal delay={0.06}>
          <h1 className="mx-auto max-w-5xl text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Meet the <span className="text-maroon">WeDesi</span> community.
          </h1>
        </Reveal>

        {/* subcopy */}
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-3xl text-lg md:text-xl text-white/80">
            Culture, friends, and impact — on campus and beyond. Join us for festivals,
            meetups, collabs, and memories.
          </p>
        </Reveal>

        {/* small circular icons row under title */}
        <Reveal delay={0.18}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-6 sm:gap-8">
            {row.map(({ href, Icon, title, sub }) => (
              <Link key={href} href={href} className="group flex w-28 flex-col items-center gap-2">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 transition group-hover:border-white/30 group-hover:bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <div className="text-center leading-tight">
                  <div className="text-sm text-white">{title}</div>
                  <div className="text-xs text-white/60">{sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* pill CTAs */}
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/join"
              className="rounded-full bg-white px-6 py-3 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:opacity-90 transition"
            >
              Join
            </Link>
            <Link
              href="/photos"
              className="rounded-full border border-white/25 px-6 py-3 text-white hover:border-white transition"
            >
              See Photos
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
