import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import IconRow from "@/components/home/IconRow";

export default function HeroCentered() {
  return (
    <section className="relative isolate min-h-[88vh] md:min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-36 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-maroon/25 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28 flex flex-col items-center text-center">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-3 opacity-90">
            <Image src="/logo.jpeg" alt="WeDesi" width={36} height={36} className="rounded-md" />
            <span className="text-white/80 text-sm">WeDesi @ UIC</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Meet the <span className="text-maroon">WeDesi</span> community.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-neutral-300">
            Culture, friends, and impact—on campus and beyond. Join us for festivals, meetups, collabs, and memories.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <IconRow />
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/join" className="rounded-2xl bg-white px-6 py-3 text-black hover:opacity-90 transition">Join</Link>
            <Link href="/photos" className="rounded-2xl border border-white/30 px-6 py-3 text-white hover:border-white transition">See Photos</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
