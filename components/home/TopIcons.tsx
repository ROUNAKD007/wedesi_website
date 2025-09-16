import Link from "next/link";
import { Camera, Users, CalendarDays, HandHeart } from "lucide-react";

const items = [
  { href: "/photos",  label: "Photos",  Icon: Camera,        sub: "Gallery" },
  { href: "/join",    label: "Join",    Icon: Users,         sub: "Membership" },
  { href: "/events",  label: "Events",  Icon: CalendarDays,  sub: "Calendar" },
  { href: "/support", label: "Support", Icon: HandHeart,     sub: "Donate" },
];

export default function TopIcons() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 py-6 md:py-8">
          {items.map(({ href, label, sub, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex w-[110px] flex-col items-center text-center"
              aria-label={label}
            >
              <span
                className="mb-2 grid h-14 w-14 place-items-center rounded-full border border-white/15
                           bg-white/5 backdrop-blur transition
                           group-hover:border-white/30 group-hover:bg-white/10"
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
              <span className="text-[13px] font-medium text-white">{label}</span>
              <span className="text-[12px] text-white/60">{sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
