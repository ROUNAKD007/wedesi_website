import Link from "next/link";
import { Camera, Users, CalendarDays, HandHeart } from "lucide-react";
const items = [
  { href: "/photos",  label: "Photos",  Icon: Camera },
  { href: "/join",    label: "Join",    Icon: Users },
  { href: "/events",  label: "Events",  Icon: CalendarDays },
  { href: "/support", label: "Support", Icon: HandHeart },
];
export default function IconRow() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/90">
      {items.map(({ href, label, Icon }) => (
        <Link key={href} href={href} className="group inline-flex flex-col items-center gap-2" aria-label={label}>
          <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition group-hover:border-white/30 group-hover:bg-white/10">
            <Icon className="h-5 w-5 text-white" />
          </span>
          <span className="text-xs sm:text-sm text-white/80 group-hover:text-white">{label}</span>
        </Link>
      ))}
    </div>
  );
}
