import Link from "next/link";
import { supportLinks } from "@/lib/links";

export default function SupportSection() {
  const gfm = supportLinks[0];
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Keep the culture alive.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Your support helps us host festivals, community nights, and collaborative programs.
        </p>
        <div className="mt-8">
          <Link href={gfm.href} target="_blank"
            className="rounded-full bg-white px-6 py-3 text-black hover:opacity-90 transition">
            {gfm.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
