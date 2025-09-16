import { getUpcomingEvents } from '@/lib/cms'
import { EventList } from '@/components/event-list'

export const metadata = { title: 'Events — WeDesi @ UIC' }

export default async function EventsPage() {
  const events = await getUpcomingEvents(20)
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Events</h1>
      <EventList events={events} />
    </div>
  )
}
