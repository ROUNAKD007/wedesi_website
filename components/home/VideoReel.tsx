"use client";

import { useReducedMotion } from "framer-motion";

export default function VideoReel() {
  const reduce = useReducedMotion();
  const prefersReduce: boolean = (reduce ?? false) as boolean;

  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <video
            className="h-full w-full object-cover"
            src="/hero.mp4"               /* put your reel here */
            autoPlay={!prefersReduce}     /* no autoplay if user prefers reduced motion */
            muted
            loop
            playsInline
            controls={prefersReduce}      /* show controls only when reduced motion */
            poster="/images/hero-poster.jpg" /* optional poster image */
          />
        </div>
      </div>
    </section>
  );
}
