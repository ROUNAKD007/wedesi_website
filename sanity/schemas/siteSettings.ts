export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Site Title' },
    { name: 'instagram', type: 'url', title: 'Instagram' },
    { name: 'whatsapp', type: 'url', title: 'WhatsApp' },
    { name: 'email', type: 'string', title: 'Email' }
  ]
}
