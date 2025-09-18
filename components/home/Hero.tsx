"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, Stagger } from "@/components/motion/FX";
import { pages } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-black">
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-24rem] h-[78rem] w-[78rem] -translate-x-1/2 rounded-full bg-maroon/22 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_32%,rgba(122,31,43,0.10),transparent_62%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 md:pt-28">
        <motion.div {...fadeUp(0)} className="mb-6 inline-flex items-center gap-3 opacity-90">
          <Image src="/logo.jpeg" alt="WeDesi" width={36} height={36} className="rounded-md" />
          <span className="text-sm text-white/75">WeDesi @ UIC</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.06)}
          className="text-center text-[40px] leading-[1.05] font-semibold tracking-tight text-white md:text-[72px]"
        >
          South Asian community at UIC — <span className="text-maroon">show up</span>, belong, create.
        </motion.h1>

        <motion.p
          {...fadeUp(0.14)}
          className="mx-auto mt-5 max-w-3xl text-center text-lg md:text-xl text-white/80"
        >
          Culture, friends, and impact — on campus and beyond.
        </motion.p>

        <Stagger delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={pages.join}
              className="rounded-full bg-white px-7 py-3 text-black transition hover:opacity-90"
            >
              Join WeDesi
            </Link>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
