"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WordFlip from "@/components/hero/WordFlip";
import MagneticButton from "@/components/cta/MagneticButton";
import confetti from "canvas-confetti";

export default function Hero() {
  const badges = ["Community","Culture","Career","Collabs"];
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-transparent">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 md:pt-28">
        <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-3 opacity-90">
          <Image src="/logo.jpeg" alt="WeDesi" width={36} height={36} className="rounded-md" />
          <span className="text-sm text-white/75">WeDesi @ UIC</span>
        </motion.div>

        <motion.h1
          initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.05 }}
          className="animate-sheen bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-center
                     text-[40px] leading-[1.05] font-semibold tracking-tight text-transparent md:text-[72px]"
        >
          South Asian community at UIC — <WordFlip />, belong, create.
        </motion.h1>

        <motion.p
          initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-5 max-w-3xl text-center text-lg md:text-xl text-white/80"
        >
          Culture, friends, and impact — on campus and beyond.
        </motion.p>

        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden:{}, show:{ transition:{ staggerChildren: .08, delayChildren: .2 } } }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {badges.map(b => (
            <motion.span key={b}
              variants={{ hidden:{ y:10, opacity:0 }, show:{ y:0, opacity:1 } }}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75"
            >{b}</motion.span>
          ))}
        </motion.div>

        <motion.div initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/join">
            <MagneticButton onClick={() => confetti({ particleCount: 140, spread: 75, origin: { y: 0.7 } })}>
              Join WeDesi
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
