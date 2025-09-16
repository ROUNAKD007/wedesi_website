import Link from "next/link";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] md:min-h-screen overflow-hidden bg-black">
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-maroon/20 blur-[120px]" />
      </div>

      <Parallax>
        <div className="mx-auto flex min-h-[90vh] md:min-h-screen max-w-6xl flex-col justify-center px-4">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
              South Asian community at UIC — <span className="text-maroon">show up</span>, belong, create.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-2xl text-lg md:text-xl text-neutral-300">
              WeDesi is a student-run home for culture, friendship, and impact. Join us for festivals, meetups, and collabs.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex w-full flex-wrap gap-3">
              <Link href="/join" className="rounded-2xl bg-white px-6 py-3 text-black hover:opacity-90 transition">
                Join WeDesi
              </Link>
              <Link href="/photos" className="rounded-2xl border border-white/30 px-6 py-3 text-white hover:border-white transition">
                See Photos
              </Link>
            </div>
          </Reveal>
        </div>
      </Parallax>
    </section>
  );
}
