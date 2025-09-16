import { getUpcomingEvents } from "@/lib/cms";
import { EventList } from "@/components/event-list";
export default async function EventsTeaser() {
  const events = await getUpcomingEvents(6);
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Upcoming Events</h2>
        <div className="mt-6"><EventList events={events} /></div>
      </div>
    </section>
  );
}
