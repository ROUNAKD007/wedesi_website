"use client";
import Link from "next/link";
import { Camera, Users, CalendarDays, HandHeart } from "lucide-react";
import { Stagger } from "@/components/motion/FX";
import { pages } from "@/lib/links";

const items = [
  { href: pages.photos,  Icon: Camera,       title: "Photos",  sub: "Gallery"    },
  { href: pages.join,    Icon: Users,        title: "Join",    sub: "Membership" },
  { href: pages.events,  Icon: CalendarDays, title: "Events",  sub: "Calendar"   },
  { href: pages.support, Icon: HandHeart,    title: "Support", sub: "Donate"     },
];

export default function ServicesRow() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="mx-auto -mt-14 grid w-full max-w-3xl grid-cols-2 gap-6 rounded-2xl
                     border border-white/10 bg-white/5 p-5 backdrop-blur
                     sm:grid-cols-4 sm:gap-4 sm:rounded-full sm:px-6 sm:py-4"
        >
          <Stagger delay={0.06}>
            {items.map(({ href, Icon, title, sub }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col items-center justify-center gap-1 rounded-xl p-3
                           text-white/90 transition hover:bg-white/5"
              >
                <span
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/15
                             bg-white/5 transition group-hover:border-white/25 group-hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-sm font-medium">{title}</div>
                <div className="text-[11px] text-white/60">{sub}</div>
              </Link>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  );
}
