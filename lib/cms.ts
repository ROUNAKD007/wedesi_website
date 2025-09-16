import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const sanity = createClient({ projectId, dataset, apiVersion, useCdn: true })

export async function getUpcomingEvents(limit = 6) {
  try {
    const now = new Date().toISOString()
    const query = `*[_type == "event" && start >= $now] | order(start asc)[0...$limit]{
      _id, title, slug, start, end, location, coverImage{asset->{url}}
    }`
    return await sanity.fetch(query, { now, limit })
  } catch {
    return []
  }
}
