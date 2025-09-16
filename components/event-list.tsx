export type Event = {
  _id: string
  title: string
  slug?: { current: string }
  start: string
  end?: string
  location?: string
  coverImage?: { asset?: { url?: string } }
}

export function EventList({ events }: { events: Event[] }) {
  if (!events || events.length === 0) {
    return <p className="mt-4 text-neutral-600">No upcoming events yet. Check back soon!</p>
  }
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((ev) => (
        <article key={ev._id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 p-4">
          <h3 className="text-lg font-semibold">{ev.title}</h3>
          <p className="mt-1 text-sm text-neutral-600">{new Date(ev.start).toLocaleString()}</p>
          {ev.location && <p className="text-sm text-neutral-600">{ev.location}</p>}
        </article>
      ))}
    </div>
  )
}
