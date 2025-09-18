import Link from "next/link";
import { joinLinks } from "@/lib/links";

export default function MembershipCallout() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Belong to something bigger.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Get plugged into WhatsApp & GroupMe, come to GBMs, and help shape WeDesi.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {joinLinks.map(l => (
            <Link key={l.href} href={l.href} target="_blank"
              className="rounded-full border border-white/25 px-5 py-3 text-white hover:border-white transition">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
