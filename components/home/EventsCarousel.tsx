import Link from "next/link";
import { pages } from "@/lib/links";

async function getEvents() {
  try {
    const mod = await import("@/lib/cms");
    if (mod.getUpcomingEvents) {
      return await mod.getUpcomingEvents(10);
    }
  } catch {}
  return [];
}

export default async function EventsCarousel() {
  const events = await getEvents();

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Upcoming Events</h2>
          <Link href={pages.events} className="text-sm text-white/80 hover:text-white underline">All events</Link>
        </div>

        {events.length === 0 ? (
          <p className="mt-6 text-white/70">No upcoming events yet. Check back soon!</p>
        ) : (
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {events.map((e: any) => (
              <Link key={e.slug || e.title} href={pages.events}
                className="snap-start min-w-[80%] sm:min-w-[50%] lg:min-w-[33%] rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-white/20 hover:translate-y-[-2px]">
                <div className="text-sm text-white/60">{new Date(e.start || e.date || Date.now()).toLocaleString()}</div>
                <h3 className="mt-1 text-lg font-semibold">{e.title || "Event"}</h3>
                {e.location && <p className="text-white/70">{e.location}</p>}
                <span className="mt-4 inline-block text-sm text-white/70 underline">Details</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
