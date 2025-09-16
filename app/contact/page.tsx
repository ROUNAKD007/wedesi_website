export const metadata = { title: 'Contact — WeDesi @ UIC' }

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-neutral-700">Questions, collabs, or sponsorships? Reach out to us.</p>
      <div className="mt-6">
        <a href="mailto:board@wedesi-uic.org" className="text-peacock underline">board@wedesi-uic.org</a>
      </div>
    </div>
  )
}
