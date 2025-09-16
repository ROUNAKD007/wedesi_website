export default function sitemap() {
  const base = 'https://wedesi.vercel.app' // change after deploy
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/events`, lastModified: new Date() },
    { url: `${base}/join`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ]
}
