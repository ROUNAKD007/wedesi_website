import EventList from "@/components/event-list";
import { getUpcomingEvents } from "@/lib/cms";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EventsPage() {
  const items = await getUpcomingEvents(24); // [] if CMS not configured
  return (
    <main className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Events</h1>
        <div className="mt-6">
          <EventList items={items} />
        </div>
      </div>
    </main>
  );
}
