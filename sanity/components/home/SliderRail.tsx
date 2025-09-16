import Link from "next/link";
const slides = [
  { title: "Event Calendar", desc: "See the month at a glance.", href: "/events" },
  { title: "Upcoming Events", desc: "RSVP & invite friends.", href: "/events" },
  { title: "Photos", desc: "Relive the moments.", href: "/photos" },
  { title: "Join", desc: "WhatsApp, GroupMe, GBMs.", href: "/join" },
  { title: "Support", desc: "Keep the culture alive.", href: "/support" },
];
export default function SliderRail() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">What’s happening</h2>
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="region" aria-label="WeDesi highlights">
          {slides.map((s) => (
            <Link key={s.title} href={s.href}
              className="snap-start min-w-[80%] sm:min-w-[50%] lg:min-w-[33%] rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-white/20 hover:translate-y-[-2px]">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-300">{s.desc}</p>
              <span className="mt-4 inline-block text-sm text-white/70 underline">Open</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
