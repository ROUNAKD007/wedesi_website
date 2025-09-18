export type SimpleEvent = {
  title?: string;
  start?: string;
  date?: string;
  location?: string;
  href?: string;
  slug?: string;
};

const PID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;

/** Returns [] if env is missing or any error occurs. */
export async function getUpcomingEvents(limit = 12): Promise<SimpleEvent[]> {
  if (!PID || !DATASET) return [];
  try {
    const { createClient } = await import("@sanity/client");
    const client = createClient({
      projectId: PID,
      dataset: DATASET,
      apiVersion: "2024-01-01",
      useCdn: true,
    });

    const query = `*[_type == "event" && dateTime(coalesce(start, date)) >= dateTime(now())]
                   | order(coalesce(start, date) asc)[0...$limit]{
                     title, start, date, location, rsvpLink, "slug": slug.current
                   }`;

    const rows = await client.fetch(query, { limit });
    return (rows || []).map((r: any) => ({
      title: r?.title,
      start: r?.start,
      date: r?.date,
      location: r?.location,
      href: r?.rsvpLink,
      slug: r?.slug,
    }));
  } catch {
    return [];
  }
}
