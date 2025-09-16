import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function FlyerHero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen bg-black">
      <div className="absolute inset-0">
        <Image src="/flyer.svg" alt="Upcoming WeDesi event flyer" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative mx-auto grid min-h-[92vh] md:min-h-screen max-w-6xl place-items-center px-4">
        <Reveal>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Upcoming at WeDesi</h1>
            <p className="mt-3 text-neutral-200 max-w-2xl mx-auto">Don’t miss our next event — join the community, invite friends, and vibe.</p>
            <div className="mt-7 flex gap-3 justify-center">
              <Link href="/join" className="rounded-2xl bg-white px-6 py-3 text-black hover:opacity-90 transition">Join WeDesi</Link>
              <Link href="/support" className="rounded-2xl border border-white/40 px-6 py-3 text-white hover:border-white transition">Support</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
