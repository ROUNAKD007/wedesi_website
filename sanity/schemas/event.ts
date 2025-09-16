export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'start', type: 'datetime', title: 'Start' },
    { name: 'end', type: 'datetime', title: 'End' },
    { name: 'location', type: 'string', title: 'Location' },
    { name: 'coverImage', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'description', type: 'array', of: [{ type: 'block' }], title: 'Description' },
    { name: 'rsvpLink', type: 'url', title: 'RSVP Link' }
  ]
}
