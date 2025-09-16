import { supportLinks } from "@/lib/links";
export const metadata = { title: "Support — WeDesi @ UIC" };

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Support WeDesi</h1>
      <p className="mt-3 text-neutral-400">Your support powers cultural events and programs at UIC.</p>
      <div className="mt-8 grid gap-3">
        {supportLinks.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
             className="rounded-xl border border-neutral-700 bg-black px-4 py-3 text-center text-white hover:border-white transition">
            {l.label}
          </a>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-neutral-700 p-4">
        <h2 className="text-xl font-semibold">Sponsors</h2>
        <p className="mt-2 text-neutral-300">
          Interested in sponsoring our events? Email{" "}
          <a className="underline" href="mailto:wedesi.uic@gmail.com">wedesi.uic@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
