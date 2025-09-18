import Link from "next/link";
import { Camera, Users, CalendarDays, HandHeart } from "lucide-react";

const items = [
  { href: "/photos",  Icon: Camera,       title: "Photos",  sub: "Gallery"   },
  { href: "/join",    Icon: Users,        title: "Join",    sub: "Membership"},
  { href: "/events",  Icon: CalendarDays, title: "Events",  sub: "Calendar"  },
  { href: "/support", Icon: HandHeart,    title: "Support", sub: "Donate"    },
];

export default function TopIconsStrip() {
  return (
    <div className="w-full border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-10 py-4 overflow-x-auto
                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map(({ href, Icon, title, sub }) => (
            <Link key={href} href={href} className="group flex shrink-0 flex-col items-center gap-2 text-white/90">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 transition group-hover:border-white/30 group-hover:bg-white/10">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-center leading-tight">
                <div className="text-sm font-medium">{title}</div>
                <div className="text-xs text-white/60">{sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
