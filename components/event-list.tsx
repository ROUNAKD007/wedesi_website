export type EventItem = {
  title: string;
  date?: string;
  location?: string;
  href?: string;
};
export default function EventList({ items = [] as EventItem[] }) {
  if (!items.length) {
    return <p className="text-white/70">No upcoming events yet. Check back soon!</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((e, i) => (
        <li key={i} className="rounded-xl border border-white/10 p-4">
          <div className="text-white font-medium">{e.title}</div>
          {e.date && <div className="text-white/70 text-sm mt-1">{e.date}</div>}
          {e.location && <div className="text-white/60 text-sm">{e.location}</div>}
          {e.href && (
            <a
              href={e.href}
              target="_blank"
              className="mt-3 inline-block text-sm text-white/90 underline"
            >
              Details / RSVP
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
