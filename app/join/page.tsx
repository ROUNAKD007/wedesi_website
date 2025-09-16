import { joinLinks } from "@/lib/links";
export const metadata = { title: "Join — WeDesi @ UIC" };

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Join WeDesi</h1>
      <p className="mt-3 text-neutral-400">One hub for chats, membership, and GBM registration.</p>
      <div className="mt-8 grid gap-3">
        {joinLinks.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
             className="rounded-xl border border-neutral-700 bg-black px-4 py-3 text-center text-white hover:border-white transition">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
