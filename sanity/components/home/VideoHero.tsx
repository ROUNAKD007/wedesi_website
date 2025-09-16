"use client";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function VideoHero() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  return (
    <section className="bg-black">
      <div className="relative mx-auto max-w-[1400px] px-0 md:px-4 py-8 md:py-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <video
            ref={ref}
            src="/videos/event-reel.mp4"
            className="h-[46vh] md:h-[60vh] w-full object-cover"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            controls={reduce}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
